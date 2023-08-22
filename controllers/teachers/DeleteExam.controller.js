const Exam = require("../../models/ExamsDate");
module.exports = {
    async DeleteExam(req, res) {
        try {
            const { id } = req.params;
            const data = await Exam.findByIdAndDelete(id);
            res.status(200).json({
                status: true,
                message: "Exam Deleted .. !",
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
