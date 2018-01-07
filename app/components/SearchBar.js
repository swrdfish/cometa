import React from 'react'
import { connect } from 'react-redux'

import { setCompanyFilter } from '../actions'


class SearchBar extends React.Component{
	constructor(props) {
		super(props)
		this.state = {value: ''}
		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleClearSearch = this.handleClearSearch.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.closeButton = (<i className="fa fa-close clear-search" aria-hidden="true" onClick={this.handleClearSearch}></i>)
		this.searchButton = (<i className="fa fa-search" aria-hidden="true"></i>)
	}

	handleOnChange(event) {
		this.setState({value: event.target.value})
		this.props.dispatch(setCompanyFilter(event.target.value.toLowerCase()))
	}

	handleClearSearch(event) {
		this.setState({value: ''})
		this.props.dispatch(setCompanyFilter(''))
	}

	handleKeyDown(event) {
		if(event.key === "Escape"){
			event.stopPropagation()
			event.preventDefault()
			this.setState({value: ''})
			this.props.dispatch(setCompanyFilter(''))
		}
	}

	render() {
		return (
			<div className="search-wrapper">
				<input
					placeholder="Search: eg, goog"
					value={this.state.value}
					onKeyDown={this.handleKeyDown}
					onChange={this.handleOnChange}
					type="text"
				/>
				{this.state.value != '' ? this.closeButton : this.searchButton}
			</div>
		)
	}
}


let ConnectedSearchBar = connect()(SearchBar) 
export default ConnectedSearchBar;
