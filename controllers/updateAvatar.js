const path = require('path');
const fs = require('fs/promises');
const Jimp = require("jimp");
const User = require('../models/user')

const avatarsDir = path.join(__dirname, '../', 'public', 'avatars')

const updateAvatar = async (req, res) => {
    const {_id} = req.user;
    const { path: tempUpload, originalname } = req.file;
   
    const changedAvatar = async () => {
        const img = await Jimp.read(`${tempUpload}`);
        
        img.resize(100, 150)
            .write('new.jpg');
        console.log(img)
    };
    changedAvatar()

    const newFilename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, newFilename);
    
    
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", newFilename);
    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({
        avatarURL,
    });
};

module.exports = updateAvatar;