const Students = require("../../models/Students");
module.exports = {
    async DeleteStudent(req, res) {
        try {
            const { id } = req.params;
            const DeletedStudent = await Students.findByIdAndDelete(id);
            res.status(200).json({
                status: true,
                message: "Student Deleted .. !",
                data: DeletedStudent,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
