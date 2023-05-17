const path = require('path');
const fs = require('fs/promises');
const Jimp = require("jimp");
const User = require('../models/user')

const avatarsDir = path.join(__dirname, '../', 'public', 'avatars')

const updateAvatar = async (req, res) => {
    const {_id} = req.user;
    const { path: tempUpload, originalname } = req.file;
    console.log(req.file)

    const newFilename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, newFilename);
    
    const av = async () => {
        const processedAvatar = await Jimp.read(resultUpload);
        await processedAvatar.resize(250, 250);
    };
    av();

    // console.log(processedAvatar)
    
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", newFilename);

    //   async function main() {
       
        // console.log(processedAvatar)
        // return processedAvatar
    // }
    // main();

    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
        avatarURL,
    });
};

module.exports = updateAvatar;