// Require express & path npm's
var express = require("express");
var path = require("path");

// Create instance of express app
var app = express();

// Set the port for the app
var PORT = process.env.PORT || 3000;

// Have express look in public directory for assets
app.use('/static', express.static(path.join(__dirname, '/app/public')));

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require htmlRoutes and apiRoutes from separate files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start serve to listen to client requests
app.listen(PORT, function() {
    // Log on server-side that server has started 
    console.log("Server listening on http://localhost:" + PORT);
})





