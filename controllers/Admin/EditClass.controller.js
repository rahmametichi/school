const Classroom = require("../../models/Classroom");
module.exports = {
    async EditClass(req, res) {
        try {
            const { id } = req.params;
            const EditClass = await Classroom.findByIdAndUpdate(id, {
                ...req.body,
            });
            res.status(200).json({
                status: true,
                message: "Class Edited .. !",
                data: EditClass,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
