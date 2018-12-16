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
        friendsData.push(req.body)
        
        // Create variable to hold array of total difference between two users
        var totalDifferenceArr = [];
        
        // Set for loop to go through each user and compare with most recent submission
        for (let i = 0; i < friendsData.length - 1; i++ ) {
            // Take the absolute value of the difference of each question's answer and add them together
            var totalDifference = Math.abs(parseInt(req.body.scores[0]) - parseInt(friendsData[i].scores[0]))
            + Math.abs(parseInt(req.body.scores[1]) - parseInt(friendsData[i].scores[1]))  
            + Math.abs(parseInt(req.body.scores[2]) - parseInt(friendsData[i].scores[2]))  
            + Math.abs(parseInt(req.body.scores[3]) - parseInt(friendsData[i].scores[3]))  
            + Math.abs(parseInt(req.body.scores[4]) - parseInt(friendsData[i].scores[4]))  
            + Math.abs(parseInt(req.body.scores[5]) - parseInt(friendsData[i].scores[5]))  
            + Math.abs(parseInt(req.body.scores[6]) - parseInt(friendsData[i].scores[6]))  
            + Math.abs(parseInt(req.body.scores[7]) - parseInt(friendsData[i].scores[7]))  
            + Math.abs(parseInt(req.body.scores[8]) - parseInt(friendsData[i].scores[8]))  
            + Math.abs(parseInt(req.body.scores[9]) - parseInt(friendsData[i].scores[9]))  
                                  
            // Push total difference into an array
            totalDifferenceArr.push(totalDifference);
        }

        // Find lowest totalDifference value in the array 
        // Set an index variable at 0 to start
        var index = 0;
        // Set a value variable to the first value in totalDifferenceArr
        var value = totalDifferenceArr[0];
        // Use a for loop to go through totalDifferenceArr; start at 1 since the value of 0 has already been stored
        for (let x = 1; x < totalDifferenceArr.length; x++) {
            if (totalDifferenceArr[x] < value) {
                // If the value of the next spot in the array is lower than the current value, set the value to the lower amount and set the index to x;
                value = totalDifferenceArr[x];
                index = x;
            }
        }
        
        // After calculations, respond to user with the name and image of the closest match 
        res.send({  name: friendsData[index].name,
                    image: friendsData[index].image 
        });             
    })    
};
