import React from 'react'
import { connect } from 'react-redux'
import fuzzysearch from 'fuzzysearch'
import { setDetailsLoading, setCurrencyDetails} from '../actions'


let currenciesAvailable = ['BTC', 'DOGE', 'LTC', 'ETH']
let currencyNames = {
	'BTC': 'Bitcoin',
	'DOGE': 'Dogecoin',
	'LTC': 'Litecoin',
	'ETH': 'Etherium'
}

class CurrencyList extends React.Component {
	constructor(props){
		super(props)
		this.handleSelect = this.handleSelect.bind(this)	
	}

	async handleSelect(event) {
		this.props.dispatch(setCurrencyDetails({
			'symbol': event.target.getAttribute('data-key'),
			'name': currencyNames[event.target.getAttribute('data-key')]
		}))
	}

	render() {
		let currenciesToDisplay = currenciesAvailable
		if(this.props.searchText && this.props.searchText !== '') {
			// Need to use tries to improve performance
			currenciesToDisplay = currenciesAvailable.filter(currency => (fuzzysearch(this.props.searchText, currency.toLowerCase())))
		}

		let currencies = currenciesToDisplay.map(function (currency) {
			return (
				<div key={currency} className="currency-list-item" data-key={currency} onClick={this.handleSelect}>
					<div className="currency-name" data-key={currency}>
						{currency}
					</div>
				</div>
			);
		}, this);

		return (
			<div className="currency-list-wrapper">
				{(currencies.length > 0)? currencies : (<div className="currency-not-found">No currencies found.</div>)}
			</div>
		)
	}
}


const mapStateToProps = ({currencyFilter}) => ({
  searchText: currencyFilter
})

let ConnectedCurrencyList = connect(mapStateToProps)(CurrencyList) 
export default ConnectedCurrencyList