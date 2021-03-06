'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _coreDecorators = require('core-decorators');

var _FacebookProvider = require('./FacebookProvider');

var _FacebookProvider2 = _interopRequireDefault(_FacebookProvider);

var _getCurrentHref = require('./utils/getCurrentHref');

var _getCurrentHref2 = _interopRequireDefault(_getCurrentHref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Share = (_class = (_temp = _class2 = function (_Component) {
  _inherits(Share, _Component);

  function Share() {
    _classCallCheck(this, Share);

    return _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).apply(this, arguments));
  }

  _createClass(Share, [{
    key: 'getSharerHref',
    value: function getSharerHref() {
      var facebook = this.context.facebook;
      var _props = this.props;
      var _props$href = _props.href;
      var href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href;
      var display = _props.display;
      var _props$appId = _props.appId;
      var appId = _props$appId === undefined ? facebook.props.appID : _props$appId;
      var hashtag = _props.hashtag;
      var redirectURI = _props.redirectURI;
      var quote = _props.quote;
      var mobileIframe = _props.mobileIframe;


      return '//www.facebook.com/dialog/share?' + _qs2.default.stringify({
        href: href,
        display: display,
        app_id: appId,
        hashtag: hashtag,
        redirect_uri: redirectURI,
        quote: quote,
        mobile_iframe: mobileIframe
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(evn) {
      evn.preventDefault();
      evn.stopPropagation();

      var href = this.getSharerHref();
      var _props2 = this.props;
      var width = _props2.width;
      var height = _props2.height;


      var halfWidth = Math.floor(width / 2);
      var halfHeight = Math.floor(height / 2);

      var left = Math.floor(window.innerWidth / 2 - halfWidth);
      var top = Math.floor(window.innerHeight / 2 - halfHeight);

      var params = 'status=0, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0';

      window.open(href, 'sharer', params);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.cloneElement(children, { onClick: this.handleClick });
    }
  }]);

  return Share;
}(_react.Component), _class2.contextTypes = _extends({}, _FacebookProvider2.default.childContextTypes), _class2.propTypes = {
  href: _react.PropTypes.string,
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.node,
  hashtag: _react.PropTypes.string,
  quote: _react.PropTypes.string,
  mobileIframe: _react.PropTypes.bool,
  display: _react.PropTypes.string.isRequired,
  appId: _react.PropTypes.string,
  redirectURI: _react.PropTypes.string
}, _class2.defaultProps = {
  display: 'popup',
  width: 626,
  height: 436,
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  icon: true
}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'handleClick', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleClick'), _class.prototype)), _class);
exports.default = Share;