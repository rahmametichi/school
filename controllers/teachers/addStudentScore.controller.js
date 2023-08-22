const Note = require("../../models/note");

module.exports = {
    async Score(req, res) {
        try {
            const data = await Note.insertMany([...req.body]);
            res.status(201).json({
                status: true,
                message: "Note added Successfuly",
                data: data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
