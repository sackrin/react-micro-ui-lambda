import 'core-js/stable';
import 'regenerator-runtime/runtime';
import microUIConfig from '../microui.config';
import createLocalMicroUI from '@sackrin/react-micro-ui-lambda/lib/createLocalMicroUI';
import { handler } from './lambda';

// Create a mock lambda server
// This will use your lambda handler and express to roughly simulate an AWS API gateway
const { boot, server } = createLocalMicroUI(handler, microUIConfig.api.mode);
// Boot the mock API server on port 9000
boot(9000);
