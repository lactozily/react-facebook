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

var Page = (_temp = _class = function (_Parser) {
    _inherits(Page, _Parser);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: 'renderComponent',
        value: function renderComponent() {
            var _props = this.props;
            var tabs = _props.tabs;
            var style = _props.style;
            var _props$href = _props.href;
            var href = _props$href === undefined ? (0, _getCurrentHref2.default)() : _props$href;
            var show_facepile = _props.show_facepile;
            var small_header = _props.small_header;
            var adapt_container_width = _props.adapt_container_width;
            var width = _props.width;
            var height = _props.height;
            var children = _props.children;
            var appID = this.context.facebook && this.context.facebook.props.appID; // -.-
            return _react2.default.createElement(
                'div',
                {
                    className: 'fb-page',
                    style: style,
                    'data-appID': appID,
                    'data-tabs': tabs,
                    'data-show-facepile': show_facepile,
                    'data-href': href,
                    'data-small-header': small_header,
                    'data-adapt-container-width': adapt_container_width,
                    'data-height': height,
                    'data-width': width
                },
                children
            );
        }
    }]);

    return Page;
}(_Parser3.default), _class.contextTypes = _extends({}, _Parser3.default.contextTypes), _class.propTypes = _extends({}, _Parser3.default.propTypes, {
    href: _react.PropTypes.string.isRequired,
    tabs: _react.PropTypes.string,
    height: _react.PropTypes.oneOfType([_react.PropTypes.number.isRequired, _react.PropTypes.string.isRequired]),
    width: _react.PropTypes.oneOfType([_react.PropTypes.number.isRequired, _react.PropTypes.string.isRequired]),
    show_facepile: _react.PropTypes.bool,
    small_header: _react.PropTypes.bool,
    adapt_container_width: _react.PropTypes.bool,
    children: _react.PropTypes.node
}), _class.defaultProps = {
    tabs: "timeline",
    width: 550,
    height: 300,
    show_facepile: true,
    adapt_container_width: true,
    small_header: false
}, _temp);
exports.default = Page;