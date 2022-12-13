import express from "express";
import bodyParser from 'body-parser';
const router = express.Router();

import { signin, signup } from "../controllers/user.js";
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }))
router.post("/signin", signin);
router.post("/signup", signup);

export default router;