const Situation = require("../../models/Situation");

module.exports = {
    async EditSituation(req, res) {
        try {
            const { id } = req.params;
            const student_situation = await Situation.findByIdAndUpdate(id, {
                ...req.body,
            });
            res.status(200).json({
                status: true,
                message: "Situation Edited succefully",
                data: student_situation,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
