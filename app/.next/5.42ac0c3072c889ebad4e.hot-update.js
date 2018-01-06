webpackHotUpdate(5,{

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _millify = __webpack_require__(795);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/binayak/projects/stock_archives/app/components/IntradayViewer.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/binayak/projects/stock_archives/app/components/IntradayViewer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40MmFjMGMzMDcyYzg4OWViYWQ0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnRyYWRheVZpZXdlci5qcz84N2M5M2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBtaWxsaWZ5IGZyb20gJ21pbGxpZnknXG5cblxuY2xhc3MgSW50cmFkYXlWaWV3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgcmVzX2RhaWx5ICA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249VElNRV9TRVJJRVNfREFJTFkmc3ltYm9sPScgKyB0aGlzLnByb3BzLnN5bWJvbCArICcmYXBpa2V5PTZVODc4NEQ3QjZSRUQwRFYnKVxuICAgIGxldCBkYWlseV9kYXRhID0gYXdhaXQgcmVzX2RhaWx5Lmpzb24oKVxuICAgIGRhaWx5X2RhdGEgPSBkYWlseV9kYXRhW1wiVGltZSBTZXJpZXMgKERhaWx5KVwiXVxuICAgIFxuICAgIGlmKGRhaWx5X2RhdGEpIHtcbiAgICAgIGxldCBpID0gMFxuICAgICAgbGV0IGxhc3RfY2xvc2UgPSAwO1xuICAgICAgbGV0IHZvbF8yNCA9IDA7XG5cbiAgICAgIGZvciAobGV0IGRhdGUgaW4gZGFpbHlfZGF0YSkge1xuICAgICAgICBpZiAoaSA+IDEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgdm9sXzI0ID0gZGFpbHlfZGF0YVtkYXRlXVtcIjUuIHZvbHVtZVwiXVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09IDEgKSB7XG4gICAgICAgICAgbGFzdF9jbG9zZSA9IGRhaWx5X2RhdGFbZGF0ZV1bXCI0LiBjbG9zZVwiXVxuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICAgIH1cblxuICAgICAgbGV0IHJlc19pbnRyYWRheSA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy5hbHBoYXZhbnRhZ2UuY28vcXVlcnk/ZnVuY3Rpb249VElNRV9TRVJJRVNfSU5UUkFEQVkmc3ltYm9sPScgKyB0aGlzLnByb3BzLnN5bWJvbCArICcmaW50ZXJ2YWw9MW1pbiZhcGlrZXk9NlU4Nzg0RDdCNlJFRDBEVicpXG4gICAgICBsZXQgaW50cmFkYXlfZGF0YSA9IGF3YWl0IHJlc19pbnRyYWRheS5qc29uKClcbiAgICAgIGludHJhZGF5X2RhdGEgPSBpbnRyYWRheV9kYXRhW1wiVGltZSBTZXJpZXMgKDFtaW4pXCJdXG4gICAgICBpZihpbnRyYWRheV9kYXRhKSB7XG4gICAgICAgIGxldCBjdXJyZW50X2Nsb3NlID0gMDtcblxuICAgICAgICBmb3IgKGxldCBkYXRlIGluIGludHJhZGF5X2RhdGEpIHtcbiAgICAgICAgICBjdXJyZW50X2Nsb3NlID0gaW50cmFkYXlfZGF0YVtkYXRlXVtcIjQuIGNsb3NlXCJdXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxhc3RfY2xvc2UsXG4gICAgICAgICAgdm9sXzI0LFxuICAgICAgICAgIGN1cnJlbnRfY2xvc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtub0RhdGE6IHRydWV9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe25vRGF0YTogdHJ1ZX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09IG51bGwgKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbnRyYWRheS1kYXRhXCIgPkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5zdGF0ZS5ub0RhdGEpIHtcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImludHJhZGF5LWRhdGFcIiA+RGF0YSBub3QgYXZhaWxhYmxlLi4uPC9kaXY+IFxuICAgIH1cbiAgICBlbHNlIHsgXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJhZGF5LWRhdGFcIiA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaW50cmFkYXktZGF0YS1rZXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5QcmljZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPkNoYW5nZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPkxhc3QgQ2xvc2U8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5Wb2x1bWU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpbnRyYWRheS1kYXRhLXZhbHVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+IHtwYXJzZUZsb2F0KHRoaXMuc3RhdGUuY3VycmVudF9jbG9zZSkudG9GaXhlZCgyKX0gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+IHsocGFyc2VGbG9hdCh0aGlzLnN0YXRlLmxhc3RfY2xvc2UpIC0gIHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5jdXJyZW50X2Nsb3NlKSkudG9GaXhlZCgyKX0gPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+IHtwYXJzZUZsb2F0KHRoaXMuc3RhdGUubGFzdF9jbG9zZSkudG9GaXhlZCgyKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj4gIHttaWxsaWZ5KHBhcnNlSW50KHRoaXMuc3RhdGUudm9sXzI0KSl9IDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50cmFkYXlWaWV3ZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSW50cmFkYXlWaWV3ZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFHQTtBQUNBOzs7QUFBQTs7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBR0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTs7OztBQUNBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7O0FBSUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7Ozs7QUFNQTtBQUFBO0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7QUEzRUE7QUFDQTtBQTZFQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9