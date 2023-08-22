const Teachers = require("../../models/Teachers");
module.exports = {
    async DeleteTeacher(req, res) {
        try {
            const { id } = req.params;
            const DeletedTeacher = await Teachers.findByIdAndDelete(id);
            res.status(200).json({
                status: true,
                message: "Teacher Deleted .. !",
                data: DeletedTeacher,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
