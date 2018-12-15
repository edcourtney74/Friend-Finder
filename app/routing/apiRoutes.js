// Import info from friends.js and set to a variable
var friendsData = require("../data/friends");

// Export api Route to be used at server.js
module.exports = function(app) {

    // API GET request
    // Route to send to API page
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);        
    });

    // API Post request
    app.post("/api/friends", function (req, res) {
        // The new user information (from req.body) is pushed into the friendsData array
        console.log("From apiRoutes.js: " + req.body);
        friendsData.push(req.body)
        console.log("FriendsData: " + (typeof friendsData));
        
        
        // Code to determine the best match will go here and display a module telling the user who their best match is
    })    
};

