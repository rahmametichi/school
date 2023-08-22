const classroom = require("../../models/Classroom");

module.exports = {
    async AddClass(req, res) {
        try {
            const { name } = req.body;
            const data = await classroom.create({
                name,
            });
            res.status(201).json({
                status: true,
                message: "You new Classroom has been created",
                data: data,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
