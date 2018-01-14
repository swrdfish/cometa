export const addMessage = (uid, text) => ({
  type: 'ADD_MSG',
  uid,
  text
})

export const deleteMessage = (id) => ({
  type: 'DEL_MSG',
  id
})

export const setCurrencyFilter = (currency) => ({
  type: 'SET_CURRENCY_FILTER',
  currency
})

export const setCurrencyDetails = (currency_details) => ({
  type: "SET_CURR",
  currency_details
})

export const setDetailsLoading = (isLoading, symbol) => ({
  type: "SET_CURR_LOADING",
  isLoading,
  symbol
})