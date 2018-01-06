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

var _ChartLoader = require('./ChartLoader');

var _ChartLoader2 = _interopRequireDefault(_ChartLoader);

var _IntradayViewer = require('./IntradayViewer');

var _IntradayViewer2 = _interopRequireDefault(_IntradayViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/binayak/projects/stock_archives/app/components/DetailsView.js';


var DetailsView = function (_React$Component) {
  (0, _inherits3.default)(DetailsView, _React$Component);

  function DetailsView() {
    (0, _classCallCheck3.default)(this, DetailsView);

    return (0, _possibleConstructorReturn3.default)(this, (DetailsView.__proto__ || (0, _getPrototypeOf2.default)(DetailsView)).apply(this, arguments));
  }

  (0, _createClass3.default)(DetailsView, [{
    key: 'render',
    value: function render() {
      if (!this.props.detailsViewState) {
        return _react2.default.createElement('div', { id: 'details-view', className: 'col-md-9', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, _react2.default.createElement('div', { className: 'details-view-blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, 'Select a company to view details.'));
      } else if (this.props.detailsViewState.isLoading) {
        return _react2.default.createElement('div', { id: 'details-view', className: 'col-md-9', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, _react2.default.createElement('div', { className: 'details-view-blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, 'Loading..'));
      } else {
        return _react2.default.createElement('div', { id: 'details-view', className: 'col-md-9', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement('div', { className: 'company-info-wrapper', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react2.default.createElement('div', { className: 'col-md-2 company-info-symbol', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, this.props.detailsViewState.details.symbol, ' '), _react2.default.createElement('div', { className: 'col-md-10', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement('div', { className: 'col-md-3 company-info-titles', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, 'Name'), _react2.default.createElement('div', { className: 'col-md-3 company-info-titles', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, 'Industry'), _react2.default.createElement('div', { className: 'col-md-3 company-info-titles', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, 'Marketcap'), _react2.default.createElement('div', { className: 'col-md-3 company-info-titles', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, 'Sector')), _react2.default.createElement('div', { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, _react2.default.createElement('div', { className: 'col-md-3 company-info-values', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, ' ', this.props.detailsViewState.details.name, ' '), _react2.default.createElement('div', { className: 'col-md-3 company-info-values', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, ' ', this.props.detailsViewState.details.industry, ' '), _react2.default.createElement('div', { className: 'col-md-3 company-info-values', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, ' ', this.props.detailsViewState.details.marketcap, ' '), _react2.default.createElement('div', { className: 'col-md-3 company-info-values', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, ' ', this.props.detailsViewState.details.sector))))), _react2.default.createElement('div', { className: 'company-today', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react2.default.createElement(_IntradayViewer2.default, { symbol: this.props.detailsViewState.details.symbol, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        })), _react2.default.createElement('div', { className: 'company-history', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement('h3', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, 'History'), _react2.default.createElement(_ChartLoader2.default, { symbol: this.props.detailsViewState.details.symbol, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        })));
      }
    }
  }]);

  return DetailsView;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var detailsViewState = _ref.detailsViewState;
  return { detailsViewState: detailsViewState };
};

var ConnectedDetailsView = (0, _reactRedux.connect)(mapStateToProps)(DetailsView);
exports.default = ConnectedDetailsView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGV0YWlsc1ZpZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJjb25uZWN0IiwiQ2hhcnRMb2FkZXIiLCJJbnRyYWRheVZpZXdlciIsIkRldGFpbHNWaWV3IiwicHJvcHMiLCJkZXRhaWxzVmlld1N0YXRlIiwiaXNMb2FkaW5nIiwiZGV0YWlscyIsInN5bWJvbCIsIm5hbWUiLCJpbmR1c3RyeSIsIm1hcmtldGNhcCIsInNlY3RvciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIkNvbm5lY3RlZERldGFpbHNWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0ksQUFHckI7Ozs7Ozs7Ozs7OzZCQUNPLEFBQ0w7VUFBRyxDQUFDLEtBQUEsQUFBSyxNQUFULEFBQWUsa0JBQWtCLEFBQy9COytCQUNFLGNBQUEsU0FBSyxJQUFMLEFBQVEsZ0JBQWUsV0FBdkIsQUFBaUM7c0JBQWpDO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQUZKLEFBQ0UsQUFDRSxBQUtMO0FBUkQsaUJBU1EsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBZCxBQUErQixXQUFXLEFBQzdDOytCQUNFLGNBQUEsU0FBSyxJQUFMLEFBQVEsZ0JBQWUsV0FBdkIsQUFBaUM7c0JBQWpDO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQUZKLEFBQ0UsQUFDRSxBQUtMO0FBUkksT0FBQSxNQVNBLEFBQ0g7K0JBQ0UsY0FBQSxTQUFLLElBQUwsQUFBUSxnQkFBZSxXQUF2QixBQUFpQztzQkFBakM7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUNJO0FBREo7MkJBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQSxBQUErQztBQUEvQztnQkFBK0MsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsUUFBM0UsQUFBbUYsUUFEdkYsQUFDSSxBQUNBLHNCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKOzJCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQURGLEFBQ0UsQUFDQSx5QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBO0FBQUE7V0FGRixBQUVFLEFBQ0EsNkJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO1dBSEYsQUFHRSxBQUNBLDhCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQUxOLEFBQ0ksQUFJRSxBQUVGLDRCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQUFnRCxVQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLFFBQTVFLEFBQW9GLE1BRHRGLEFBQ0UsQUFDQSxzQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBO0FBQUE7V0FBZ0QsVUFBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixRQUE1RSxBQUFvRixVQUZ0RixBQUVFLEFBQ0Esc0JBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtzQkFBZjt3QkFBQTtBQUFBO1dBQWdELFVBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsUUFBNUUsQUFBb0YsV0FIdEYsQUFHRSxBQUNBLHNCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUE7QUFBQTtXQUFnRCxVQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLFFBZjFGLEFBQ0UsQUFDRSxBQUVJLEFBT0ksQUFJRSxBQUFvRixBQUtoRyw2QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxBQUFDLDBDQUFlLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixRQUFwRCxBQUE0RDtzQkFBNUQ7d0JBckJKLEFBb0JFLEFBQ0UsQUFFRjtBQUZFOzZCQUVGLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQURGLEFBQ0UsQUFDQSw0QkFBQSxBQUFDLHVDQUFZLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixRQUFqRCxBQUF5RDtzQkFBekQ7d0JBMUJOLEFBQ0UsQUF1QkUsQUFFRSxBQUlQO0FBSk87O0FBS1g7Ozs7O0VBcERxQixnQkFBTSxBOztBQXlEaEMsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0Isc0JBQUE7TUFBQSxBQUFHLHdCQUFILEFBQUc7U0FBd0IsRUFBRSxrQkFBN0IsQUFBMkI7QUFBbkQ7O0FBRUEsSUFBSSx1QkFBdUIseUJBQUEsQUFBUSxpQkFBbkMsQUFBMkIsQUFBeUIsQUFDcEQ7a0JBQUEsQUFBZSIsImZpbGUiOiJEZXRhaWxzVmlldy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9iaW5heWFrL3Byb2plY3RzL3N0b2NrX2FyY2hpdmVzL2FwcCJ9