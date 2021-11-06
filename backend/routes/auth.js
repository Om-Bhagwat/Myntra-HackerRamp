const router = require("express").Router();
const User = require("../models/User");
const Blog = require('../models/Blog');
const tempProduct= require('../models/TempProduct');
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

// USER ROUTES 

// upload picture of user

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




// register
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
    
 
  for (let i = 0; i < arr.length; i++) {

    var user2 = await User.find({ phone_no: arr[i].f_no })
    arr2.push(user2[0])

  }
    
  



    res.send({ arr2 })
  } catch (e) {
    res.status(400).send()
  }
})


// get room id u_phone_no - login user , f_phon_no - friends

router.post('/getRoomId', async (req, res) => {

  try {
    const user1 = await User.find({ phone_no: req.body.u_phone_no })
    const arr=user1[0].frienlist
    // console.log(arr)

    var arr2 = []
    var x;
    

  for (let i = 0; i < arr.length; i++) {

    // console.log(arr[i].f_no);
    // console.log(req.body.f_phone_no)
    if(req.body.f_phone_no==(arr[i].f_no)){
      
      x=arr[i].room_id
      
    }

  

  }
    
  



    res.send({ x })
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
    

  for (let i = 0; i < arr.length; i++) {

    var user2 = await User.find({ phone_no: arr[i].f_no })
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
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//  Routes related to Product

// add to wishlist
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

// remove from wishlist
router.post("'removefromwishlist", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({ phone_no: req.body.phone_no });
  if (!user)
    return res
      .status(400)
      .send({ error: "Phn no is incorrect." });
  try {
    user.wishlist.pull(req.body.product_id)
    const new_user = await user.save(); res.status(201).send({ user })
    return response.status(201)
  } catch (error) {
    console.log(error);
  }
});



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




// users wish list
router.post('/allproductsWishlist', async (req, res) => {

  try {
    const user1 = await User.find({ phone_no: req.body.phone_no })
    const arr=user1[0].wishlist

    var arr2 = []

    for (let i = 0; i < arr.length; i++) {

      var user2 = await Product.find({ p_id: arr[i] })
      arr2.push(user2[0])

    }
  res.send({ arr2 })
  } catch (e) {
    res.status(400).send()
  }
})

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// All routes for swipe

// selecting random products
router.get('/PushRandom', async (req, res) => {

  var arr=[]

  let temp_product = new tempProduct({
    id:"1"
  })

  try {
    const product1 = await Product.find({})

    for (let i = 0; i < 3; i++) {

      
      arr.push(product1[i]);
      temp_product.products.push({
        p_id:product1[i].p_id,
        count:0
      })

    }
    
    await temp_product.save()

    res.send({temp_product})
  } catch (e) {
    res.status(400).send()
  }
})

// route to show  random products in default manner

router.get('/showRandom', async (req, res) => {

 

  try {
    const product1 = await tempProduct.find({})

    const arr=product1[0].products
    var arr2 = []
    
 
  for (let i = 0; i < arr.length; i++) {

    var user2 = await Product.find({ p_id: arr[i].p_id })
    arr2.push(user2[0])

  }
    
 
    
   

    res.send({arr2})
  } catch (e) {
    res.status(400).send()
  }
})

// route to like product
    
router.post('/likeProduct', async (req, res) => {

  try {
    const temp_product = await tempProduct.findOne({ id:"1" })
    
    // var x=temp_product.products

    for(let i=0;i<temp_product.products.length;i++){

      if(temp_product.products[i].p_id==req.body.p_id){
        temp_product.products[i].count+=1
        // temp_product.products.p_
      }

    }

    await temp_product.save()
    
  res.send({ temp_product})
  } catch (e) {
    console.log(e)
    res.status(400).send()
  }
})

router.post('/dislikeProduct', async (req, res) => {

  try {
    const temp_product = await tempProduct.findOne({ id:"1" })
    
    // var x=temp_product.products

    for(let i=0;i<temp_product.products.length;i++){

      if(temp_product.products[i].p_id==req.body.p_id){
        temp_product.products[i].count-=1
        // temp_product.products.p_
      }

    }

    await temp_product.save()
    
  res.send({ temp_product})
  } catch (e) {
    console.log(e)
    res.status(400).send()
  }
})


router.get('/showSorted', async (req, res) => {

 

  try {
    const product1 = await tempProduct.find({})

    const arr=product1[0].products
    function compare( a, b ) {
      if ( a.count > b.count ){
        return -1;
      }
      if ( a.count < b.count ){
        return 1;
      }
      return 0;
    }
    
    arr.sort( compare );
    var arr2 = []
    
 
  for (let i = 0; i < arr.length; i++) {

    var user2 = await Product.find({ p_id: arr[i].p_id })
    arr2.push(user2[0])

  }
    
 
    
   

    res.send({arr2})
  } catch (e) {
    res.status(400).send()
  }
})


module.exports = router;