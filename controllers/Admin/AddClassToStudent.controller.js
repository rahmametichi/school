const Students = require("../../models/Students");

module.exports = {
    async AddClassToStudents(req, res) {
        try {
            const { id } = req.params;
            const { classRoom } = req.body;
            const UpdateClass = await Students.findByIdAndUpdate(id, {
                ...req.body,
            });

            res.status(200).json({
                status: true,
                message: "Class added",
                data: UpdateClass,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
