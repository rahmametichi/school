const Classroom = require("../../models/Classroom");
module.exports = {
    async GetAllClassroom(req, res) {
        try {
            const data = await Classroom.find({});

            res.status(200).json({
                status: true,
                message: "All Classroom Imported",
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
