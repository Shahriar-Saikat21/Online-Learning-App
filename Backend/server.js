import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//internal imports
import {
  pageNotFound,
  defaultErrorHandle,
} from "./Middleware/defaultErrorHandle.js";
import adminRoute from "./Routes/adminRoute.js";
import instrctorRoute from "./Routes/instructorRoute.js";
import visitorRoute from "./Routes/visitorRoute.js";
import userRouter from "./Routes/userManageRoute.js";
import studentRoute from "./Routes/studentRoute.js";


//App Initialized
const app = express();
const dotenvConfig = dotenv.config();

// Default Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static("Public"));


// CORS settings
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//user management all route
app.use(userRouter);

//Admin Panel All Route
app.use(adminRoute);

//Instructor Panel All Route
app.use(instrctorRoute);

//Visitor All Route
app.use(visitorRoute);

//Student all route
app.use(studentRoute);


// Default Error Handle
app.use(pageNotFound);
app.use(defaultErrorHandle);

// Server Started
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.port}`);
});
