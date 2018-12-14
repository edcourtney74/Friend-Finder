// Require express & path npm's
var express = require("express");
var path = require("path");

// Create instance of express app
var app = express();

// Set the port for the app
var PORT = process.env.PORT || 8080;

// Start serve to listen to client requests
app.listen(PORT, function() {
    // Log on server-side that server has started 
    console.log("Server listening on http://localhost:" + PORT);
})





