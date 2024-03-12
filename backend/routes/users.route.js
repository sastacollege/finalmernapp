import { Router } from "express";
const router = Router();

//CONTROLLERS
import { registerController, loginUser } from "./../controllers/register.controllers.js";

//USER ROUTES
router.route("/register").post(registerController);
router.route("/login").post(loginUser);

//EXPORT
export { router };
