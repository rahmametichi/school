const mongoose = require("mongoose");

const personelSchema = new mongoose.Schema({
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

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
    },
    role: {
        type: Number,
    },
    showSelect: {
        type: Boolean,
        default: false,
    },
});

const personel = mongoose.model("personel", personelSchema);

module.exports = personel;
