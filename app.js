import express from "express";
import cors from "cors"; // Import the cors middleware
import prisma from "./src/utils/prisma.js";
import morgan from "morgan";
// import userRouter from "./src/controllers/users.controllers.js";
import newBadReviewRouter from "./src/controllers/newBadReview.controllers.js";
import getAllReviewsRouter from "./src/controllers/getAllReviews.controllers.js";

const app = express();
app.use(morgan("combined"));
app.use(cors()); // Use the cors middleware to allow cross-origin requests
app.use(function (req, res, next) {
  res.header("Access-Contorl-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(express.json()); // Add this middleware to parse JSON in request bodies
app.use("/new-bad-review", newBadReviewRouter);
app.use("/get-all-reviews", getAllReviewsRouter);

export default app;
