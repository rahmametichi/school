const ExamDate = require("../../models/ExamsDate");

module.exports = {
    async GetAllExamDate(req, res) {
        try {
            const Exams = await ExamDate.find({}).populate(
                "addedBy",
                "firstName lastName subject -_id"
            );
            res.status(200).json({
                status: true,
                message: "All Exams Date Imported",
                data: Exams,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
