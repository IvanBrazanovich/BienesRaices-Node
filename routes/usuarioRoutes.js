import express from "express";
import {
  loginForm,
  olvidePassword,
  registerForm,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "hola" });
});

router.get("/login", loginForm);
router.get("/register", registerForm);
router.get("/olvide-password", olvidePassword);

export default router;
