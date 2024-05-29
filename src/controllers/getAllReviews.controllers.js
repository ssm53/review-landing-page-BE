import express from "express";
import { Prisma } from "@prisma/client";
import prisma from "../utils/prisma.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allReviews = await prisma.badReviews.findMany();

  return res.json({ allReviews });
});

export default router;
