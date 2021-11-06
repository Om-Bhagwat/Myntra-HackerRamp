const router = require("express").Router();
const User = require("../models/User");
const Blog = require('../models/Blog');
const Product = require('../models/Product');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const uuid = require('uuid');

//const Product = require('../models/product');



// new

//define storage for the imag es

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, './public/uploads/images');
    //  callback(null, '../../client/src/img');
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

router.post('/upload', upload.single('image'), async (request, response) => {
  console.log(request.file);
  // console.log(request.body);
  let blog = new Blog({
    title: request.body.title,
    author: request.body.author,
    description: request.body.description,
    img: request.file.filename,
  });

  try {
    blog = await blog.save();

    response.status(201).send({ blog })

    //   return response.status(201)

  } catch (error) {
    console.log(error);
  }
});

router.post('/upload2', upload.single('image'), async (req, res) => {
  console.log(req.file);
  // console.log(request.body);

  let data = { img: req.file.filename };

  const user = await User.findOne({ phone_no: req.body.phone_no });
  if (!user)
    return res
      .status(400)
      .send({ error: "Phn no is incorrect." });





  try {

    user.img = req.file.filename
    const new_user = await user.save();

    res.status(201).send({ user })

    //   return response.status(201)

  } catch (error) {
    console.log(error);
  }
});


router.post('/addtowishlist', async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ phone_no: req.body.phone_no });
  if (!user)
    return res
      .status(400)
      .send({ error: "Phn no is incorrect." });
  try {
    user.wishlist.push(req.body.product_id)
    const new_user = await user.save(); res.status(201).send({ user })
    return response.status(201)
  } catch (error) {
    console.log(error);
  }
});

// f_phone no - one to whom we are sending request ,u_phone no our own 
router.post('/sendFriendReq', async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ phone_no: req.body.f_phone_no });
  if (!user)
    return res
      .status(400)
      .send({ error: "Phn no is incorrect." });
  try {
    user.pending_request.push(req.body.u_phone_no)
    const new_user = await user.save(); res.status(201).send({ user })
    
  } catch (error) {
    console.log(error);
  }
});


// u_phone no - our own ,f_phone no -friend's
router.post('/AcceptFriendReq', async (req, res) => {
  console.log(req.body);
  const user2 = await User.findOne({ phone_no: req.body.f_phone_no });
  const user = await User.findOne({ phone_no: req.body.u_phone_no });
  if (!user)
    return res
      .status(400)
      .send({ error: "Phn no is incorrect." });
  try {
    var x=uuid.v4();
    // user.frienlist.push(req.body.f_phone_no)
    // user2.frienlist.push(req.body.u_phone_no)
    user.frienlist.push({f_no:req.body.f_phone_no,room_id:x})
    user2.frienlist.push({f_no:req.body.u_phone_no,room_id:x})
    user.pending_request.pull(req.body.f_phone_no)
    const new_user2 = await user2.save(); 
    const new_user = await user.save(); res.status(201).send({ user })

    
  } catch (error) {
    console.log(error);
  }
});
 



router.post("/register2", async (req, res) => {
  console.log(req.body);

  const emailExist = await User.findOne({ phone_no: req.body.phone_no });
  if (emailExist)
    return res
      .status(400)
      .send({ error: "phn already exists" });

  //hash
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone_no: req.body.phone_no,
    gender: req.body.gender,
    alt_phone_no: req.body.alt_phone_no,
    hint_name: req.body.hint_name,
    password: hashPass,
  });
  try {
    const savedUser = await user.save();
    const token = jwt.sign({
      _id: savedUser._id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
    }, process.env.TOKEN_SECRET);

    return res
      .status(200)
      .header("auth-token", token)
      .send({ user, error: null, token: token });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Not available at the moment", success: "false" });
  }
});

//router.post("/like", async (req, res) => {
//  console.log(req.body);
//  const user = await User.findOne({ phone_no: req.body.phone_no });
//  if (!user)
//    return res
//      .status(400)
//      .send({ error: "Phn no is incorrect." });
//  try {
//    user.likes.push(req.body.product_id)
//    const new_user = await user.save(); res.status(201).send({ user })
//    return response.status(201)
//  } catch (error) {
//    console.log(error);
//  }
//});
//
//router.post("/unlike", async (req, res) => {
//  console.log(req.body);
//  const user = await User.findOne({ phone_no: req.body.phone_no });
//  if (!user)
//    return res
//      .status(400)
//      .send({ error: "Phn no is incorrect." });
//  try {
//    user.likes.pull(req.body.product_id)
//    const new_user = await user.save(); res.status(201).send({ user })
//    return response.status(201)
//  } catch (error) {
//    console.log(error);
//  }
//});
//
//router.get("/percentagelikes", async (req, res) => {
//  console.log(req.body);
//  const user = await User.findOne({ phone_no: req.body.phone_no });
//  if (!user)
//    return res
//      .status(400)
//      .send({ error: "Phn no is incorrect." });
//  try {
//    const product = await Product.findOne({ _id: req.body.product_id })
//    const likes = product.likes.length
//    const total = product.likes.length + product.dislikes.length
//    const percentage = (likes / total) * 100
//    res.status(201).send({ percentage })
//    return response.status(201)
//  } catch (error) {
//    console.log(error);
//  }
//});
//
////route.post("/commentonproduct", async (req, res) => {
////  console.log(req.body);
////  const user = await User.findOne({ phone_no: req.body.phone_no });
////  if (!user)
////    return res
////      .status(400)
////      .send({ error: "Phn no is incorrect." });
////  try {
////    user.comments.push(req.body.product_id)
////    const new_user = await user.save(); res.status(201).send({ user })
////    return response.status(201)
////  } catch (error) {
////    console.log(error);
////  }
////});
//
//route.post("/rateproduct", async (req, res) => {
//  console.log(req.body);
//  const user = await User.findOne({ phone_no: req.body.phone_no });
//  if (!user)
//    return res
//      .status(400)
//      .send({ error: "Phn no is incorrect." });
//  try {
//    user.rated_products.push(req.body.product_id)
//    const new_user = await user.save(); res.status(201).send({ user })
//    return response.status(201)
//  } catch (error) {
//    console.log(error);
//  }
//});
//
//
// login 2

router.post("/login2", async (req, res) => {
  console.log(req.body);


  const user = await User.findOne({ phone_no: req.body.phone_no });
  if (!user)
    return res
      .status(400)
      .send({ error: "Phone number or Password is incorrect." });

  //hash
  const ValidPass = await bcrypt.compare(req.body.password, user.password);
  if (!ValidPass)
    return res
      .status(400)
      .send({ error: "Phone number or Password is incorrect." });

  // token
  const token = jwt.sign({
    _id: user._id,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
  }, process.env.TOKEN_SECRET);
  // }, "thisisyo");


  return res
    .status(200)
    .header("auth-token", token)
    .send({ error: null, token: token });
});


// upload product details
router.post("/productUpload", upload.single('image'), async (req, res) => {

  const product = new Product({
    p_id: req.body.p_id,

    p_name: req.body.p_name,
    p_brand: req.body.p_brand,
    p_size: req.body.p_size,
    p_price: req.body.p_price,
    p_orig_price:req.body.p_orig_price,
    p_dis_price:req.body.p_dis_price,
    p_discount:req.body.p_discount

  });
  try {

    // await product.save();
    product.img = req.file.filename
    await product.save();



    return res
      .status(200)

      .send({ product });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: "Not available at the moment", success: "false" });
  }
});

//get all Friends
router.post('/allFriends', async (req, res) => {

  try {
    const user1 = await User.find({ phone_no: req.body.phone_no })
    const arr=user1[0].frienlist

    var arr2 = []
    
    // nietos.push(user1[0])
  
  //   arr.forEach(myFunction);


  // async function myFunction(item) {
  //   var user2 = await User.find({ phone_no: item })
  
  //   await nietos.push(user2[0])
  //   console.log(user2[0])
    
  // }
  for (let i = 0; i < arr.length; i++) {

    var user2 = await User.find({ phone_no: arr[i].f_no })
    arr2.push(user2[0])

  }
    
  



    res.send({ arr2 })
  } catch (e) {
    res.status(400).send()
  }
})

// get all pending request
router.post('/allPendingReq', async (req, res) => {

  try {
    const user1 = await User.find({ phone_no: req.body.phone_no })
    const arr=user1[0].pending_request

    var arr2 = []
    
    // nietos.push(user1[0])
  
  //   arr.forEach(myFunction);


  // async function myFunction(item) {
  //   var user2 = await User.find({ phone_no: item })
  
  //   await nietos.push(user2[0])
  //   console.log(user2[0])
    
  // }
  for (let i = 0; i < arr.length; i++) {

    var user2 = await User.find({ phone_no: arr[i].f_no })
    arr2.push(user2[0])

  }
    
  



    res.send({ arr2 })
  } catch (e) {
    res.status(400).send()
  }
})


// get all friends
router.post('/allFriends', async (req, res) => {

  try {
    const user1 = await User.find({ phone_no: req.body.phone_no })
    const arr=user1[0].frienlist

    var arr2 = []
    
    // nietos.push(user1[0])
  
  //   arr.forEach(myFunction);


  // async function myFunction(item) {
  //   var user2 = await User.find({ phone_no: item })
  
  //   await nietos.push(user2[0])
  //   console.log(user2[0])
    
  // }
  for (let i = 0; i < arr.length; i++) {

    var user2 = await User.find({ phone_no: arr[i] })
    arr2.push(user2[0])

  }
    
  



    res.send({ arr2 })
  } catch (e) {
    res.status(400).send()
  }
})



// get user
router.post('/getuser', async (req, res) => {

  try {
    const user1 = await User.find({ phone_no: req.body.phone_no })
    


    res.send({ user1 })
  } catch (e) {
    res.status(400).send()
  }
})

// rote to search names

router.post('/getnames', async (req, res) => {

  try {

      const searchfield= req.body.name
      User.find({name:{$regex:searchfield,$options:'$i'}}).then(
        data=>{
          res.send(data);
        }
      )
      
      

  
  } catch (e) {
      res.status(400).send()
  }
})


// get product
router.post('/getproduct', async (req, res) => {

  try {
    const product1 = await User.find({ p_id: req.body.p_id })


    res.send({ product1 })
  } catch (e) {
    res.status(400).send()
  }
})


// get all product
router.get('/getAllproduct', async (req, res) => {

  try {
    const product1 = await Product.find({})


    res.send({ product1 })
  } catch (e) {
    res.status(400).send()
  }
})







module.exports = router;