const Classroom = require("../../models/Classroom");
module.exports = {
    async DeleteClass(req, res) {
        try {
            const { id } = req.params;
            const DeletedClass = await Classroom.findByIdAndDelete(id);
            res.status(200).json({
                status: true,
                message: "Class Deleted .. !",
                data: DeletedClass,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
