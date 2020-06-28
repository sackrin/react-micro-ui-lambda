import 'core-js/stable';
import 'regenerator-runtime/runtime';
import type { CreateLambda } from '@typings/CreateLambda';
import type { LambdaRoute } from '@typings/LambdaRoute';
import type { CreateLambdaStrap } from '@typings/CreateLambdaStrap';
import type { CreateLambdaBoot } from '@typings/CreateLambdaBoot';
import type { CreateLambdaRoute } from '@typings/CreateLambdaRoute';
import doBootstrapHandler from '@handlers/doBootstrapHandler';
import doStrapHandler from '@handlers/doStrapHandler';
import doNotFoundHandler from '@handlers/doNotFoundHandler';
import createLambdaResponse from '@helpers/createLambdaResponse';
import getRequestEventPath from "@helpers/getRequestEventPath";
import getRequestEventMethod from "@helpers/getRequestEventMethod";

const createLambdaMicroUI: CreateLambda = (event, context, mode, { config, profile = 'local', logger = console }) => {
  // Retrieve the environment profiles
  const env = config.environments.profiles[profile] || config.environments.profiles[config.environments.default];
  // Allow for env overrides
  const _messages = env.api?.messages || config.api.messages;
  // Retrieve any api env
  const apiEnv = env.api?.env || {};
  // Update the process env with any provided api env
  process.env = { ...process.env, ...apiEnv };
  // Where we will store the lambda routes
  const routes: LambdaRoute[] = [];
  // Attempt to start the express server
  try {
    // Saying hello
    logger.info(_messages.START_UP);
    // Hydrate and output the bootstrapper script
    routes.push(['/bootstrap.js', 'GET', doBootstrapHandler(env, config)]);
    // Adds a route to a router of sorts
    const route: CreateLambdaRoute = (path, method, handler) => {
      // Push into the route queue
      routes.push([path, method, handler]);
    };
    // Straps a component into the SSR api
    const strap: CreateLambdaStrap = (name, component) => {
      // Handle a GET request to fetch a component
      routes.push([`/${name}`, 'GET', doStrapHandler(name, component, logger, env, config, 'GET')]);
      // Handle a POST request to fetch a component
      routes.push([`/${name}`, 'POST', doStrapHandler(name, component, logger, env, config, 'POST')]);
    };
    // Boots and executes the lambda server
    const boot: CreateLambdaBoot = async (event, context) => {
      const path = getRequestEventPath(mode, event);
      const method = getRequestEventMethod(mode, event);
      // Search for and return the relevant handler
      // @TODO would be cool to use a regex in the future?
      // @TODO yes a find would probably be better
      const route = routes.find(([_path, _method, _handler]) => _path === path && method === _method);
      // Retrieve the payload
      return route ? route[2](mode, event, context) : doNotFoundHandler(mode, event, context);
    };
    // Returns the instance of the server, the strapper the booter, the config and the logger
    return { route, strap, boot, env, config: config, logger };
    // If the application throws an error
    // We catch and log for debugging
  } catch (e) {
    // Log out the thrown error
    logger.error(_messages.CRASHED, e.message);
    // Trigger the callback
    return createLambdaResponse({ error: e.message }, 500, {}, 'json');
  }
};

export default createLambdaMicroUI;
