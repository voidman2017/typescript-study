/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return s.replace(/ /g, "%20");
};

var replaceSpace = function (s) {
  return s.split(" ").join("%20");
};

const s = "We are happy.";
console.log(replaceSpace(s));
