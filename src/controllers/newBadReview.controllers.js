import express from "express";
import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;
  try {
    const newBadReview = await prisma.badReviews.create({
      data: {
        review: data.recommendation,
      },
    });

    return res.status(200).json({ newBadReview: newBadReview });
  } catch (error) {
    console.error("Error creating bad review:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
