import jwt from "jsonwebtoken";
import sendResponse from "../utils/sendResponse.util.js";

const userAuth = async (req, res, next) => {
  const auth_token = req.cookies?.auth_token;

  if (!auth_token) {
    return sendResponse(res, 401, false, "Unauthorized: No token provided");
  }

  try {
    const decoded = jwt.verify(auth_token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    console.error("Error in token verification:", error);
    return sendResponse(res, 401, false, "Unauthorized: Invalid token");
  }
};

export default userAuth;
