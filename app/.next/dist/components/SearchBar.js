'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/binayak/projects/stock_archives/app/components/SearchBar.js';


var SearchBar = function (_React$Component) {
	(0, _inherits3.default)(SearchBar, _React$Component);

	function SearchBar(props) {
		(0, _classCallCheck3.default)(this, SearchBar);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBar.__proto__ || (0, _getPrototypeOf2.default)(SearchBar)).call(this, props));

		_this.state = { value: '' };
		_this.handleOnChange = _this.handleOnChange.bind(_this);
		_this.handleClearSearch = _this.handleClearSearch.bind(_this);
		_this.handleKeyDown = _this.handleKeyDown.bind(_this);
		_this.closeButton = _react2.default.createElement('i', { className: 'fa fa-close clear-search', 'aria-hidden': 'true', onClick: _this.handleClearSearch, __source: {
				fileName: _jsxFileName,
				lineNumber: 14
			}
		});
		_this.searchButton = _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true', __source: {
				fileName: _jsxFileName,
				lineNumber: 15
			}
		});
		return _this;
	}

	(0, _createClass3.default)(SearchBar, [{
		key: 'handleOnChange',
		value: function handleOnChange(event) {
			this.setState({ value: event.target.value });
			this.props.dispatch((0, _actions.setCompanyFilter)(event.target.value.toLowerCase()));
		}
	}, {
		key: 'handleClearSearch',
		value: function handleClearSearch(event) {
			this.setState({ value: '' });
			this.props.dispatch((0, _actions.setCompanyFilter)(''));
		}
	}, {
		key: 'handleKeyDown',
		value: function handleKeyDown(event) {
			if (event.key === "Escape") {
				event.stopPropagation();
				event.preventDefault();
				this.setState({ value: '' });
				this.props.dispatch((0, _actions.setCompanyFilter)(''));
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: 'search-wrapper', __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement('input', {
				placeholder: 'Search: eg, acia',
				value: this.state.value,
				onKeyDown: this.handleKeyDown,
				onChange: this.handleOnChange,
				type: 'text',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}), this.state.value != '' ? this.closeButton : this.searchButton);
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

var ConnectedSearchBar = (0, _reactRedux.connect)()(SearchBar);
exports.default = ConnectedSearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoQmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29ubmVjdCIsInNldENvbXBhbnlGaWx0ZXIiLCJTZWFyY2hCYXIiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJoYW5kbGVPbkNoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGVhclNlYXJjaCIsImhhbmRsZUtleURvd24iLCJjbG9zZUJ1dHRvbiIsInNlYXJjaEJ1dHRvbiIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJkaXNwYXRjaCIsInRvTG93ZXJDYXNlIiwia2V5Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb21wb25lbnQiLCJDb25uZWN0ZWRTZWFyY2hCYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBRVQsQUFBUyxBQUF3Qjs7Ozs7OztJQUczQixBO29DQUNMOztvQkFBQSxBQUFZLE9BQU87c0NBQUE7OzBJQUFBLEFBQ1osQUFDTjs7UUFBQSxBQUFLLFFBQVEsRUFBQyxPQUFkLEFBQWEsQUFBUSxBQUNyQjtRQUFBLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxlQUFMLEFBQW9CLEtBQTFDLEFBQ0E7UUFBQSxBQUFLLG9CQUFvQixNQUFBLEFBQUssa0JBQUwsQUFBdUIsS0FBaEQsQUFDQTtRQUFBLEFBQUssZ0JBQWdCLE1BQUEsQUFBSyxjQUFMLEFBQW1CLEtBQXhDLEFBQ0E7UUFBQSxBQUFLLG1EQUFrQixXQUFILEFBQWEsNEJBQTJCLGVBQXhDLEFBQW9ELFFBQU8sU0FBUyxNQUFwRSxBQUF5RTtjQUF6RTtnQkFBcEIsQUFBb0IsQUFDcEI7QUFEb0I7R0FBQTtRQUNwQixBQUFLLG9EQUFtQixXQUFILEFBQWEsZ0JBQWUsZUFBNUIsQUFBd0M7Y0FBeEM7Z0JBUEgsQUFPbEIsQUFBcUI7QUFBQTtHQUFBO1NBQ3JCOzs7OztpQ0FFYyxBLE9BQU8sQUFDckI7UUFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLE1BQUEsQUFBTSxPQUE1QixBQUFjLEFBQXFCLEFBQ25DO1FBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUywrQkFBaUIsTUFBQSxBQUFNLE9BQU4sQUFBYSxNQUFsRCxBQUFvQixBQUFpQixBQUFtQixBQUN4RDs7OztvQyxBQUVpQixPQUFPLEFBQ3hCO1FBQUEsQUFBSyxTQUFTLEVBQUMsT0FBZixBQUFjLEFBQVEsQUFDdEI7UUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLCtCQUFwQixBQUFvQixBQUFpQixBQUNyQzs7OztnQ0FFYSxBLE9BQU8sQUFDcEI7T0FBRyxNQUFBLEFBQU0sUUFBVCxBQUFpQixVQUFTLEFBQ3pCO1VBQUEsQUFBTSxBQUNOO1VBQUEsQUFBTSxBQUNOO1NBQUEsQUFBSyxTQUFTLEVBQUMsT0FBZixBQUFjLEFBQVEsQUFDdEI7U0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLCtCQUFwQixBQUFvQixBQUFpQixBQUNyQztBQUNEOzs7OzJCQUVRLEFBQ1I7MEJBQ0MsY0FBQSxTQUFLLFdBQUwsQUFBZTtlQUFmO2lCQUFBLEFBQ0M7QUFERDtJQUFBO2lCQUNDLEFBQ2EsQUFDWjtXQUFPLEtBQUEsQUFBSyxNQUZiLEFBRW1CLEFBQ2xCO2VBQVcsS0FIWixBQUdpQixBQUNoQjtjQUFVLEtBSlgsQUFJZ0IsQUFDZjtVQUxELEFBS007O2VBTE47aUJBREQsQUFDQyxBQU9DO0FBUEQ7QUFDQyxZQU1BLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsS0FBSyxLQUF6QixBQUE4QixjQUFjLEtBVC9DLEFBQ0MsQUFRbUQsQUFHcEQ7Ozs7O0VBM0NzQixnQkFBTSxBOztBQStDOUIsSUFBSSxxQkFBcUIsMkJBQXpCLEFBQXlCLEFBQVUsQUFDbkM7a0JBQUEsQUFBZSIsImZpbGUiOiJTZWFyY2hCYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYmluYXlhay9wcm9qZWN0cy9zdG9ja19hcmNoaXZlcy9hcHAifQ==