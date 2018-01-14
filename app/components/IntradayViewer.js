import React from 'react'
import millify from 'millify'


class IntradayViewer extends React.Component {
  constructor() {
    super()
    this.fetchData = this.fetchData.bind(this)
    this.updateData = this.updateData.bind(this)
  }

  async fetchData() {
    this.setState({loading: true})

    let res_daily  = await fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=' + this.props.symbol + '&market=USD&apikey=6U8784D7B6RED0DV')
    let daily_data = await res_daily.json()
    daily_data = daily_data["Time Series (Digital Currency Intraday)"]
    
    if(daily_data) {
      let i = 0
      let last_vol = 0;
      let last_price = 0;
      let last_market_cap = 0;
      let current_price  = 0;

      for (let date in daily_data) {
        if (i > 1) {
          break;
        }
        if (i == 0) {
          last_vol = daily_data[date]["2. volume"]
          current_price = daily_data[date]["1a. price (USD)"]
          last_market_cap = daily_data[date]["3. market cap (USD)"]
        }
        if (i == 1 ) {
          last_price = daily_data[date]["1a. price (USD)"]
        }
        i++;
      }

      this.setState({
        last_vol,
        last_price,
        last_market_cap,
        current_price,
        loading: false,
        noData: false
      })
    }
    else {
      this.setState({
        noData: true,
        loading: false
      })
    }

    // update at some interval
    this.ticker = setTimeout(this.updateData, 2000)
  }

  async updateData() {
    let res_daily  = await fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=' + this.props.symbol + '&market=USD&apikey=6U8784D7B6RED0DV')
    let daily_data = await res_daily.json()
    daily_data = daily_data["Time Series (Digital Currency Intraday)"]
    
    if(daily_data) {
      let i = 0
      let last_vol = 0;
      let last_price = 0;
      let last_market_cap = 0;
      let current_price  = 0;

      for (let date in daily_data) {
        if (i > 1) {
          break;
        }
        if (i == 0) {
          last_vol = daily_data[date]["2. volume"]
          current_price = daily_data[date]["1a. price (USD)"]
          last_market_cap = daily_data[date]["3. market cap (USD)"]
        }
        if (i == 1 ) {
          last_price = daily_data[date]["1a. price (USD)"]
        }
        i++;
      }

      this.setState({
        last_vol,
        last_price,
        last_market_cap,
        current_price,
        loading: false,
        noData: false
      })
    }
    else {
      this.setState({
        noData: true,
        loading: false
      })
    }    
  }

  componentDidMount() {
    this.fetchData()
  }

  componentWillReceiveProps() {
    clearTimeout(this.ticker)
    this.fetchData()
  }

  componentWillUnmount() {
    clearTimeout(this.ticker) 
  }

  render() {
    if (this.state == null || this.state.loading ) {
      return <div className="intraday-data" >Loading...</div>
    }
    else if (this.state.noData) {
      return <div className="intraday-data" >Data not available...</div> 
    }
    else { 
      let changed_price = (parseFloat(this.state.current_price) -  parseFloat(this.state.last_price)).toFixed(2)
      let color = "red"
      if(changed_price > 0) {
        color = "green"
      }

      return (
        <div className="intraday-data" >
          <div className="row intraday-data-key">
            <div className="col-md-3">Price</div>
            <div className="col-md-3">Change</div>
            <div className="col-md-3">Volume</div>
            <div className="col-md-3">Market Cap</div>
          </div>
          <div className="row intraday-data-value">
            <div className="col-md-3"> {parseFloat(this.state.current_price).toFixed(2)} </div>
            <div className="col-md-3" style={{color}} > {changed_price} </div>
            <div className="col-md-3"> {parseFloat(this.state.last_vol).toFixed(2)}</div>
            <div className="col-md-3">  {millify(parseInt(this.state.last_market_cap))} </div>
          </div>
        </div>
      )
    }
  }
}

export default IntradayViewer
