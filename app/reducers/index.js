import { combineReducers } from 'redux'
import companyFilter from './companyFilter'
import companyList from './companyList'
import detailsViewState from './detailsViewState'

const peerChatApp = combineReducers({
  companyList,
  companyFilter,
  detailsViewState
})

export default peerChatApp
