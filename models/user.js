const {Schema, model} = require("mongoose");
const {mongooseError} = require('../helpers');

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  avatarURL: String,
  token: {
    type: String,
    default: ''
  },
}, { versionKey: false, timestamps: false }
);
userSchema.post('save', mongooseError)

const User = model('user', userSchema)

module.exports = User