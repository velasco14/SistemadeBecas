function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('contrasena').value;
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/)) {
      alert('El correo electrónico no es válido.');
      return false;
    }
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    return true;
  }
const loginForm = document.querySelector(".login-becas");
loginForm.addEventListener('submit', function(event) {
  if (!validateLoginForm()) {
    event.preventDefault();
  }
});
if (validateLoginForm()) {
    const username = document.getElementById('email').value;
    const password = document.getElementById('contrasena').value;
        window.location.href = "Usuario.html";
      } else {
        alert('Error al iniciar sesión.');
      }

  
  
