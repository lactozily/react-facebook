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

var _reactSpinnerChildren = require('react-spinner-children');

var _reactSpinnerChildren2 = _interopRequireDefault(_reactSpinnerChildren);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginButton = (_temp = _class = function (_Component) {
  _inherits(LoginButton, _Component);

  function LoginButton(props, context) {
    _classCallCheck(this, LoginButton);

    var _this = _possibleConstructorReturn(this, (LoginButton.__proto__ || Object.getPrototypeOf(LoginButton)).call(this, props, context));

    _this.handleWorking = function (isWorking) {
      _this.setState({ isWorking: isWorking });
    };

    _this.state = {
      isWorking: true
    };
    return _this;
  }

  _createClass(LoginButton, [{
    key: 'renderLoading',
    value: function renderLoading() {
      var _props = this.props;
      var spinner = _props.spinner;
      var spinnerClassName = _props.spinnerClassName;


      if (!spinner || !this.state.isWorking) {
        return null;
      }

      return _react2.default.createElement(_reactSpinnerChildren2.default, { config: this.props.spinnerConfig, className: spinnerClassName });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var children = _props2.children;
      var buttonClassName = _props2.buttonClassName;
      var iconClassName = _props2.iconClassName;
      var icon = _props2.icon;


      return _react2.default.createElement(
        _Login2.default,
        _extends({
          onReady: function onReady() {
            return _this2.handleWorking(false);
          },
          onWorking: this.handleWorking
        }, this.props),
        _react2.default.createElement(
          'button',
          {
            type: 'button',
            className: buttonClassName,
            disabled: this.state.isWorking
          },
          icon ? _react2.default.createElement('i', { className: iconClassName }) : null,
          children,
          this.renderLoading()
        )
      );
    }
  }]);

  return LoginButton;
}(_react.Component), _class.propTypes = _extends({}, _Login2.default.propTypes, {
  spinnerConfig: _react.PropTypes.object.isRequired,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  buttonClassName: _react.PropTypes.string,
  iconClassName: _react.PropTypes.string,
  icon: _react.PropTypes.bool,
  spinnerClassName: _react.PropTypes.string,
  spinner: _react.PropTypes.bool
}), _class.defaultProps = _extends({}, _Login2.default.defaultProps, {
  spinnerConfig: {},
  buttonClassName: 'btn btn-lg',
  iconClassName: 'fa fa-facebook pull-left',
  spinner: true,
  icon: true
}), _temp);
exports.default = LoginButton;