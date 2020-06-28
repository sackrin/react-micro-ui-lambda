import path from 'path';
import { createElement } from 'react';
import { LambdaResponse } from '@typings/LambdaResponse';
import embedComponent from '@sackrin/react-micro-ui/lib/Helpers/embedComponent';
import createLambdaResponse from '@helpers/createLambdaResponse';
import { MicroUiConfigProfileEnv } from '@sackrin/react-micro-ui/lib/Types/MicroUiConfigProfileEnv';
import { MicroUiConfig } from '@sackrin/react-micro-ui/lib/Types/MicroUiConfig';
import LambdaModes from '@typings/LambdaModes';
import getRequestEventQuery from '@helpers/getRequestEventQuery';
import getRequestEventBody from '@helpers/getRequestEventBody';

type DoStrapHandler = (
  name: string,
  component: string,
  logger: any,
  env: MicroUiConfigProfileEnv,
  config: MicroUiConfig,
  method: string,
) => (mode: LambdaModes, event: any, context: any) => Promise<LambdaResponse>;

// Direct Import React
// We have to do it this way to permit SSR react + hooks
const ReactDOMServer = require(path.join(process.cwd(), 'node_modules', 'react-dom', 'server'));

const doStrapHandler: DoStrapHandler = (name, component, logger, env, config, method) => async (
  mode,
  event,
  context,
) => {
  // This is needed to stop issues with window and document throwing errors in SSR
  (global as any).window = {};
  (global as any).document = {};
  // Extract and construct the component props from the provided POST and GET variables
  const httpQuery = getRequestEventQuery(mode, event);
  const httpBody = getRequestEventBody(mode, event);
  const props = { ...httpQuery, ...httpBody };
  // Attempt to construct a static HTML representation of the component
  // Do this using provided POST and GET parameters
  try {
    // Attempt to render the component's HTML using react's ReactDOMServer
    const rendered = ReactDOMServer.renderToString(createElement(component, props));
    const html = embedComponent(name, env, config, props, rendered);
    // Return the static HTML to the client
    return createLambdaResponse(
      html,
      200,
      {
        expires: '-1',
        'cache-control': 'private, no-cache, no-store, must-revalidate',
        pragma: 'no-cache',
      },
      'html',
    );
  } catch (e) {
    // Log the error which the renderer encountered
    // @TODO should the error generator be a callback that can be provided to allow better customisation?
    logger.error({ type: 'COMPONENT_RENDER_ERROR', component: name, message: e.message, props });
    // Return a simple error message to the client
    // @TODO should this contain more information?
    // @TODO should this be within the config?
    return createLambdaResponse(
      'Component Error',
      500,
      {
        expires: '-1',
        'cache-control': 'private, no-cache, no-store, must-revalidate',
        pragma: 'no-cache',
      },
      'html',
    );
  }
};

export default doStrapHandler;
