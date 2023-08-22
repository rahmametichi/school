const Classroom = require("../../models/Teachers");

module.exports = {
    async getClassroom(req, res) {
        try {
            // let email = res.decoded.email;
            const { id } = req.params;
            const teacher_classroom = await Classroom.findById(id);
            res.status(200).json({
                status: true,
                data: teacher_classroom.classToStudy,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
