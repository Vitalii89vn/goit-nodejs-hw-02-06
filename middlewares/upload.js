const multer = require("multer");
const path = require("path");

const temporaryDir = path.join(__dirname, '../', 'tmp');

const multerStorage = multer.diskStorage({
    destination: temporaryDir,
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: multerStorage
});

module.exports = upload;
