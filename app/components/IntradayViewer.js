import React from 'react'
import millify from 'millify'


class IntradayViewer extends React.Component {
  async componentDidMount() {
    let res_daily  = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + this.props.symbol + '&apikey=6U8784D7B6RED0DV')
    let daily_data = await res_daily.json()
    daily_data = daily_data["Time Series (Daily)"]
    
    if(daily_data) {
      let i = 0
      let last_close = 0;
      let vol_24 = 0;

      for (let date in daily_data) {
        if (i > 1) {
          break;
        }
        if (i == 0) {
          vol_24 = daily_data[date]["5. volume"]
        }
        if (i == 1 ) {
          last_close = daily_data[date]["4. close"]
        }
        i++;
      }

      let res_intraday = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + this.props.symbol + '&interval=1min&apikey=6U8784D7B6RED0DV')
      let intraday_data = await res_intraday.json()
      intraday_data = intraday_data["Time Series (1min)"]
      if(intraday_data) {
        let current_close = 0;

        for (let date in intraday_data) {
          current_close = intraday_data[date]["4. close"]
          break
        }

        this.setState({
          last_close,
          vol_24,
          current_close
        })
      }
      else {
        this.setState({noData: true})
      }
    }
    else {
      this.setState({noData: true})
    }
  }

  render() {
    if (this.state == null ) {
      return <div className="intraday-data" >Loading...</div>
    }
    else if (this.state.noData) {
      return <div className="intraday-data" >Data not available...</div> 
    }
    else { 
      return (
        <div className="intraday-data" >
          <div className="row intraday-data-key">
            <div className="col-md-3">Price</div>
            <div className="col-md-3">Change</div>
            <div className="col-md-3">Last Close</div>
            <div className="col-md-3">Volume</div>
          </div>
          <div className="row intraday-data-value">
            <div className="col-md-3"> {parseFloat(this.state.current_close).toFixed(2)} </div>
            <div className="col-md-3"> {(parseFloat(this.state.last_close) -  parseFloat(this.state.current_close)).toFixed(2)} </div>
            <div className="col-md-3"> {parseFloat(this.state.last_close).toFixed(2)}</div>
            <div className="col-md-3">  {millify(parseInt(this.state.vol_24))} </div>
          </div>
        </div>
      )
    }
  }
}

export default IntradayViewer
