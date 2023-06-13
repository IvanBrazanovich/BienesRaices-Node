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

const olvidePassword = (req, res) => {
  res.render("auth/olvidePassword", {
    pagina: "Recupera tu cuenta de Bienes Raíces",
  });
};

export { loginForm, registerForm, olvidePassword };
