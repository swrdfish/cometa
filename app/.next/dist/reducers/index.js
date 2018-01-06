'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _companyFilter = require('./companyFilter');

var _companyFilter2 = _interopRequireDefault(_companyFilter);

var _companyList = require('./companyList');

var _companyList2 = _interopRequireDefault(_companyList);

var _detailsViewState = require('./detailsViewState');

var _detailsViewState2 = _interopRequireDefault(_detailsViewState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var peerChatApp = (0, _redux.combineReducers)({
  companyList: _companyList2.default,
  companyFilter: _companyFilter2.default,
  detailsViewState: _detailsViewState2.default
});

exports.default = peerChatApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNvbXBhbnlGaWx0ZXIiLCJjb21wYW55TGlzdCIsImRldGFpbHNWaWV3U3RhdGUiLCJwZWVyQ2hhdEFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFzQjs7Ozs7O0FBRTdCLElBQU07QUFBOEIsQUFFbEM7QUFGa0MsQUFHbEM7QUFIRixBQUFvQixBQUFnQixBQU1wQztBQU5vQyxBQUNsQyxDQURrQjs7a0JBTXBCLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYmluYXlhay9wcm9qZWN0cy9zdG9ja19hcmNoaXZlcy9hcHAifQ==