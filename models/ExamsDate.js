const mongoose = require("mongoose");

const ExamsDateSchema = new mongoose.Schema({
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
    from: {
        type: Date,
    },
    to: {
        type: Date,
    },
});
module.exports = mongoose.model("examdate", ExamsDateSchema);
