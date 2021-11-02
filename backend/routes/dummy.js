const router = require("express").Router();
const verifyToken = require("../verifyToken");
const User = require("../models/User");

router.get("/protectedroute", verifyToken, async (req, res) => {
    console.log(req._id);//this is user id
    let nuser = await User.findOne({ _id: req._id });
    return res.status(200).send({
        error: null,
        data: "Hello "+nuser.name
    })
})

router.get("/openroute", async (req, res) => {
    //this is a public route
    return res.status(200).send({
        error: null,
        data: "Hello World openroute"
    })
})

module.exports = router;