'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _fuzzysearch = require('fuzzysearch');

var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/binayak/projects/stock_archives/app/components/CompanyList.js';


var CompanyList = function (_React$Component) {
	(0, _inherits3.default)(CompanyList, _React$Component);

	function CompanyList(props) {
		(0, _classCallCheck3.default)(this, CompanyList);

		var _this = (0, _possibleConstructorReturn3.default)(this, (CompanyList.__proto__ || (0, _getPrototypeOf2.default)(CompanyList)).call(this, props));

		_this.handleSelect = _this.handleSelect.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(CompanyList, [{
		key: 'handleSelect',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var res, company_info;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this.props.dispatch((0, _actions.setDetailsLoading)(true, event.target.getAttribute('data-key')));
								_context.next = 3;
								return fetch('http://localhost/api/company/info/' + event.target.getAttribute('data-key'));

							case 3:
								res = _context.sent;
								_context.next = 6;
								return res.json();

							case 6:
								company_info = _context.sent;

								this.props.dispatch((0, _actions.setCompanyDetails)(company_info));

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function handleSelect(_x) {
				return _ref.apply(this, arguments);
			}

			return handleSelect;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var companiesToDisplay = this.props.companyList;

			if (this.props.searchText !== '') {
				// Need to use tries to improve performance
				companiesToDisplay = companiesToDisplay.filter(function (company) {
					return (0, _fuzzysearch2.default)(_this2.props.searchText, company.symbol.toLowerCase());
				});
			}

			var companies = companiesToDisplay.map(function (company) {
				return _react2.default.createElement('div', { key: company.symbol, className: 'company-list-item', 'data-key': company.symbol, onClick: this.handleSelect, __source: {
						fileName: _jsxFileName,
						lineNumber: 30
					}
				}, _react2.default.createElement('div', { className: 'company-name', 'data-key': company.symbol, __source: {
						fileName: _jsxFileName,
						lineNumber: 31
					}
				}, company.symbol, _react2.default.createElement('span', { className: 'fa fa-thumb-tack pinButton', __source: {
						fileName: _jsxFileName,
						lineNumber: 33
					}
				})));
			}, this);

			return _react2.default.createElement('div', { className: 'company-list-wrapper', __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, companies.length > 0 ? companies : _react2.default.createElement('div', { className: 'company-not-found', __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'No companies found.'));
		}
	}]);

	return CompanyList;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
	var companyList = _ref2.companyList,
	    companyFilter = _ref2.companyFilter;
	return {
		searchText: companyFilter,
		companyList: companyList
	};
};

var ConnectedCompanyList = (0, _reactRedux.connect)(mapStateToProps)(CompanyList);
exports.default = ConnectedCompanyList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29tcGFueUxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiZnV6enlzZWFyY2giLCJzZXREZXRhaWxzTG9hZGluZyIsInNldENvbXBhbnlEZXRhaWxzIiwiQ29tcGFueUxpc3QiLCJwcm9wcyIsImhhbmRsZVNlbGVjdCIsImJpbmQiLCJldmVudCIsImRpc3BhdGNoIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiY29tcGFueV9pbmZvIiwiY29tcGFuaWVzVG9EaXNwbGF5IiwiY29tcGFueUxpc3QiLCJzZWFyY2hUZXh0IiwiZmlsdGVyIiwiY29tcGFueSIsInN5bWJvbCIsInRvTG93ZXJDYXNlIiwiY29tcGFuaWVzIiwibWFwIiwibGVuZ3RoIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29tcGFueUZpbHRlciIsIkNvbm5lY3RlZENvbXBhbnlMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVMsQUFBbUIsQUFBd0I7Ozs7Ozs7SSxBQUc5QztzQ0FDTDs7c0JBQUEsQUFBWSxPQUFNO3NDQUFBOzs4SUFBQSxBQUNYLEFBQ047O1FBQUEsQUFBSyxlQUFlLE1BQUEsQUFBSyxhQUFMLEFBQWtCLEtBRnJCLEFBRWpCO1NBQ0E7Ozs7Ozt3RyxBQUVrQjs7Ozs7WUFDakI7YUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLGdDQUFBLEFBQWtCLE1BQU0sTUFBQSxBQUFNLE9BQU4sQUFBYSxhQUF6RCxBQUFvQixBQUF3QixBQUEwQjs7ZUFDdEQsTUFBTSx1Q0FBdUMsTUFBQSxBQUFNLE9BQU4sQUFBYSxhQUExRCxBQUE2QyxBQUEwQixBOztZQUFuRjtBOztlQUN3QixJLEFBQUEsQUFBSTs7WUFBekI7QSxnQ0FDUDs7YUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLGdDQUFwQixBQUFvQixBQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUcvQjtnQkFDUjs7T0FBSSxxQkFBcUIsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLEFBRXBDOztPQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBZCxBQUE2QixJQUFJLEFBQ2hDO0FBQ0E7NENBQXFCLEFBQW1CLE9BQU8sbUJBQUE7WUFBWSwyQkFBWSxPQUFBLEFBQUssTUFBakIsQUFBdUIsWUFBWSxRQUFBLEFBQVEsT0FBdkQsQUFBWSxBQUFtQyxBQUFlO0FBQTdHLEFBQXFCLEFBQ3JCLEtBRHFCO0FBR3RCOztPQUFJLCtCQUFZLEFBQW1CLElBQUksVUFBQSxBQUFVLFNBQVMsQUFDekQ7MkJBQ0MsY0FBQSxTQUFLLEtBQUssUUFBVixBQUFrQixRQUFRLFdBQTFCLEFBQW9DLHFCQUFvQixZQUFVLFFBQWxFLEFBQTBFLFFBQVEsU0FBUyxLQUEzRixBQUFnRztnQkFBaEc7a0JBQUEsQUFDQztBQUREO0tBQUEsa0JBQ0MsY0FBQSxTQUFLLFdBQUwsQUFBZSxnQkFBZSxZQUFVLFFBQXhDLEFBQWdEO2dCQUFoRDtrQkFBQSxBQUNFO0FBREY7ZUFBQSxBQUNVLEFBQ1QsZ0RBQU0sV0FBTixBQUFnQjtnQkFBaEI7a0JBSkgsQUFDQyxBQUNDLEFBRUMsQUFJSDtBQUpHOztBQUxZLElBQUEsRUFBaEIsQUFBZ0IsQUFTYixBQUVIOzswQkFDQyxjQUFBLFNBQUssV0FBTCxBQUFlO2VBQWY7aUJBQUEsQUFDRztBQURIO0lBQUEsWUFDRyxBQUFVLFNBQVgsQUFBb0IsSUFBcEIsQUFBd0IsNEJBQWEsY0FBQSxTQUFLLFdBQUwsQUFBZTtlQUFmO2lCQUFBO0FBQUE7SUFBQSxFQUZ4QyxBQUNDLEFBQ3VDLEFBR3hDOzs7OztFQXJDd0IsZ0JBQU0sQTs7QUF5Q2hDLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFBO0tBQUEsQUFBRSxvQkFBRixBQUFFO0tBQUYsQUFBZSxzQkFBZixBQUFlOztjQUFvQixBQUM3QyxBQUNaO2VBRnNCLEFBQW1DO0FBQUEsQUFDekQ7QUFERjs7QUFLQSxJQUFJLHVCQUF1Qix5QkFBQSxBQUFRLGlCQUFuQyxBQUEyQixBQUF5QixBQUNwRDtrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbXBhbnlMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2JpbmF5YWsvcHJvamVjdHMvc3RvY2tfYXJjaGl2ZXMvYXBwIn0=