import express from "express";
import update from "../controllers/update.js";

const router = express.Router();

router.post("/update/:id", update);

export default router;