import jwt from "jsonwebtoken";

// admin authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        msg: " authorization denied",
      });
    }
    const token_decord = jwt.verify(token, process.env.JWT_Secret);

    if (token_decord !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        msg: " authorization denied",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, meassage: error.meassage });
  }
};

export default authUser;
