const Exam = require("../../models/ExamsDate");

module.exports = {
    async EditExam(req, res) {
        try {
            const { id } = req.params;
            const data = await Exam.findByIdAndUpdate(id, {
                ...req.body,
            });
            res.status(200).json({
                status: true,
                message: "Exam Edited succefully",
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
