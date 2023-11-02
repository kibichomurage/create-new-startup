const mongoose = require('mongoose');
const authenticationSchema = require("./authenticationSchema").schema;


//Remove subdocument ids later
const userSchema = new mongoose.Schema({
    authentication:authenticationSchema,
    
});


module.exports = mongoose.model("User", userSchema);
