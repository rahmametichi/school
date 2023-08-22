// check file type
module.exports = {
    checkFileType(file, cb) {
        // allowed ext
        const filetype = /jpeg|jpg|png|gif/;
        // check ext
        const extname = filetype.test(
            path.extname(file.originalname).toLowerCase()
        );
        const mimetype = filetype.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb("error : image only !");
        }
    },
};
