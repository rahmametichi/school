const bcrypt = require("bcrypt");
const Teacher = require("../../models/Teachers");

module.exports = {
    async CreateTeacher(req, res) {
        try {
            const {
                avatar,
                firstName,
                lastName,
                email,
                password,
                subject,
                role,
            } = req.body;
            bcrypt.hash(password, 12, async (err, hash) => {
                if (err) {
                    res.status(500).json({ status: false, message: err });
                } else if (hash) {
                    const teacher = await Teacher.create({
                        avatar,
                        firstName,
                        lastName,
                        email,
                        password: hash,
                        subject,
                        role,
                    });
                    res.status(201).json({
                        status: true,
                        message: "Teacher Created ",
                        data: teacher,
                    });
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
