import express from "express";
import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma.js";
import { DateTime } from "luxon"; // Import luxon library

const router = express.Router();

const gmtTime = DateTime.local().setZone("Asia/Kuala_Lumpur");
const malaysiaTime = gmtTime.plus({ hours: 8 });

router.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newBadReview = await prisma.badReviews.create({
      data: {
        review: data.recommendation,
        dateTime: malaysiaTime,
      },
    });

    return res.status(200).json({ newBadReview: newBadReview });
  } catch (error) {
    console.error("Error creating bad review:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
