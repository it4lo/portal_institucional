Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));
var _styles = require("@material-ui/core/styles");
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var styles = function styles(_ref) {
  var _root;

  var breakpoints = _ref.breakpoints,
    transitions = _ref.transitions;
  return {
    root: (_root = {
      padding: 16,
      transition: transitions.create()
    }, _defineProperty(_root, breakpoints.up('sm'), {
      padding: 24,
      maxWidth: 700,
      margin: 'auto'
    }), _defineProperty(_root, breakpoints.up('md'), {
      maxWidth: 960
    }), _root)
  };
};

var ContentEx = function ContentEx(_ref2) {
  var classes = _ref2.classes;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, 
  /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: 'overline'
  }, "INTRODUCING"),);
};

ContentEx.propTypes = {};
ContentEx.defaultProps = {};

var _default = (0, _styles.withStyles)(styles)(ContentEx);

exports["default"] = _default;