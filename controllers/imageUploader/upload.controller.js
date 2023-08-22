const { upload } = require("./uploadImag");
const Student = require("../../models/Students");
const Teacher = require("../../models/Teachers");

module.exports = {
    async upload(req, res) {
        try {
            const ID = res.decoded.id;
            const IsStudent = await Student.findById(ID);
            const IsTeacher = await Teacher.findById(ID);

            if (ID == IsStudent) {
                upload(req, res, (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ status: false, message: err });
                    } else {
                        if (req.file === undefined) {
                            console.log(err);
                            res.status(500).json({
                                status: false,
                                message: "Error : No file Selected !",
                            });
                        } else {
                            res.status(201).json({
                                status: true,
                                message: "File Uploder ",
                                file: `uploads/student/${req.file.filename}`,
                            });
                        }
                    }
                });
                const { avatar } = req.body;
                const StudentAvatar = await Student.create({
                    avatar,
                });
                res.status(200).json({
                    status: true,
                    message: "Student profile picture was uploaded",
                    data: StudentAvatar,
                });
            } else if (ID == IsTeacher) {
                upload(req, res, (err) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            status: false,
                            message: err,
                        });
                    } else {
                        if (req.file === undefined) {
                            console.log(err);
                            res.status(500).json({
                                status: false,
                                message: "Error : No file Selected !",
                            });
                        } else {
                            res.status(201).json({
                                status: true,
                                message: "File Uploder ",
                                file: `uploads/teacher/${req.file.filename}`,
                            });
                        }
                    }
                });
                const { avatar } = req.body;
                const TeacherAvatar = await Teacher.create({
                    avatar,
                });
                res.status(200).json({
                    status: true,
                    message: "Teacher profile picture was uploaded",
                    data: TeacherAvatar,
                });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
