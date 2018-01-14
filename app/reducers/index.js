import { combineReducers } from 'redux'
import currencyFilter from './currencyFilter'
import detailsViewState from './detailsViewState'

const cometaApp = combineReducers({
  currencyFilter,
  detailsViewState
})

export default cometaApp
