const Teachers = require("../../models/Teachers");
module.exports = {
    async GetAllTeachers(req, res) {
        try {
            const AllTeachers = await Teachers.find({});

            res.status(200).json({
                status: true,
                message: "All Teachers Imported",
                data: AllTeachers,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
