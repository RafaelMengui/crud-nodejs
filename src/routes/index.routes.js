import { Router } from "express";
import { ping } from "../controllers/index.controller.js";

const router = Router();

//ping db
router.get("/ping", ping);

export default router;