const ExamsDate = require("../../models/ExamsDate");

module.exports = {
    async GetExamsDate(req, res) {
        try {
            const { id } = req.params;
            data = await ExamsDate.find({ addedBy: id }).populate(
                "addedBy",
                "firstName lastName subject -_id"
            );
            res.status(200).json({
                status: true,
                message: `Exams Date imported Succefully `,
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
