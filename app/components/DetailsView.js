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
                Select a company to view details.
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
              <div className="company-info-wrapper">
                <div className="row" >
                    <div className="col-md-2 company-info-symbol">{this.props.detailsViewState.details.symbol} </div>
                    <div className="col-md-10">
                        <div className="row">
                          <div className="col-md-3 company-info-titles">Name</div>
                          <div className="col-md-3 company-info-titles">Industry</div>
                          <div className="col-md-3 company-info-titles">Marketcap</div>
                          <div className="col-md-3 company-info-titles">Sector</div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 company-info-values"> {this.props.detailsViewState.details.name} </div>
                          <div className="col-md-3 company-info-values"> {this.props.detailsViewState.details.industry} </div>
                          <div className="col-md-3 company-info-values"> ${millify(parseFloat(this.props.detailsViewState.details.marketcap))} </div>
                          <div className="col-md-3 company-info-values"> {this.props.detailsViewState.details.sector}</div>
                        </div>
                    </div>
                </div>
              </div>
              <div className="company-today">
                <IntradayViewer symbol={this.props.detailsViewState.details.symbol} />
              </div>
              <div className="company-history container">
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