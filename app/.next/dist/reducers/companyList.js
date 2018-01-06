'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var company_list = function company_list() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_COMPANY':
      return [].concat((0, _toConsumableArray3.default)(state), (0, _toConsumableArray3.default)(action.company_list));
    default:
      return state;
  }
};

exports.default = company_list;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NvbXBhbnlMaXN0LmpzIl0sIm5hbWVzIjpbImNvbXBhbnlfbGlzdCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxlQUFlLFNBQWYsQUFBZSxlQUF3QjtNQUF2QixBQUF1Qiw0RUFBZixBQUFlO01BQVgsQUFBVyxtQkFDM0M7O1VBQVEsT0FBTyxBQUFmLEFBQ0U7U0FBSyxBQUFMLEFBQ0U7d0RBQ0ssQUFETCx5Q0FFSyxPQUFPLEFBRlosQUFJRjtBQUNFO2FBQU8sQUFBUCxBQVBKLEFBU0Q7O0FBVkQsQUFZQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJjb21wYW55TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9iaW5heWFrL3Byb2plY3RzL3N0b2NrX2FyY2hpdmVzL2FwcCJ9