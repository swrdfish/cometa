import React from 'react'

import AppLogo from './AppLogo'
import SearchBar from './SearchBar'
import CompanyList from './CompanyList'




class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar" className="col-md-3">
                <AppLogo />
                <SearchBar />
                <CompanyList />
            </div>
        )
    }

}

export default Sidebar