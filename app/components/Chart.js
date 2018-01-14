import React from "react";
import PropTypes from "prop-types";
import { format } from "d3-format";
import { ChartCanvas, Chart } from "react-stockcharts";
import {
  BarSeries,
  LineSeries,
} from "react-stockcharts/lib/series";

import { XAxis, YAxis } from "react-stockcharts/lib/axes";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

class PriceLineWithVolumeChart extends React.Component {
  render() {
    const { type, data: initialData, width, ratio } = this.props;

    const xScaleProvider = discontinuousTimeScaleProvider
      .inputDateAccessor(d => d.date);
    const {
      data,
      xScale,
      xAccessor,
      displayXAccessor,
    } = xScaleProvider(initialData);

    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 100)]);
    const xExtents = [start, end];

    return (
      <ChartCanvas height={400}
        ratio={ratio}
        width={width}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={type}
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
      >

        <Chart id={1} yExtents={d => [d.price]}>
          <XAxis axisAt="bottom" orient="bottom"/>
          <YAxis axisAt="right" orient="right" ticks={5} />
          <LineSeries
            yAccessor={d => d.price}
            stroke="#ff7f0e"
            strokeDasharray="Solid" />
        </Chart>
        <Chart id={2} yExtents={d => d.txVolume}>
          <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format(".2s")}/>
          <BarSeries yAccessor={d => d.txVolume} opacity={0.2} stroke={false} />
        </Chart>
      </ChartCanvas>
    );
  }
}

PriceLineWithVolumeChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

PriceLineWithVolumeChart.defaultProps = {
  type: "svg",
};

PriceLineWithVolumeChart = fitWidth(PriceLineWithVolumeChart);

export default PriceLineWithVolumeChart;
