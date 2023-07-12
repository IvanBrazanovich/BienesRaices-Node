import Usuario from "../models/Usuario.js";

const loginForm = (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar Sesión",
  });
};
const registerForm = (req, res) => {
  res.render("auth/register", {
    pagina: "Crear Cuenta",
  });
};

const register = async (req, res) => {
  const usuario = await Usuario.create(req.body);

  res.json(usuario);
};

const olvidePassword = (req, res) => {
  res.render("auth/olvidePassword", {
    pagina: "Recupera tu cuenta de Bienes Raíces",
  });
};

export { loginForm, registerForm, olvidePassword, register };
