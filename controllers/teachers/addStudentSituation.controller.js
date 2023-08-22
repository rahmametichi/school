const Situation = require("../../models/Situation");

module.exports = {
    async AddSituation(req, res) {
        try {
            const student_situation = await Situation.create([...req.body]);
            res.status(201).json({
                status: true,
                message: "Situation added succefully",
                data: student_situation,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
