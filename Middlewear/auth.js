const jwt = require("jsonwebtoken");
const Secret_Key = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Authorization token is required" });
    }

    const decoded = jwt.verify(token, Secret_Key);
    req.user = decoded; // send decoded obj as a in req
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = auth;