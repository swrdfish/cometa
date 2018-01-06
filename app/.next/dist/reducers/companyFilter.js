'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyFilter = function companyFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case 'SET_COMPANY_FILTER':
      return action.compname;
    default:
      return state;
  }
};

exports.default = companyFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NvbXBhbnlGaWx0ZXIuanMiXSwibmFtZXMiOlsiY29tcGFueUZpbHRlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbXBuYW1lIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLGdCQUF3QjtNQUF2QixBQUF1Qiw0RUFBZixBQUFlO01BQVgsQUFBVyxtQkFDNUM7O1VBQVEsT0FBTyxBQUFmLEFBQ0U7U0FBSyxBQUFMLEFBQ0U7YUFBTyxPQUFPLEFBQWQsQUFDRjtBQUNFO2FBQU8sQUFBUCxBQUpKLEFBTUQ7O0FBUEQsQUFTQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJjb21wYW55RmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2JpbmF5YWsvcHJvamVjdHMvc3RvY2tfYXJjaGl2ZXMvYXBwIn0=