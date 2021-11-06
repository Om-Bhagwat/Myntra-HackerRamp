const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
// const domPurifier = require('dompurify');
// const { JSDOM } = require('jsdom');
// const htmlPurify = domPurifier(new JSDOM().window);

// const stripHtml = require('string-strip-html');

//initialize slug
mongoose.plugin(slug);
const tempProductSchema = new mongoose.Schema({

    products: [
        {
          p_id:String,
          count:Number,default:0
    
        }
      ],
      id:{
          type:String
      }

});



module.exports = mongoose.model('tempProduct', tempProductSchema);
