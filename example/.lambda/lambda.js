"use strict";

var _path = _interopRequireDefault(require("path"));

var _Components = require("./Components");

var _createLambdaMicroUI = _interopRequireDefault(require("@sackrin/react-micro-ui-lambda/lib/createLambdaMicroUI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.handler = async (event, context) => {
  // Retrieve the local config
  const microUIConfig = require(_path.default.join(process.cwd(), "microui.config.js")); // Create the Lambda


  const {
    route,
    strap,
    boot
  } = (0, _createLambdaMicroUI.default)(event, context, microUIConfig.api.mode, {
    profile: process.env.PROFILE || "local",
    config: microUIConfig
  }); // SERVER SIDE RENDERED COMPONENTS
  // Strap in the front end components

  strap("ExampleComponent", _Components.ExampleComponent); // Boot and handle the response

  return boot(event, context);
};