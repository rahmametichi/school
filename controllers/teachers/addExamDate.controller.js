const ExamsDateSchema = require("../../models/ExamsDate");

module.exports = {
    async addExDate(req, res) {
        try {
            // let addedBy = res.decoded.id;
            const { addedBy } = req.body;
            const { title, classroom, from, to } = req.body;
            const exam = await ExamsDateSchema.create({
                addedBy,
                title,
                classroom,
                from,
                to,
            });
            res.status(201).json({
                status: true,
                message: "Exam Added Successfuly ",
                data: exam,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
