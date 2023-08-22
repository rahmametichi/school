const multer = require("multer");
const path = require("path");
const { checkFileType } = require("./checkFileType");

// storage location frontend/public/imagesUploader
const Storage = multer.diskStorage({
    distination: "/public/imagesUploader",
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

// multer uploader
const upload = multer({
    storage: Storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single("myImage");

module.exports = { upload };
