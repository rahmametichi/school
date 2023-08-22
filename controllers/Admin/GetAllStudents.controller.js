const Students = require("../../models/Students");
module.exports = {
    async GetAllStudents(req, res) {
        try {
            const AllStudents = await Students.find({});

            res.status(200).json({
                status: true,
                message: "All Students Imported",
                data: AllStudents,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
