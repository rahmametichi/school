const Situation = require("../../models/Situation");
module.exports = {
    async GetSituation(req, res) {
        try {
            const AllSituations = await Situation.find({})
                .populate(
                    "student",
                    "firstName lastName avatar classRoom -_id  "
                )
                .populate("addedBy", "firstName lastName subject -_id");
            res.status(200).json({
                status: true,
                message: "All Situations Imported",
                data: AllSituations,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
