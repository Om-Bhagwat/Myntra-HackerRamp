const router = require("express").Router();
const User = require("../models/User");
const Blog = require('../models/Blog');
const Product = require('../models/Product');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');
//const Product = require('../models/product');



// new

//define storage for the images

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, './public/uploads/images');
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


router.post('/addtofriendlist', async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ phone_no: req.body.phone_no });
  if (!user)
    return res
      .status(400)
      .send({ error: "Phn no is incorrect." });
  try {
    user.friendlist.push(req.body.phone_no)
    const new_user = await user.save(); res.status(201).send({ user })
    return response.status(201)
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
    p_desc: req.body.p_desc,
    p_size: req.body.p_size,
    p_price: req.body.p_price,

  });
  try {

    await product.save();
    product.img = req.file.filename



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






module.exports = router;