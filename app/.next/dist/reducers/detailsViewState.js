'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var detailsViewSate = function detailsViewSate() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_COMP_LOADING':
      return {
        isLoading: action.isLoading,
        symbol: action.symbol
      };
    case 'SET_COMP':
      return {
        isLoading: false,
        symbol: action.company_details.symbol,
        details: action.company_details
      };
    default:
      return state;
  }
};

exports.default = detailsViewSate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2RldGFpbHNWaWV3U3RhdGUuanMiXSwibmFtZXMiOlsiZGV0YWlsc1ZpZXdTYXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaXNMb2FkaW5nIiwic3ltYm9sIiwiY29tcGFueV9kZXRhaWxzIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixrQkFBMEI7TUFBekIsQUFBeUIsNEVBQWpCLEFBQWlCO01BQVgsQUFBVyxtQkFDaEQ7O1VBQVEsT0FBUixBQUFlLEFBQ2I7U0FBQSxBQUFLLEFBQ0g7O21CQUNhLE9BRE4sQUFDYSxBQUNsQjtnQkFBUSxPQUZWLEFBQU8sQUFFVSxBQUVuQjtBQUpTLEFBQ0w7U0FHSixBQUFLLEFBQ0g7O21CQUFPLEFBQ00sQUFDWDtnQkFBUSxPQUFBLEFBQU8sZ0JBRlYsQUFFMEIsQUFDL0I7aUJBQVMsT0FIWCxBQUFPLEFBR1csQUFFcEI7QUFMUyxBQUNMO0FBS0Y7YUFiSixBQWFJLEFBQU8sQUFFWjs7QUFoQkQsQUFrQkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiZGV0YWlsc1ZpZXdTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9iaW5heWFrL3Byb2plY3RzL3N0b2NrX2FyY2hpdmVzL2FwcCJ9