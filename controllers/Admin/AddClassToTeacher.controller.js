const teacher = require("../../models/Teachers");

module.exports = {
    async AddClassToTeacher(req, res) {
        try {
            const { id } = req.params;
            const { newclass } = req.body;
            const UpdateClass = await teacher.findByIdAndUpdate(id, {
                ...req.body,
                $push: { classToStudy: { name: newclass } },
            });

            res.status(200).json({
                status: true,
                message: "Class added",
                data: UpdateClass,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
