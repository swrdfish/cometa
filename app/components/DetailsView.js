import React from 'react'
import { connect } from 'react-redux'
import ChartLoader from './ChartLoader'
import IntradayViewer from './IntradayViewer'
import millify from 'millify'


class DetailsView extends React.Component {
    render() {
        if(!this.props.detailsViewState) {
          return (
            <div id="details-view" className="col-md-9">
              <div className="details-view-blank">
                Select a currency to view details.
              </div>
            </div>
          )
        }
        else if(this.props.detailsViewState.isLoading) {
          return (
            <div id="details-view" className="col-md-9">
              <div className="details-view-blank">
                Loading..
              </div>
            </div>
          )
        }
        else {
          return (
            <div id="details-view" className="col-md-9">
              <div className="currency-info-wrapper">
                <div className="row" >
                    <div className="currency-info-symbol"> {this.props.detailsViewState.details.name + ' (' + this.props.detailsViewState.symbol + ')'} </div>
                </div>
              </div>
              <div className="currency-today">
                <IntradayViewer symbol={this.props.detailsViewState.details.symbol} />
              </div>
              <div className="currency-history container">
                <h3>History</h3>
                <ChartLoader symbol={this.props.detailsViewState.details.symbol} />
              </div>
            </div>
          )
        }
    }
}



const mapStateToProps = ({ detailsViewState }) => ({ detailsViewState })

let ConnectedDetailsView = connect(mapStateToProps)(DetailsView)
export default ConnectedDetailsView