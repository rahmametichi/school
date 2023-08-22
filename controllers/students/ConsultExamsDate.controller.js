const ExamsDate = require("../../models/ExamsDate");
const Student = require("../../models/Students");
module.exports = {
    async getExamDate(req, res) {
        try {
            const { id } = req.params;
            const student = await Student.findById(id);
            const classRoom = student.classRoom;
            const examdate = await ExamsDate.find({ classRoom });

            res.status(201).json({
                status: true,
                message: "Get Exam Date ",
                data: examdate,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
