import React from 'react'
import Chart from './Chart'


class ChartLoader extends React.Component {
  async componentDidMount() {
    let res  = await fetch('http://35.197.103.84/api/price/' + this.props.symbol)
    let stock_data = await res.json()

    if(!stock_data.error) {
      stock_data = stock_data.map((d)=> {
        d.date = new Date(d.date)
        return d
      })
      this.setState({data: stock_data})
    }
    else {
      this.setState({noData: true})
    }
  }

  render() {
    if (this.state == null ) {
      return <div>Loading...</div>
    }
    else if (this.state.noData) {
      return <div>Data not available...</div> 
    }
    return (
      <Chart type="svg" data={this.state.data} width="1060" />
    )
  }
}

export default ChartLoader
