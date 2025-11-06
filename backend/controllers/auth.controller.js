import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendResponse from "../utils/sendResponse.util.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // validate the credentials
    if (!name || !email || !password)
      return sendResponse(res, 400, false, "All fields are required");

    // validate the password
    if (password.length < 6)
      return sendResponse(
        res,
        400,
        false,
        "Password must be at least 6 characters long"
      );

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return sendResponse(
        res,
        409,
        false,
        "User with this email already exists"
      );

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // save the credentials to database
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // save token in cookie
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      samesite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // send response
    return sendResponse(res, 201, true, "User registered successfully");
  } catch (error) {
    console.error("Error in user registration:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // validate the credentials
    if (!email || !password)
      return sendResponse(res, 400, false, "All fields are required");

    // check user in database
    const user = await User.findOne({ email });
    if (!user)
      return sendResponse(res, 401, false, "Invalid email or password");

    // compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return sendResponse(res, 401, false, "Invalid email or password");

    // generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // save token in cookie
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      samesite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // send response
    return sendResponse(res, 200, true, "User logged in successfully");
  } catch (error) {
    console.error("Error in user login:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export const logout = (req, res) => {
  try {
    // clear the auth_token cookie
    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      samesite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return sendResponse(res, 200, true, "User logged out successfully");
  } catch (error) {
    console.error("Error in user logout:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export const isAuthenticated = (req, res) => {
  try {
    return sendResponse(res, 200, true, "User is authenticated");
  } catch (error) {
    console.error("Error in authentication check:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};
