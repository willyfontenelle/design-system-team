"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Team Component/Card Content',
  component: _.CardContent
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '315px',
      height: '417px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.CardContent, args));
};

var CardContent = Template.bind({});
exports.CardContent = CardContent;
CardContent.args = {
  tagContent: 'Tag Hightlight',
  headingContent: 'Heading',
  paragraphContent: "Lorem ipsum dolor sit amet consectetur adipiscing."
};