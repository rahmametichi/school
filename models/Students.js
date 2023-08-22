const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default:
            "https://www.shareicon.net/data/2016/05/26/771198_man_512x512.png",
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
    age: {
        type: Number,
        required: true,
    },
    parentsPhone: {
        type: Number,
        required: true,
        unique: true,
    },
    adress: {
        type: String,
        required: true,
    },
    classRoom: {
        type: String,
    },
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
    select: {
        type: Boolean,
        default: true,
    },
    reportCard: {
        type: String,
        default: "",
    },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
