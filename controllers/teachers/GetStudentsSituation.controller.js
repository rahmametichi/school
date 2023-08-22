const Situation = require("../../models/Situation");

module.exports = {
    async importSituations(req, res) {
        try {
            const { id } = req.params;
            data = await Situation.find({ addedBy: id }).populate(
                "student",
                "firstName lastName avatar classRoom "
            );
            res.status(201).json({
                status: true,
                message: `Situation Imported Succefully `,
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
