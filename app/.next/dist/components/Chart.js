"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Format = require("d3-format");

var _reactStockcharts = require("react-stockcharts");

var _series = require("react-stockcharts/lib/series");

var _axes = require("react-stockcharts/lib/axes");

var _scale = require("react-stockcharts/lib/scale");

var _helper = require("react-stockcharts/lib/helper");

var _utils = require("react-stockcharts/lib/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/binayak/projects/stock_archives/app/components/Chart.js";


var CandleStickStockScaleChartWithVolumeBarV1 = function (_React$Component) {
  (0, _inherits3.default)(CandleStickStockScaleChartWithVolumeBarV1, _React$Component);

  function CandleStickStockScaleChartWithVolumeBarV1() {
    (0, _classCallCheck3.default)(this, CandleStickStockScaleChartWithVolumeBarV1);

    return (0, _possibleConstructorReturn3.default)(this, (CandleStickStockScaleChartWithVolumeBarV1.__proto__ || (0, _getPrototypeOf2.default)(CandleStickStockScaleChartWithVolumeBarV1)).apply(this, arguments));
  }

  (0, _createClass3.default)(CandleStickStockScaleChartWithVolumeBarV1, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          type = _props.type,
          initialData = _props.data,
          width = _props.width,
          ratio = _props.ratio;

      var xScaleProvider = _scale.discontinuousTimeScaleProvider.inputDateAccessor(function (d) {
        return d.date;
      });

      var _xScaleProvider = xScaleProvider(initialData),
          data = _xScaleProvider.data,
          xScale = _xScaleProvider.xScale,
          xAccessor = _xScaleProvider.xAccessor,
          displayXAccessor = _xScaleProvider.displayXAccessor;

      var start = xAccessor((0, _utils.last)(data));
      var end = xAccessor(data[Math.max(0, data.length - 100)]);
      var xExtents = [start, end];

      return _react2.default.createElement(_reactStockcharts.ChartCanvas, { height: 400,
        ratio: ratio,
        width: width,
        margin: { left: 50, right: 50, top: 10, bottom: 30 },
        type: type,
        seriesName: "MSFT",
        data: data,
        xScale: xScale,
        xAccessor: xAccessor,
        displayXAccessor: displayXAccessor,
        xExtents: xExtents,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_reactStockcharts.Chart, { id: 1, yExtents: function yExtents(d) {
          return [d.high, d.low];
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_axes.XAxis, { axisAt: "bottom", orient: "bottom", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_axes.YAxis, { axisAt: "right", orient: "right", ticks: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_series.CandlestickSeries, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_reactStockcharts.Chart, { id: 2, yExtents: function yExtents(d) {
          return d.volume;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_axes.YAxis, { axisAt: "left", orient: "left", ticks: 5, tickFormat: (0, _d3Format.format)(".2s"), __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_series.BarSeries, { yAccessor: function yAccessor(d) {
          return d.volume;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })));
    }
  }]);

  return CandleStickStockScaleChartWithVolumeBarV1;
}(_react2.default.Component);

CandleStickStockScaleChartWithVolumeBarV1.propTypes = {
  data: _propTypes2.default.array.isRequired,
  width: _propTypes2.default.number.isRequired,
  ratio: _propTypes2.default.number.isRequired,
  type: _propTypes2.default.oneOf(["svg", "hybrid"]).isRequired
};

CandleStickStockScaleChartWithVolumeBarV1.defaultProps = {
  type: "svg"
};
CandleStickStockScaleChartWithVolumeBarV1 = (0, _helper.fitWidth)(CandleStickStockScaleChartWithVolumeBarV1);

exports.default = CandleStickStockScaleChartWithVolumeBarV1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhcnQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJmb3JtYXQiLCJDaGFydENhbnZhcyIsIkNoYXJ0IiwiQmFyU2VyaWVzIiwiQ2FuZGxlc3RpY2tTZXJpZXMiLCJYQXhpcyIsIllBeGlzIiwiZGlzY29udGludW91c1RpbWVTY2FsZVByb3ZpZGVyIiwiZml0V2lkdGgiLCJsYXN0IiwiQ2FuZGxlU3RpY2tTdG9ja1NjYWxlQ2hhcnRXaXRoVm9sdW1lQmFyVjEiLCJwcm9wcyIsInR5cGUiLCJpbml0aWFsRGF0YSIsImRhdGEiLCJ3aWR0aCIsInJhdGlvIiwieFNjYWxlUHJvdmlkZXIiLCJpbnB1dERhdGVBY2Nlc3NvciIsImQiLCJkYXRlIiwieFNjYWxlIiwieEFjY2Vzc29yIiwiZGlzcGxheVhBY2Nlc3NvciIsInN0YXJ0IiwiZW5kIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsInhFeHRlbnRzIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaGlnaCIsImxvdyIsInZvbHVtZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQWE7O0FBQ3RCLEFBQ0UsQUFDQTs7QUFHRixBQUFTLEFBQU87O0FBRWhCLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQzJDLEtBRDNDLEFBQ2dEO1VBRGhELEFBQ0MsY0FERCxBQUNDO1VBREQsQUFDYSxxQkFEYixBQUNPO1VBRFAsQUFDMEIsZUFEMUIsQUFDMEI7VUFEMUIsQUFDaUMsZUFEakMsQUFDaUMsQUFFeEM7O1VBQU0sdURBQWlCLEFBQ3BCLGtCQUFrQixhQUFBO2VBQUssRUFBTCxBQUFPO0FBSnJCLEFBR1AsQUFBdUIsT0FBQTs7NEJBT25CLGVBVkcsQUFVSCxBQUFlO1VBVlosQUFNTCx1QkFOSyxBQU1MO1VBTkssQUFPTCx5QkFQSyxBQU9MO1VBUEssQUFRTCw0QkFSSyxBQVFMO1VBUkssQUFTTCxtQ0FUSyxBQVNMLEFBR0Y7O1VBQU0sUUFBUSxVQUFVLGlCQUF4QixBQUFjLEFBQVUsQUFBSyxBQUM3QjtVQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsR0FBRyxLQUFBLEFBQUssU0FBNUMsQUFBWSxBQUFVLEFBQUssQUFBMEIsQUFDckQ7VUFBTSxXQUFXLENBQUEsQUFBQyxPQUFsQixBQUFpQixBQUFRLEFBRXpCOzs2QkFDRSxBQUFDLCtDQUFZLFFBQWIsQUFBcUIsQUFDbkI7ZUFERixBQUNTLEFBQ1A7ZUFGRixBQUVTLEFBQ1A7Z0JBQVEsRUFBRSxNQUFGLEFBQVEsSUFBSSxPQUFaLEFBQW1CLElBQUksS0FBdkIsQUFBNEIsSUFBSSxRQUgxQyxBQUdVLEFBQXdDLEFBQ2hEO2NBSkYsQUFJUSxBQUNOO29CQUxGLEFBS2EsQUFDWDtjQU5GLEFBTVEsQUFDTjtnQkFQRixBQU9VLEFBQ1I7bUJBUkYsQUFRYSxBQUNYOzBCQVRGLEFBU29CLEFBQ2xCO2tCQVZGLEFBVVk7O29CQVZaO3NCQUFBLEFBYUU7QUFiRjtPQUFBLGtCQWFFLEFBQUMseUNBQU0sSUFBUCxBQUFXLEdBQUcsVUFBVSxxQkFBQTtpQkFBSyxDQUFDLEVBQUQsQUFBRyxNQUFNLEVBQWQsQUFBSyxBQUFXO0FBQXhDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDZCQUFNLFFBQVAsQUFBYyxVQUFTLFFBQXZCLEFBQThCO29CQUE5QjtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLDZCQUFNLFFBQVAsQUFBYyxTQUFRLFFBQXRCLEFBQTZCLFNBQVEsT0FBckMsQUFBNEM7b0JBQTVDO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLEFBQUM7O29CQUFEO3NCQWhCSixBQWFFLEFBR0UsQUFFRjtBQUZFO0FBQUEsMkJBRUYsQUFBQyx5Q0FBTSxJQUFQLEFBQVcsR0FBRyxVQUFVLHFCQUFBO2lCQUFLLEVBQUwsQUFBTztBQUEvQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyw2QkFBTSxRQUFQLEFBQWMsUUFBTyxRQUFyQixBQUE0QixRQUFPLE9BQW5DLEFBQTBDLEdBQUcsWUFBWSxzQkFBekQsQUFBeUQsQUFBTztvQkFBaEU7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxtQ0FBVSxXQUFXLHNCQUFBO2lCQUFLLEVBQUwsQUFBTztBQUE3QjtvQkFBQTtzQkFyQk4sQUFDRSxBQWtCRSxBQUVFLEFBSVA7QUFKTzs7Ozs7O0VBdEM4QyxnQkFBTSxBOztBQTZDOUQsMENBQUEsQUFBMEM7UUFDbEMsb0JBQUEsQUFBVSxNQURvQyxBQUM5QixBQUN0QjtTQUFPLG9CQUFBLEFBQVUsT0FGbUMsQUFFNUIsQUFDeEI7U0FBTyxvQkFBQSxBQUFVLE9BSG1DLEFBRzVCLEFBQ3hCO1FBQU0sb0JBQUEsQUFBVSxNQUFNLENBQUEsQUFBQyxPQUFqQixBQUFnQixBQUFRLFdBSmhDLEFBQXNELEFBSVg7QUFKVyxBQUNwRDs7QUFNRiwwQ0FBQSxBQUEwQztRQUExQyxBQUF5RCxBQUNqRDtBQURpRCxBQUN2RDtBQUVGLDRDQUE0QyxzQkFBNUMsQUFBNEMsQUFBUyxBQUVyRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJDaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9iaW5heWFrL3Byb2plY3RzL3N0b2NrX2FyY2hpdmVzL2FwcCJ9