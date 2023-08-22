const Teacher = require("../../models/Teachers");

module.exports = {
    async Update(req, res) {
        try {
            const { id } = req.params;
            const data = await Teacher.findByIdAndUpdate(id, { ...req.body });
            res.status(200).json({ status: true, data });
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: false, message: err });
        }
    },
};
