import express from "express";
import { signup, login } from "../controller/user.controller.js";
import router from "./book.route.js";
const route=express.Router();

router.post("/signup",signup);
router.post("/login",login);


export default router;