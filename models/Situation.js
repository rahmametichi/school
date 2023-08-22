const mongoose = require("mongoose");

const SituationSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
    },
    date: {
        type: String,
        required: true,
    },
    situation: {
        type: String,
        required: true,
    },
    select: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("situation", SituationSchema);
