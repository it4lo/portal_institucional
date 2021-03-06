

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _withWidth = require("@material-ui/core/withWidth");

var _InputBase = _interopRequireDefault(require("@material-ui/core/InputBase"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _Phone = _interopRequireDefault(require("@material-ui/icons/Phone"));

var _Camera = _interopRequireDefault(require("@material-ui/icons/Camera"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(_ref) {
  var direction = _ref.direction,
      spacing = _ref.spacing,
      transitions = _ref.transitions,
      breakpoints = _ref.breakpoints,
      palette = _ref.palette,
      shape = _ref.shape;
  return {
    header: {
      fontWeight: 900,
      minWidth: 0,
      fontSize: 18,
      
    },
    grow: {
      flexGrow: 1
    },
    search: _defineProperty({
      position: 'relative',
      marginRight: 8,
      borderRadius: shape.borderRadius,
      background: palette.type === 'dark' ? palette.background["default"] : palette.grey[200],
      '&:hover': {
        background: palette.type === 'dark' ? palette.background.paper : palette.grey[300]
      },
      marginLeft: 0,
      width: '100%'
    }, breakpoints.up('sm'), {
      marginLeft: spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: _defineProperty({
      borderRadius: 4,
      paddingTop: spacing(1),
      paddingRight: spacing(direction === 'rtl' ? 10 : 1),
      paddingBottom: spacing(1),
      paddingLeft: spacing(direction === 'rtl' ? 1 : 10),
      transition: transitions.create('width'),
      width: '100%'
    }, breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    })
  };
};

var HeaderEx = function HeaderEx(_ref2) {
  var classes = _ref2.classes,
      screen = _ref2.screen;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, 
  /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    noWrap: true,
    color: 'textSecondary',
    className: classes.header
  }, "Fundação Amazonas Sustentável"), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.grow
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.search
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.searchIcon
  }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)), /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    }
  })), screen === 'xs' && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)), screen === 'sm' && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_Favorite["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null))), (0, _withWidth.isWidthUp)('md', screen) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_Favorite["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_Phone["default"], null)), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_Camera["default"], null))));
};

HeaderEx.propTypes = {
  screen: _propTypes["default"].string,
  classes: _propTypes["default"].shape({}).isRequired
};
HeaderEx.defaultProps = {
  screen: null
};

var _default = (0, _styles.withStyles)(styles)(HeaderEx);

exports["default"] = _default;