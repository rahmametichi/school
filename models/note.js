const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
    },
    note: {
        type: Number,
    },
});

module.exports = mongoose.model("note", noteSchema);
