import React from 'react'
import { connect } from 'react-redux'
import fuzzysearch from 'fuzzysearch'
import { setDetailsLoading, setCompanyDetails} from '../actions'


class CompanyList extends React.Component {
	constructor(props){
		super(props)
		this.handleSelect = this.handleSelect.bind(this)	
	}

	async handleSelect(event) {
			this.props.dispatch(setDetailsLoading(true, event.target.getAttribute('data-key')))
			let res = await fetch('http://localhost/api/company/info/' + event.target.getAttribute('data-key'))
      let company_info = await res.json()
			this.props.dispatch(setCompanyDetails(company_info))
	}

	render() {
		let companiesToDisplay = this.props.companyList

		if(this.props.searchText !== '') {
			// Need to use tries to improve performance
			companiesToDisplay = companiesToDisplay.filter(company => (fuzzysearch(this.props.searchText, company.symbol.toLowerCase())))
		}

		let companies = companiesToDisplay.map(function (company) {
			return (
				<div key={company.symbol} className="company-list-item" data-key={company.symbol} onClick={this.handleSelect}>
					<div className="company-name" data-key={company.symbol}>
						{company.symbol}
						<span className="fa fa-thumb-tack pinButton"></span>
					</div>
				</div>
			);
		}, this);

		return (
			<div className="company-list-wrapper">
				{(companies.length > 0)? companies : (<div className="company-not-found">No companies found.</div>)}
			</div>
		)
	}
}


const mapStateToProps = ({companyList, companyFilter}) => ({
  searchText: companyFilter,
  companyList
})

let ConnectedCompanyList = connect(mapStateToProps)(CompanyList) 
export default ConnectedCompanyList