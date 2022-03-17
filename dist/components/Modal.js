"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(_ref) {
  let {
    children,
    close,
    state
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalWrapper",
    style: {
      display: state ? "flex" : "none"
    },
    onClick: close
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalText"
  }, children, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalClose"
  }, "X")));
}