// Import path npm 
var path = require("path");

// Export htmlRoutes to be used at server.js
module.exports = function(app) {

    // Route to send to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // Route to send to default home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

