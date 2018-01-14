import React from 'react'
import Chart from './Chart'


class ChartLoader extends React.Component {
  constructor() {
    super()
    this.fetchData = this.fetchData.bind(this)
  }

  async fetchData() {
    this.setState({loading: true})

    let res  = await fetch('http://104.196.36.39/api/price/' + this.props.symbol)
    let stock_data = await res.json()

    if(!stock_data.error) {
      stock_data = stock_data.map((d)=> {
        d.date = new Date(d.date)
        return d
      })
      this.setState({
        data: stock_data,
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
    console.log('mount')
    this.fetchData()
  }

  componentWillReceiveProps() {
    console.log('props change')
    this.fetchData()
  }

  render() {
    if (this.state == null || this.state.loading ) {
      return <div>Loading...</div>
    }
    else if (this.state.noData) {
      return <div>Data not available...</div> 
    }
    return (
      <Chart type="svg" data={this.state.data} width={1060} />
    )
  }
}

export default ChartLoader
