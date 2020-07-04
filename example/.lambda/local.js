"use strict";

require("core-js/stable");

require("regenerator-runtime/runtime");

var _microui = _interopRequireDefault(require("../microui.config"));

var _createLocalMicroUI = _interopRequireDefault(require("@sackrin/react-micro-ui-lambda/lib/createLocalMicroUI"));

var _lambda = require("./lambda");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a mock lambda server
// This will use your lambda handler and express to roughly simulate an AWS API gateway
const {
  boot,
  server
} = (0, _createLocalMicroUI.default)(_lambda.handler, _microui.default.api.mode); // Boot the mock API server on port 9000

boot(9000);