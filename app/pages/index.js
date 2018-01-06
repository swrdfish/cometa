import React from 'react'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import { createStore } from 'redux'
import fetch from 'isomorphic-fetch'


import Head from 'next/head'
import Page from '../components/Page.js'
import Sidebar from '../components/Sidebar.js'
import DetailsView from '../components/DetailsView.js'
import { addCompany } from '../actions'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.store = createStore(reducer)
    }

    async componentDidMount() {
        let res  = await fetch('http://localhost/api/companies/symbols')
        let company_list = await res.json()
        this.store.dispatch(addCompany(company_list))
    }

    render() {
        return (
            <Provider store={this.store}>
                <div>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="stylesheet" href="/static/css/bootstrap.css" />
                        <link rel="stylesheet" href="/static/css/main.css" />
                        <link rel="stylesheet" href="static/css/font-awesome.min.css" />
                        <link href="https://fonts.googleapis.com/css?family=Bellefair|Montserrat|Lato" rel="stylesheet" /> 
                        <title>Stock Archive</title>
                    </Head>
                    <Page>
                        <Sidebar />
                        <DetailsView />
                    </Page>
                </div>
            </Provider>
        )
    }
}

export default App