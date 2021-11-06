const mongoose = require("mongoose");

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Product = require('../models/Product');


// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     min: 6,
//     max: 255,
//   },
//   email: {
//     type: String,
//     required: true,
//     max: 255,
//     min: 6,
//   },
//   password: {
//     type: String,
//     required: true,
//     max: 1024,
//     min: 6,
//   },
//   Date: {
//     type: Date,
//     default: Date.now(),
//   },
// });



const userSchema = new mongoose.Schema({
  name: {
    type: String,

    min: 2,
    max: 255,
  },
  email: {
    type: String,

    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  Dob: {
    type: Date,
    default: Date.now(),
  },
  gender: {
    type: String
  },
  phone_no: {
    type: String,
    min: 10,
    max: 15,
    required: true
  },
  alt_phone_no: {
    type: String,
    min: 10,
    max: 15,

  },
  hint_name: {
    type: String
  },
  location: {
    type: String
  },
  img: {
    type: String,
    default: 'placeholder.jpg',
  },
  wishlist: [
    {
      type: String
    },
  ],
  pending_request:[
    {
      type:String,
      default:''
    }
  ],
  frienlist: [
    {
      f_no:String,
      room_id:String

    }
  ],
  slug: { type: String, slug: 'phone_no', unique: true, slug_padding_size: 2 }
});






module.exports = mongoose.model("User", userSchema);