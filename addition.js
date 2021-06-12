// 1. Defining a module. The exports keyword allows the mdule to be accessed by other files
var exports = module.exports = {};

// 2. Creating a function in the module
exports.AddNumber = function (a, b) {
  // 3. Returning a value back the calling function
  return a + b;
};
