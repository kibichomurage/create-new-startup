const mongoose = require("mongoose");

const clickSchema = new mongoose.Schema({
    position:{type: String},
    time:{type: String},
});

module.exports = mongoose.model('Click', clickSchema);
