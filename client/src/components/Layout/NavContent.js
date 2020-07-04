Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ListItemLink = _interopRequireDefault(require("../ListItemLink"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

const list = [{ primary: 'Home', to: '/', icon: 'home' },
{ primary: 'Colaboradores', to: '/collaborator', icon: 'colaborador' },
{ primary: 'Aniversariantes', to: '/birthdays', icon: 'aniversario' },
{ primary: 'Código de condulta', to: '/codeofconduct', icon: 'codigo' },
{ primary: 'Voluntários', to: '/voluntary', icon: 'colaborador' },
{ primary: 'Links', to: '/birthdays', icon: 'link' },
{ primary: 'Eventos', to: '/birthdays', icon: 'evento' }]

var NavContentEx = function NavContentEx(_ref) {
  var onClickItem = _ref.onClickItem;
  return /*#__PURE__*/_react["default"].createElement(_List["default"], null, list.map(function (_ref2, i) {
    const { primary, icon, to } = _ref2;

    return /*#__PURE__*/_react["default"].createElement(_ListItemLink["default"], {
      primary,
      icon,
      to,
      index: i
    });
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    style: {
      margin: '12px 0'
    }
  }), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    onClick: onClickItem
  }));
};

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};
var _default = NavContentEx;
exports["default"] = _default;