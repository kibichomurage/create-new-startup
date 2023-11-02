const mongoose = require('mongoose');
//Remove subdocument ids later
const visitorSchema = new mongoose.Schema({
    trackingID:{type:String, required:true},
    ipAddress:{type: String},
    browser:{type: String},
    cpu:{type: String},
    os:{type: String},
    ua:{type: String},
    requestTimes:
    {
      type: Array,
      default:[],
    },
    requestHistory:
    {
      type: Array,
      default:[],
    },
    referrerHistory:
    {
      type: Array,
    }    
});

module.exports = mongoose.model("Visitor", visitorSchema);