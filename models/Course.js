const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
    },
    classroom: {
        type: String,
    },
    contenu: {
        type: String,
    },
});
module.exports = mongoose.model("course", CourseSchema);
