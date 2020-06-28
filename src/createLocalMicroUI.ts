import express, { json } from 'express';
import cors from 'cors';
import useAsLambda from './useAsLambda';
import LambdaModes from '@typings/LambdaModes';

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
  server.use(useAsLambda(handler));
  // Boot helper
  const boot = (port = 9000) => {
    server.listen(port);
  };
  // Return the mock server
  return { boot, server };
};

export default createLocalMicroUI;
