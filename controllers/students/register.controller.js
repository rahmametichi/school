const bcrypt = require("bcrypt");
const Student = require("../../models/Students");

module.exports = {
    async CreateStudents(req, res) {
        try {
            const {
                avatar,
                firstName,
                lastName,
                age,
                adress,
                parentsPhone,
                classRoom,
                email,
                password,
                role,
            } = req.body;
            bcrypt.hash(password, 12, async (err, hash) => {
                if (err) {
                    res.status(500).json({ status: false, message: err });
                } else if (hash) {
                    const student = await Student.create({
                        avatar,

                        firstName,
                        classRoom,
                        lastName,
                        age,
                        adress,
                        parentsPhone,
                        email,
                        password: hash,
                        role,
                    });
                    res.status(201).json({
                        status: true,
                        message: "Student Created ",
                        data: student,
                    });
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
