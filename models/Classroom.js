const mongoose = require("mongoose");

const classRoom = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
});

module.exports = mongoose.model("classroom", classRoom);
