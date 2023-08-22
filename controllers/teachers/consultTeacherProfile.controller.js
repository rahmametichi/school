const Teacher = require("../../models/Teachers");

module.exports = {
    async GetTeacherInfo(req, res) {
        try {
            const { id } = req.params;
            const data = await Teacher.findById(id);
            res.status(200).json({
                status: true,
                message: "Teacher imported Succefully",
                data,
            });
        } catch (err) {
            res.status(500).json({ status: false, message: err });
            process.exit(1);
        }
    },
};
