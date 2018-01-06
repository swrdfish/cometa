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

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = require('redux');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Page = require('../components/Page.js');

var _Page2 = _interopRequireDefault(_Page);

var _Sidebar = require('../components/Sidebar.js');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _DetailsView = require('../components/DetailsView.js');

var _DetailsView2 = _interopRequireDefault(_DetailsView);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/binayak/projects/stock_archives/app/pages/index.js?entry';


var App = function (_React$Component) {
    (0, _inherits3.default)(App, _React$Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.store = (0, _redux.createStore)(_reducers2.default);
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'componentDidMount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var res, company_list;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _isomorphicFetch2.default)('http://localhost/api/companies/symbols');

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res.json();

                            case 5:
                                company_list = _context.sent;

                                this.store.dispatch((0, _actions.addCompany)(company_list));

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactRedux.Provider, { store: this.store, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/bootstrap.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/main.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/css/font-awesome.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Bellefair|Montserrat|Lato', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Stock Archive')), _react2.default.createElement(_Page2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_Sidebar2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement(_DetailsView2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }))));
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJyZWR1Y2VyIiwiY3JlYXRlU3RvcmUiLCJmZXRjaCIsIkhlYWQiLCJQYWdlIiwiU2lkZWJhciIsIkRldGFpbHNWaWV3IiwiYWRkQ29tcGFueSIsIkFwcCIsInByb3BzIiwic3RvcmUiLCJyZXMiLCJqc29uIiwiY29tcGFueV9saXN0IiwiZGlzcGF0Y2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBR1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQWtCOzs7Ozs7O0lBR3JCLEE7aUNBRUY7O2lCQUFBLEFBQVksT0FBTzs0Q0FBQTs7b0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUssUUFGVSxBQUVmLEFBQWEsQUFBWTtlQUM1Qjs7Ozs7Ozs7Ozs7Ozt1Q0FHb0IsK0IsQUFBQSxBQUFNOztpQ0FBbkI7QTs7dUNBQ3FCLElBQUEsQUFBSSxBOztpQ0FBekI7QSx3REFDSjs7cUNBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyx5QkFBcEIsQUFBb0IsQUFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUcxQixBQUNMO21DQUNJLEFBQUMsc0NBQVMsT0FBTyxLQUFqQixBQUFzQjs4QkFBdEI7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsdURBQ1UsTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7OEJBQTlCO2dDQURKLEFBQ0ksQUFDQTtBQURBO3dEQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FGSixBQUVJLEFBQ0E7QUFEQTt3REFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qjs4QkFBNUI7Z0NBSEosQUFHSSxBQUNBO0FBREE7d0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQUpKLEFBSUksQUFDQTtBQURBO3dEQUNNLE1BQU4sQUFBVyxxRUFBb0UsS0FBL0UsQUFBbUY7OEJBQW5GO2dDQUxKLEFBS0ksQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVBSLEFBQ0ksQUFNSSxBQUVKLG1DQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7OzhCQUFEO2dDQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsQUFBQzs7OEJBQUQ7Z0NBYmhCLEFBQ0ksQUFDSSxBQVNJLEFBRUksQUFLbkI7QUFMbUI7QUFBQTs7Ozs7RUEzQk4sZ0JBQU0sQSxBQW1DeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYmluYXlhay9wcm9qZWN0cy9zdG9ja19hcmNoaXZlcy9hcHAifQ==