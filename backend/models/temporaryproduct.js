const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
//const User = require("../models/User");
//const Blog = require('../models/Blog');
const Product = require('../models/Product');


const temporaryProductSchema = new mongoose.Schema({
    productlikedarray: [{
        p_id: String,
        likecount: Number,
        default: 0
    }],
});
