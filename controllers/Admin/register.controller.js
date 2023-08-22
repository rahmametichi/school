const bcrypt = require("bcrypt");
const Admin = require("../../models/Admin");

module.exports = {
    async CreateAdmin(req, res) {
        try {
            const { email, password, role } = req.body;
            bcrypt.hash(password, 12, async (err, hash) => {
                if (err) {
                    res.status(500).json({ status: false, message: err });
                } else if (hash) {
                    const admin = await Admin.create({
                        email,
                        password: hash,
                        role,
                    });
                    res.status(201).json({
                        status: true,
                        message: "Admin Created ",
                        data: admin,
                    });
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
