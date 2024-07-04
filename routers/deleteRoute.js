import express from "express";
import {deleteF} from "../controllers/deleteF.js";

const router = express.Router();

router.post("/delete/:id", deleteF);

export default router;
