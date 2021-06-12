// 1. Calls the http library
var http = require("http");

// 2. Create the server using the http library
var server = http.createServer(function (req, res) {
  // 3. Set the content header
  res.writeHead(200, { "Content-type": "text/plain" });

  // 4. Sending the string to the response
  res.end("Response from created server");
});

// 5. Make the server listen on port 7000
server.listen(5000);

// MAKING GET REQUEST
// 1. Using request module
var request = require("request");
// 2. Making a GET request to google.com
request("http://www.google.com", function (err, res, body) {
  // 3. Sending the response from google to console
  console.log(body);
});
