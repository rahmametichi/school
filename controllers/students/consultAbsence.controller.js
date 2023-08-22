const Student = require("../../models/Students");
const Situation = require("../../models/Situation");

module.exports = {
    async Absence(req, res) {
        try {
            const { id } = req.params;
            const data = await Situation.find({
                student: id,
            })
                .populate("addedBy", "avatar firstName subject")
                .populate("student", "firstName lastName -_id");

            res.status(200).json({ status: true, data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
