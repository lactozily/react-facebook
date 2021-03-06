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

var _Share = require('./Share');

var _Share2 = _interopRequireDefault(_Share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShareButton = (_temp = _class = function (_Component) {
  _inherits(ShareButton, _Component);

  function ShareButton() {
    _classCallCheck(this, ShareButton);

    return _possibleConstructorReturn(this, (ShareButton.__proto__ || Object.getPrototypeOf(ShareButton)).apply(this, arguments));
  }

  _createClass(ShareButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var iconClassName = _props.iconClassName;
      var icon = _props.icon;
      var children = _props.children;
      var _props2 = this.props;
      var width = _props2.width;
      var href = _props2.href;
      var height = _props2.height;
      var hashtag = _props2.hashtag;
      var quote = _props2.quote;
      var mobileIframe = _props2.mobileIframe;
      var display = _props2.display;
      var appId = _props2.appId;
      var redirectURI = _props2.redirectURI;


      return _react2.default.createElement(
        _Share2.default,
        {
          href: href,
          width: width,
          height: height,
          hashtag: hashtag,
          quote: quote,
          mobileIframe: mobileIframe,
          display: display,
          appId: appId,
          redirectURI: redirectURI
        },
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: className
          },
          icon ? _react2.default.createElement('i', { className: iconClassName }) : null,
          children
        )
      );
    }
  }]);

  return ShareButton;
}(_react.Component), _class.propTypes = _extends({}, _Share2.default.propTypes, {
  className: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  icon: _react.PropTypes.bool

}), _class.defaultProps = _extends({}, _Share2.default.defaultProps, {
  className: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true
}), _temp);
exports.default = ShareButton;