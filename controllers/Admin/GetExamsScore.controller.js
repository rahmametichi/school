const Note = require("../../models/note");
module.exports = {
    async GetExamsScore(req, res) {
        try {
            const AllExamScore = await Note.find({})
                .populate("subject", "firstName lastName -_id subject")
                .populate("student", "firstName lastName ");
            res.status(200).json({
                status: true,
                message: "All Exams Score Imported",
                data: AllExamScore,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
