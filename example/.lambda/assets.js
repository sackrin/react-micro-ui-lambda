"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Child = exports.Render = exports.Hydrate = exports.Components = void 0;

var _component = _interopRequireDefault(require("@loadable/component"));

var _reactDom = require("react-dom");

var _Helpers = require("@sackrin/react-micro-ui/lib/Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Enable code splitting by returning with loadable
const ExampleComponent = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("./Components/ExampleComponent"))));
const Components = {
  ExampleComponent
};
exports.Components = Components;
const Hydrate = (0, _Helpers.hydrateComponent)(_reactDom.hydrate, Components);
exports.Hydrate = Hydrate;
const Render = (0, _Helpers.renderComponent)(_reactDom.render, Components);
exports.Render = Render;
const Child = (0, _Helpers.childComponent)(Components);
exports.Child = Child;