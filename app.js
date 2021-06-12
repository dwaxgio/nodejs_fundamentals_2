// 1. Including the EXPRESS module
var express = require("express");
var pug = require("pug");

var Addition = require("./addition.js");
var localTutor = require("./nodeTutorial.js");

// 2. Creating an objecto of Express
var app = express();

// 3. Calling the SET method, to stablish the Jade view engine 
app.set("view engine", "pug");

//Default route
app.get("/", function (req, res) {
    

    // var result = Addition.AddNumber(1,2);     
    // console.log(result);

    // // 
    
    // var tut = new localTutor.Nodetutorial();
    // tut.pTutor();    

    // //

    //res.send("Hello world from Express, default routhe");
    
    res.render("index", {
        user: "Dwaxgio"
    });
});

// 4. Calling the LISTEN method
var server = app.listen(3000, function () {});

// ROUTERS and HANDLERS ************************
// Basic structure: app.METHOD(PATH, HANDLER)

// 1. Create the route 1
app.route("/Route1").get(function(req, res){
    res.send("Response from the path /Route1");
});

// 2. Create the route 2
app.route("/Route2").get(function(req, res){
    res.send("Response from the path /Route2");
});