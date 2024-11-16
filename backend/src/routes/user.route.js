import { Router } from "express";
import { upload } from "../middleware/multer.js";
import register from "../controller/user/register.js";
import login from "../controller/user/login.js";
let router=Router();
router.post("/create",upload.single("avatar"),register)
router.post("/login",login)
export default router;