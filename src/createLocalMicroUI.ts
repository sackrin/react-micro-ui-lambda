import express, { json } from 'express';
import cors from 'cors';
import LambdaModes from '@typings/LambdaModes';
import getLocalHttp from "@src/Local/getLocalHttp";
import getLocalRest from "@src/Local/getLocalRest";

type CreateLocalMicroUI = (handler: CallableFunction, mode: LambdaModes) => { boot: any; server: any };

const createLocalMicroUI: CreateLocalMicroUI = (handler, mode) => {
  // Create a new express instance
  const server = express();
  // Setting up middlewares
  server.use(json());
  server.use(cors({ origin: '*' }));
  // Serve static assets
  // Normally this would be within an external CDN
  // Locally we need to serve it from the host
  server.use(express.static('./.microui'));
  // Add the use lambda polyfill
  server.use(mode === 'http' ? getLocalHttp(handler) : getLocalRest(handler));
  // Boot helper
  const boot = (port = 9000) => {
    // Output a message stating this is just a development server
    console.log('### LOCAL LAMBDA SERVER ###');
    console.log(`Your local lambda development server is starting on port ${port}`);
    // Start the actual express server
    server.listen(port);
    // Notify the user the server has started
    console.log(`Server started! You can make requests against http://localhost:${port}`)
  };
  // Return the mock server
  return { boot, server };
};

export default createLocalMicroUI;
