const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ1zdsK0Wksi3wdKKEe9B-yfAFJftIs05a_u_NS4Q6DjdheSBWYeeeP2dsCEDaXjo4A8&usqp=CAU",
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
    },
    classToStudy: [
        {
            name: String,
        },
    ],
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: Number,
    },
    showSelect: {
        type: Boolean,
        default: false,
    },
});

const teacher = mongoose.model("teacher", teacherSchema);

module.exports = teacher;
