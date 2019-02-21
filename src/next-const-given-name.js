(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var boysSingle = require('./data/names_boys_single.json')
  var boysDouble = require('./data/names_boys_double.json')
  var girlsSingle = require('./data/names_girls_single.json')
  var girlsDouble = require('./data/names_girls_double.json')

  nx.constGivenName = {
    boys: {
      single: boysSingle,
      double: boysDouble
    },
    girls: {
      single: girlsSingle,
      double: girlsDouble
    },
  }


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.constGivenName;
  }

}());
