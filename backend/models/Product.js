const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const productSchema = new mongoose.Schema({
  p_id: {
    type: String,
    required: true,
  },

  p_name:{

    type:String

  },
  p_brand:{

    type:String

  },
  p_size:{

    type:String

  },
  p_orig_price:{
      type:String
  },
  p_dis_price:{
    type:String
  },
  p_discount:{
    type:String
  },
  img: {
    type: String,
    default: 'placeholder.jpg',
  },
//  likes: {
//    type: Number,
//    default: 0,
//  },
//  unlikes: {
//    type: Number,
//    default: 0,
//  },
  //rateproduct: {
  //  type: Number,
  //  default: 0,
  //},
  //comments: [
  //  {
  //    type: mongoose.Schema.Types.ObjectId,
  //    ref: 'Comment',
  //  },
  //],
  slug: { type: String, slug: 'p_id', unique: true, slug_padding_size: 2 },
});

// blogSchema.pre('validate', function (next) {
//   //check if there is a description
//   if (this.description) {
//     this.description = htmlPurify.sanitize(this.description);
//     this.snippet = stripHtml(this.description.substring(0, 200)).result;
//   }

//   next();
// });

module.exports = mongoose.model('Product', productSchema);
