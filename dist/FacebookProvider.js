'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _Facebook = require('./Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var facebookInstance = null;

var Facebook = (_temp = _class = function (_Component) {
  _inherits(Facebook, _Component);

  function Facebook() {
    _classCallCheck(this, Facebook);

    return _possibleConstructorReturn(this, (Facebook.__proto__ || Object.getPrototypeOf(Facebook)).apply(this, arguments));
  }

  _createClass(Facebook, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        facebook: this
      };
    }
  }, {
    key: 'whenReady',
    value: function whenReady(callback) {
      var _props = this.props;
      var domain = _props.domain;
      var version = _props.version;
      var appID = _props.appID;
      var cookie = _props.cookie;
      var status = _props.status;
      var xfbml = _props.xfbml;
      var language = _props.language;
      var frictionlessRequests = _props.frictionlessRequests;
      var init = _props.init;


      if (!this.facebook) {
        this.facebook = facebookInstance = facebookInstance || new _Facebook2.default({
          domain: domain,
          appID: appID,
          version: version,
          cookie: cookie,
          status: status,
          xfbml: xfbml,
          language: language,
          frictionlessRequests: frictionlessRequests,
          init: init
        });
      }

      this.facebook.whenReady(callback);
      if (this.props.onReady) {
        this.facebook.whenReady(this.props.onReady);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return Facebook;
}(_react.Component), _class.propTypes = {
  domain: _react.PropTypes.string,
  appID: _react.PropTypes.string.isRequired,
  version: _react.PropTypes.string.isRequired,
  cookie: _react.PropTypes.bool.isRequired,
  status: _react.PropTypes.bool.isRequired,
  xfbml: _react.PropTypes.bool.isRequired,
  language: _react.PropTypes.string.isRequired,
  frictionlessRequests: _react.PropTypes.bool.isRequired,
  children: _react.PropTypes.node,
  init: _react.PropTypes.bool.isRequired,
  onReady: _react.PropTypes.func
}, _class.childContextTypes = {
  facebook: _react.PropTypes.object.isRequired
}, _class.defaultProps = {
  version: 'v2.5', // or v2.0, v2.1, v2.2, v2.3
  cookie: false,
  status: false,
  xfbml: false,
  language: 'en_US',
  frictionlessRequests: false,
  init: false
}, _temp);
exports.default = Facebook;