(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.constGivenName = {
    boy: {
      single: [],
      dobule: []
    },
    girl: {
      single: [],
      dobule: []
    },
  }


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.constGivenName;
  }

}());
