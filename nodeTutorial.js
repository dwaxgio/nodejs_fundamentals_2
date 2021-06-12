// 1. Use the tutorial.js module
var Tutor = require("./tutorial.js");

// 2. Defining a function called Nodetutorial
exports.Nodetutorial = function () {
  // 3. Printing a text to console
  console.log("Text from nodeTutorial module, that uses tutorial module");
  // 4. Creating a function pTutor wich called the ShowTutorial function in the tutorial module
  this.pTutor = function () {
    var PTutor = Tutor;
    PTutor.ShowTutorial();
  };
};
