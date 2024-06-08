import ApiLogin from '../Service/loginApi.js';
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let valid = true;
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        if (!email) {
            document.getElementById('emailError').textContent = 'Por favor, ingrese su email.';
            return;
        }
        if (!password) {
            document.getElementById('passwordError').textContent = 'Por favor, ingrese su contraseña.';
            return;
        }
        if (valid) {
            ApiLogin.Post(email, password)
                .then(response => {
                    if (response.ok) {
                        window.location.href = './index.html';
                    } else {
                        
                        alert("Error mail y/o contraseña incorrecta");
                    }
                })
                .catch(error => {
                    console.error('Error en la petición:', error);
                    alert("Error al intentar iniciar sesión. Por favor, inténtelo nuevamente.");
                });
        }
    });
});