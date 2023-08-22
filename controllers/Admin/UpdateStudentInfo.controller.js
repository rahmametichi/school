const Student = require("../../models/Students");

module.exports = {
    async UpdateInfo(req, res) {
        try {
            const { id } = req.params;
            studentID = await Student.findByIdAndUpdate(id, { ...req.body });
            res.status(200).json({
                status: true,
                message: "Student updated successfuly !!!",
                data: studentID,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
