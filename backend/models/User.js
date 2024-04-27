/*The goal of this javascript file is making of user login Schema
just like we do in Sql, the name of this schema is "UserSchema" acting as a
mongoDB model */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);
//   User.createIndexes();
  module.exports = User;