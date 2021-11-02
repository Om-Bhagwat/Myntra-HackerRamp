const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    // const verified = jwt.verify(token, "thisisyo");
    req._id = verified["_id"];
    next();
  } catch (err) {
    return res
      .status(400)
      .send(JSON.stringify({ error: "invalid JWT Token" }));
  }
};
module.exports = verifyToken;