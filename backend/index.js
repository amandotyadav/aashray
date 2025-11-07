import "dotenv/config";
import express from "express";
import { connectDB } from "./configs/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import User from "./models/user.model.js";

const app = express();

// connect to the database
connectDB();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const server = http.createServer(app);

// initialize socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.use(async (socket, next) => {
  try {
    // get cookie header
    const cookieHeader = socket.handshake.headers.cookie;
    if (!cookieHeader) return next(new Error("No auth token found"));

    // extract auth_token from cookie
    const token = cookieHeader
      .split(";")
      .find((c) => c.trim().startsWith("auth_token="))
      ?.split("=")[1];

    if (!token) return next(new Error("No token in cookie"));

    // verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // find user
    const user = await User.findById(decoded.userId).select("name email");
    if (!user) return next(new Error("User not found"));

    socket.user = user; // attach user to socket
    next();
  } catch (err) {
    console.error("Socket auth error:", err);
    next(new Error("Authentication failed"));
  }
});

io.on("connection", (socket) => {
  console.log(`⚡ ${socket.user.name} connected`);

  socket.on("sendMessage", (message) => {
    const messageData = {
      user: socket.user.name, // ✅ automatically attach name
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    socket.broadcast.emit("receiveMessage", messageData);
  });

  socket.on("disconnect", () => {
    console.log(`❌ ${socket.user.name} disconnected`);
  });
});

// routes
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
