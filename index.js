var capitalize = require('capitalize');

module.exports = function(property, el) {
  el = el || document.createElement('div');
  var prefixes = ['', 'ms', 'Moz', 'webkit'];
  var result;
  prefixes.forEach(function(prefix){
    if (result) return;
    var prop = prefix ? prefix + capitalize(property) : property;
    if (typeof el.style[prop] !== 'undefined') {
      result = prop;
    }
  });
  return result;
}
