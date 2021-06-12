// 1. Including the EXPRESS module
var express = require("express");

var Addition = require("./addition.js");
var localTutor = require("./nodeTutorial.js");

// 2. Creating an objecto of Express
var app = express();

// 3. Calling the SET method, to stablish the Jade view engine 
app.set("view engine", "jade");

//
app.get("/", function (req, res) {
    //res.end("Hello world from Express");

    var result = Addition.AddNumber(1,2); 
    // console.log(Addition.AddNumber(1,2));
    console.log(result);
    //res.end(result);

    // 

    // localTutor.Nodetutorial();
    // localTutor.Nodetutorial.pTutor();

    var tut = new localTutor.Nodetutorial();
    tut.pTutor();
    
});

// 4. Calling the LISTEN method
var server = app.listen(3000, function () {});
