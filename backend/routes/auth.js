const router = require("express").Router();
const User = require("../models/User");
const Blog = require('../models/Blog');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require('multer');



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

    let data = { img: req.file.filename};
        
    const user = await User.findOne({ phone_no: req.body.phone_no});
    if (!user)
        return res
            .status(400)
            .send({ error: "Phn no is incorrect." });
        
     

        
  
    try {

      user.img=req.file.filename
      const new_user = await user.save();
  
      res.status(201).send({ user })

    //   return response.status(201)
  
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
        phone_no:req.body.phone_no,
        gender:req.body.gender,
        alt_phone_no:req.body.alt_phone_no,
        hint_name:req.body.hint_name,
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
            .send({ user,error: null, token: token });
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


  const user = await User.findOne({ phone_no: req.body.phone_no});
  if (!user)
      return res
          .status(400)
          .send({ error: "Phn or Password is incorrect." });

  //hash
  const ValidPass = await bcrypt.compare(req.body.password, user.password);
  if (!ValidPass)
      return res
          .status(400)
          .send({ error: "Email or Password is incorrect." });

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






// router.post("/register", async (req, res) => {
//   console.log(req.body);

//   const emailExist = await User.findOne({ email: req.body.email });
//   if (emailExist)
//       return res
//           .status(400)
//           .send({ error: "Email already exists" });

//   //hash
//   const salt = await bcrypt.genSalt(10);
//   const hashPass = await bcrypt.hash(req.body.password, salt);
//   const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: hashPass,
//   });
//   try {
//       const savedUser = await user.save();
//       const token = jwt.sign({
//           _id: savedUser._id,
//           exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
//       }, process.env.TOKEN_SECRET);
  
//       return res
//           .status(200)
//           .header("auth-token", token)
//           .send({ error: null, token: token });
//   } catch (err) {
//       console.log(err);
//       return res
//           .status(400)
//           .send({ error: "Not available at the moment", success: "false" });
//   }
// });

// router.post("/login", async (req, res) => {
//   console.log(req.body);


//   const user = await User.findOne({ email: req.body.email });
//   if (!user)
//       return res
//           .status(400)
//           .send({ error: "Email or Password is incorrect." });

//   //hash
//   const ValidPass = await bcrypt.compare(req.body.password, user.password);
//   if (!ValidPass)
//       return res
//           .status(400)
//           .send({ error: "Email or Password is incorrect." });

//   // token
//   const token = jwt.sign({
//       _id: user._id,
//       exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
//   }, process.env.TOKEN_SECRET);
//   // }, "thisisyo");


//   return res
//       .status(200)
//       .header("auth-token", token)
//       .send({ error: null, token: token });
// });



module.exports = router;