import React from 'react'

import AppLogo from './AppLogo'
import SearchBar from './SearchBar'
import CurrencyList from './CurrencyList'




class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar" className="col-md-3">
                <AppLogo />
                <SearchBar />
                <CurrencyList />
            </div>
        )
    }

}

export default Sidebar