const Student = require("../../models/Students");

module.exports = {
    async profile(req, res) {
        try {
            // let email = res.decoded.email;
            const { id } = req.params;
            const Profile = await Student.findById(id);
            res.status(200).json({ status: true, data: Profile });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
