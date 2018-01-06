'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addMessage = exports.addMessage = function addMessage(uid, text) {
  return {
    type: 'ADD_MSG',
    uid: uid,
    text: text
  };
};

var deleteMessage = exports.deleteMessage = function deleteMessage(id) {
  return {
    type: 'DEL_MSG',
    id: id
  };
};

var setCompanyFilter = exports.setCompanyFilter = function setCompanyFilter(compname) {
  return {
    type: 'SET_COMPANY_FILTER',
    compname: compname
  };
};

var addCompany = exports.addCompany = function addCompany(company_list) {
  return {
    type: 'ADD_COMPANY',
    company_list: company_list
  };
};

var setCompanyDetails = exports.setCompanyDetails = function setCompanyDetails(company_details) {
  return {
    type: "SET_COMP",
    company_details: company_details
  };
};

var setDetailsLoading = exports.setDetailsLoading = function setDetailsLoading(isLoading, symbol) {
  return {
    type: "SET_COMP_LOADING",
    isLoading: isLoading,
    symbol: symbol
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiYWRkTWVzc2FnZSIsInVpZCIsInRleHQiLCJ0eXBlIiwiZGVsZXRlTWVzc2FnZSIsImlkIiwic2V0Q29tcGFueUZpbHRlciIsImNvbXBuYW1lIiwiYWRkQ29tcGFueSIsImNvbXBhbnlfbGlzdCIsInNldENvbXBhbnlEZXRhaWxzIiwiY29tcGFueV9kZXRhaWxzIiwic2V0RGV0YWlsc0xvYWRpbmciLCJpc0xvYWRpbmciLCJzeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTSxrQ0FBYSxTQUFiLEFBQWEsV0FBQSxBQUFDLEtBQUQsQUFBTSxNQUFOOztVQUFnQixBQUNsQyxBQUNOO1NBRndDLEFBR3hDO1VBSHdCLEFBQWdCO0FBQUEsQUFDeEM7QUFESyxBQU1QOztBQUFPLElBQU0sd0NBQWdCLFNBQWhCLEFBQWdCLGNBQUEsQUFBQyxJQUFEOztVQUFTLEFBQzlCLEFBQ047UUFGMkIsQUFBUztBQUFBLEFBQ3BDO0FBREssQUFLUDs7QUFBTyxJQUFNLDhDQUFtQixTQUFuQixBQUFtQixpQkFBQSxBQUFDLFVBQUQ7O1VBQWUsQUFDdkMsQUFDTjtjQUY4QixBQUFlO0FBQUEsQUFDN0M7QUFESyxBQUtQOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLFdBQUEsQUFBQyxjQUFEOztVQUFtQixBQUNyQyxBQUNOO2tCQUZ3QixBQUFtQjtBQUFBLEFBQzNDO0FBREssQUFLUDs7QUFBTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixrQkFBQSxBQUFDLGlCQUFEOztVQUFzQixBQUMvQyxBQUNOO3FCQUYrQixBQUFzQjtBQUFBLEFBQ3JEO0FBREssQUFLUDs7QUFBTyxJQUFNLGdEQUFvQixTQUFwQixBQUFvQixrQkFBQSxBQUFDLFdBQUQsQUFBWSxRQUFaOztVQUF3QixBQUNqRCxBQUNOO2VBRnVELEFBR3ZEO1lBSCtCLEFBQXdCO0FBQUEsQUFDdkQ7QUFESyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9iaW5heWFrL3Byb2plY3RzL3N0b2NrX2FyY2hpdmVzL2FwcCJ9