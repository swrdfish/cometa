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

var _Chart = require('./Chart');

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/binayak/projects/stock_archives/app/components/ChartLoader.js';


var ChartLoader = function (_React$Component) {
  (0, _inherits3.default)(ChartLoader, _React$Component);

  function ChartLoader() {
    (0, _classCallCheck3.default)(this, ChartLoader);

    return (0, _possibleConstructorReturn3.default)(this, (ChartLoader.__proto__ || (0, _getPrototypeOf2.default)(ChartLoader)).apply(this, arguments));
  }

  (0, _createClass3.default)(ChartLoader, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var res, stock_data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('http://localhost/api/price/' + this.props.symbol);

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                stock_data = _context.sent;

                if (!stock_data.error) {
                  stock_data = stock_data.map(function (d) {
                    d.date = new Date(d.date);
                    return d;
                  });
                  this.setState({ data: stock_data });
                } else {
                  this.setState({ noData: true });
                }

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
      if (this.state == null) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, 'Loading...');
      } else if (this.state.noData) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, 'Data not available...');
      }
      return _react2.default.createElement(_Chart2.default, { type: 'svg', data: this.state.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      });
    }
  }]);

  return ChartLoader;
}(_react2.default.Component);

exports.default = ChartLoader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhcnRMb2FkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDaGFydCIsIkNoYXJ0TG9hZGVyIiwiZmV0Y2giLCJwcm9wcyIsInN5bWJvbCIsInJlcyIsImpzb24iLCJzdG9ja19kYXRhIiwiZXJyb3IiLCJtYXAiLCJkIiwiZGF0ZSIsIkRhdGUiLCJzZXRTdGF0ZSIsImRhdGEiLCJub0RhdGEiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7Ozs7OztJLEFBR1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBRWUsTUFBTSxnQ0FBZ0MsS0FBQSxBQUFLLE1BQTNDLEFBQWlELEE7O21CQUE5RDtBOzt1QkFDbUIsSUFBQSxBQUFJLEE7O21CQUF2QjtBLHNDQUVKOztvQkFBRyxDQUFDLFdBQUosQUFBZSxPQUFPLEFBQ3BCOzBDQUFhLEFBQVcsSUFBSSxVQUFBLEFBQUMsR0FBSyxBQUNoQztzQkFBQSxBQUFFLE9BQU8sSUFBQSxBQUFJLEtBQUssRUFBbEIsQUFBUyxBQUFXLEFBQ3BCOzJCQUFBLEFBQU8sQUFDUjtBQUhELEFBQWEsQUFJYixtQkFKYTt1QkFJYixBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTyxBQUN0QjtBQU5ELHVCQU9LLEFBQ0g7dUJBQUEsQUFBSyxTQUFTLEVBQUMsUUFBZixBQUFjLEFBQVMsQUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBR00sQUFDUDtVQUFJLEtBQUEsQUFBSyxTQUFULEFBQWtCLE1BQU8sQUFDdkI7K0JBQU8sY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBUCxBQUFPLEFBQ1I7QUFGRCxhQUdLLElBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxRQUFRLEFBQzFCOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQVAsQUFBTyxBQUNSO0FBQ0Q7NkJBQ0UsQUFBQyxpQ0FBTSxNQUFQLEFBQVksT0FBTSxNQUFNLEtBQUEsQUFBSyxNQUE3QixBQUFtQztvQkFBbkM7c0JBREYsQUFDRSxBQUVIO0FBRkc7T0FBQTs7Ozs7RUF6Qm9CLGdCQUFNLEEsQUE4QmhDOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNoYXJ0TG9hZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2JpbmF5YWsvcHJvamVjdHMvc3RvY2tfYXJjaGl2ZXMvYXBwIn0=