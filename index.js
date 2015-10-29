module.exports = function(property, el) {
  el = el || document.createElement('div');
  const prefixes = ['', 'ms', 'Moz', 'webkit'];
  let result;
  prefixes.forEach(prefix => {
    if (result) return;
    let prop = prefix ? prefix + capitalize(property) : property;
    if (typeof el.style[prop] !== 'undefined') {
      result = prop;
    }
  });
  return result;
}
