'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Parser2 = require('./Parser');

var _Parser3 = _interopRequireDefault(_Parser2);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

var _ColorScheme = require('./constants/ColorScheme');

var _ColorScheme2 = _interopRequireDefault(_ColorScheme);

var _CommentsOrderBy = require('./constants/CommentsOrderBy');

var _CommentsOrderBy2 = _interopRequireDefault(_CommentsOrderBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = (_temp = _class = function (_Parser) {
  _inherits(Comments, _Parser);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: 'renderComponent',
    value: function renderComponent() {
      var _props = this.props;
      var colorScheme = _props.colorScheme;
      var _props$href = _props.href;
      var href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href;
      var numPosts = _props.numPosts;
      var orderBy = _props.orderBy;
      var width = _props.width;
      var children = _props.children;


      return _react2.default.createElement(
        'div',
        {
          className: 'fb-comments',
          'data-colorscheme': colorScheme,
          'data-numposts': numPosts,
          'data-href': href,
          'data-order-by': orderBy,
          'data-width': width,
          'data-skin': colorScheme
        },
        children
      );
    }
  }]);

  return Comments;
}(_Parser3.default), _class.contextTypes = _extends({}, _Parser3.default.contextTypes), _class.propTypes = _extends({}, _Parser3.default.propTypes, {
  href: _react.PropTypes.string,
  numPosts: _react.PropTypes.number.isRequired,
  orderBy: _react.PropTypes.string.isRequired,
  width: _react.PropTypes.oneOfType([_react.PropTypes.number.isRequired, _react.PropTypes.string.isRequired]),
  colorScheme: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node
}), _class.defaultProps = {
  numPosts: 10,
  orderBy: _CommentsOrderBy2.default.SOCIAL,
  width: 550,
  colorScheme: _ColorScheme2.default.LIGHT
}, _temp);
exports.default = Comments;