const mongoose = require("mongoose");

const feesSchema = new mongoose.Schema({
    student: {
        type: String,
    },
    classe: {
        type: String,
    },
    paymentDuration: {
        type: String,
    },
    amount: {
        type: String,
    },
    paymentMethod: {
        type: String,
    },
    paymentDate: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("fees", feesSchema);
