const Students = require("../../models/Students");

module.exports = {
    async GetStudents(req, res) {
        try {
            const { nameclass } = req.body;
            data = await Students.find({ classRoom: nameclass });
            res.status(201).json({
                status: true,
                message: `Class ${nameclass} imported Succefully `,
                data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
