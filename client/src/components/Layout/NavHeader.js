Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NavHeaderEx = function NavHeaderEx(_ref) {
  var collapsed = _ref.collapsed;
  var userName = _ref.username;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: collapsed ? 8 : 16,
      transition: '0.3s',
      
    }
  }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    style: {
      width: collapsed ? 48 : 60,
      height: collapsed ? 48 : 60,
      transition: '0.3s',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingBottom: 16,
      
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: 'h6',
    width: '100%',
    noWrap: true,
  }, userName)
    , /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      color: 'textSecondary',
      noWrap: true,
      gutterBottom: true
    }, "muitreasury@ui.com")), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null));
};

NavHeaderEx.propTypes = {
  collapsed: _propTypes["default"].bool.isRequired
};
NavHeaderEx.defaultProps = {};
var _default = NavHeaderEx;
exports["default"] = _default;