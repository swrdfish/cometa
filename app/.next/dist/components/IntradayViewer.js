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

var _millify = require('millify');

var _millify2 = _interopRequireDefault(_millify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/binayak/projects/stock_archives/app/components/IntradayViewer.js';


var IntradayViewer = function (_React$Component) {
  (0, _inherits3.default)(IntradayViewer, _React$Component);

  function IntradayViewer() {
    (0, _classCallCheck3.default)(this, IntradayViewer);

    return (0, _possibleConstructorReturn3.default)(this, (IntradayViewer.__proto__ || (0, _getPrototypeOf2.default)(IntradayViewer)).apply(this, arguments));
  }

  (0, _createClass3.default)(IntradayViewer, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var res_daily, daily_data, i, last_close, vol_24, date, res_intraday, intraday_data, current_close, _date;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + this.props.symbol + '&apikey=6U8784D7B6RED0DV');

              case 2:
                res_daily = _context.sent;
                _context.next = 5;
                return res_daily.json();

              case 5:
                daily_data = _context.sent;

                daily_data = daily_data["Time Series (Daily)"];

                if (!daily_data) {
                  _context.next = 43;
                  break;
                }

                i = 0;
                last_close = 0;
                vol_24 = 0;
                _context.t0 = _regenerator2.default.keys(daily_data);

              case 12:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 21;
                  break;
                }

                date = _context.t1.value;

                if (!(i > 1)) {
                  _context.next = 16;
                  break;
                }

                return _context.abrupt('break', 21);

              case 16:
                if (i == 0) {
                  vol_24 = daily_data[date]["5. volume"];
                }
                if (i == 1) {
                  last_close = daily_data[date]["4. close"];
                }
                i++;
                _context.next = 12;
                break;

              case 21:
                _context.next = 23;
                return fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + this.props.symbol + '&interval=1min&apikey=6U8784D7B6RED0DV');

              case 23:
                res_intraday = _context.sent;
                _context.next = 26;
                return res_intraday.json();

              case 26:
                intraday_data = _context.sent;

                intraday_data = intraday_data["Time Series (1min)"];

                if (!intraday_data) {
                  _context.next = 40;
                  break;
                }

                current_close = 0;
                _context.t2 = _regenerator2.default.keys(intraday_data);

              case 31:
                if ((_context.t3 = _context.t2()).done) {
                  _context.next = 37;
                  break;
                }

                _date = _context.t3.value;

                current_close = intraday_data[_date]["4. close"];
                return _context.abrupt('break', 37);

              case 37:

                this.setState({
                  last_close: last_close,
                  vol_24: vol_24,
                  current_close: current_close
                });
                _context.next = 41;
                break;

              case 40:
                this.setState({ noData: true });

              case 41:
                _context.next = 44;
                break;

              case 43:
                this.setState({ noData: true });

              case 44:
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
      if (this.state == null) {
        return _react2.default.createElement('div', { className: 'intraday-data', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, 'Loading...');
      } else if (this.state.noData) {
        return _react2.default.createElement('div', { className: 'intraday-data', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, 'Data not available...');
      } else {
        return _react2.default.createElement('div', { className: 'intraday-data', __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement('div', { className: 'row intraday-data-key', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, _react2.default.createElement('div', { className: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, 'Price'), _react2.default.createElement('div', { className: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, 'Change'), _react2.default.createElement('div', { className: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, 'Last Close'), _react2.default.createElement('div', { className: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, 'Volume')), _react2.default.createElement('div', { className: 'row intraday-data-value', __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement('div', { className: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, ' ', parseFloat(this.state.current_close).toFixed(2), ' '), _react2.default.createElement('div', { className: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, ' ', (parseFloat(this.state.last_close) - parseFloat(this.state.current_close)).toFixed(2), ' '), _react2.default.createElement('div', { className: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, ' ', parseFloat(this.state.last_close).toFixed(2)), _react2.default.createElement('div', { className: 'col-md-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, '  ', (0, _millify2.default)(parseInt(this.state.vol_24)), ' ')));
      }
    }
  }]);

  return IntradayViewer;
}(_react2.default.Component);

exports.default = IntradayViewer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSW50cmFkYXlWaWV3ZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJtaWxsaWZ5IiwiSW50cmFkYXlWaWV3ZXIiLCJmZXRjaCIsInByb3BzIiwic3ltYm9sIiwicmVzX2RhaWx5IiwianNvbiIsImRhaWx5X2RhdGEiLCJpIiwibGFzdF9jbG9zZSIsInZvbF8yNCIsImRhdGUiLCJyZXNfaW50cmFkYXkiLCJpbnRyYWRheV9kYXRhIiwiY3VycmVudF9jbG9zZSIsInNldFN0YXRlIiwibm9EYXRhIiwic3RhdGUiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInBhcnNlSW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJLEFBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUVxQixNQUFNLHlFQUF5RSxLQUFBLEFBQUssTUFBOUUsQUFBb0YsU0FBMUYsQUFBbUcsQTs7bUJBQXRIO0E7O3VCQUNtQixVQUFBLEFBQVUsQTs7bUJBQTdCO0Esc0NBQ0o7OzZCQUFhLFdBQWIsQUFBYSxBQUFXOztxQkFFckIsQTs7O0FBQ0c7O0Esb0JBQUksQUFDSixBO0EsNkJBQ0EsQSxBQURhO0EseUJBQ0osQTt5RCxBQUVJOzs7Ozs7QUFBUjs7QTs7c0JBQ0gsSUFBSSxBOzs7Ozs7O21CQUdSO29CQUFJLEtBQUosQUFBUyxHQUFHLEFBQ1Y7MkJBQVMsV0FBQSxBQUFXLE1BQXBCLEFBQVMsQUFBaUIsQUFDM0I7QUFDRDtvQkFBSSxLQUFKLEFBQVMsR0FBSSxBQUNYOytCQUFhLFdBQUEsQUFBVyxNQUF4QixBQUFhLEFBQWlCLEFBQy9CO0FBQ0Q7Ozs7Ozs7dUJBR3VCLE1BQU0sNEVBQTRFLEtBQUEsQUFBSyxNQUFqRixBQUF1RixTQUE3RixBQUFzRyxBOzttQkFBM0g7QTs7dUJBQ3NCLGFBQUEsQSxBQUFhOzttQkFBbkM7QSx5Q0FDSjs7Z0NBQWdCLGNBQWhCLEFBQWdCLEFBQWM7O3FCLEFBQzNCOzs7QUFDRzs7QSxnQ0FBZ0IsQTt5REFFSCxBOzs7Ozs7QUFBUjs7QSxvQ0FDUDs7Z0NBQWdCLGNBQUEsQUFBYyxPQUE5QixBQUFnQixBQUFvQjs7O21CQUl0Qzs7cUJBQUEsQUFBSzs4QkFBUyxBQUVaOzBCQUZZLEFBR1o7aUNBSEYsQUFBYztBQUFBLEFBQ1o7Ozs7bUJBTUY7cUJBQUEsQUFBSyxTQUFTLEVBQUMsUUFBZixBQUFjLEFBQVM7Ozs7OzttQkFJekI7cUJBQUEsQUFBSyxTQUFTLEVBQUMsUUFBZixBQUFjLEFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFJbEIsQUFDUDtVQUFJLEtBQUEsQUFBSyxTQUFULEFBQWtCLE1BQU8sQUFDdkI7K0JBQU8sY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO1NBQUEsRUFBUCxBQUFPLEFBQ1I7QUFGRCxpQkFHUyxLQUFBLEFBQUssTUFBVCxBQUFlLFFBQVEsQUFDMUI7K0JBQU8sY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO1NBQUEsRUFBUCxBQUFPLEFBQ1I7QUFGSSxPQUFBLE1BR0EsQUFDSDsrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBO0FBQUE7V0FGRixBQUVFLEFBQ0EsMkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO1dBSEYsQUFHRSxBQUNBLCtCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQUxKLEFBQ0UsQUFJRSxBQUVGLDRCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQUE0QixnQkFBVyxLQUFBLEFBQUssTUFBaEIsQUFBc0IsZUFBdEIsQUFBcUMsUUFBakUsQUFBNEIsQUFBNkMsSUFEM0UsQUFDRSxBQUNBLHNCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQUE0QixNQUFDLFdBQVcsS0FBQSxBQUFLLE1BQWhCLEFBQXNCLGNBQWUsV0FBVyxLQUFBLEFBQUssTUFBdEQsQUFBc0MsQUFBc0IsZ0JBQTVELEFBQTRFLFFBQXhHLEFBQTRCLEFBQW9GLElBRmxILEFBRUUsQUFDQSxzQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBO0FBQUE7V0FBNEIsZ0JBQVcsS0FBQSxBQUFLLE1BQWhCLEFBQXNCLFlBQXRCLEFBQWtDLFFBSGhFLEFBR0UsQUFBNEIsQUFBMEMsQUFDdEUscUJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO1dBQTZCLDZCQUFRLFNBQVMsS0FBQSxBQUFLLE1BQW5ELEFBQTZCLEFBQVEsQUFBb0IsVUFaL0QsQUFDRSxBQU9FLEFBSUUsQUFJUDtBQUNGOzs7OztFQTNFMEIsZ0JBQU0sQSxBQThFbkM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSW50cmFkYXlWaWV3ZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYmluYXlhay9wcm9qZWN0cy9zdG9ja19hcmNoaXZlcy9hcHAifQ==