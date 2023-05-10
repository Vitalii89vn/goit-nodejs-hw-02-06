const {Schema, model} = require("mongoose");
const mongooseError = require('../helpers');

// const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const userSchema= new Schema({
    password: {
        type: String,
        required: [true, 'Set password for user'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        // match: emailRegexp,
        unique: true,
      },
      subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
      },
      token: String,
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
}, {versionKey: false, timestamps: true}
);
userSchema.post('save', mongooseError)

const User = model('user', userSchema)

module.exports = User