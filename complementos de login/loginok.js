import ApiLogin from '../Service/loginApi.js';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        
        let valid = true;

        if (!email) {
            document.getElementById('emailError').textContent = 'Por favor, ingrese su email.';
            valid = false;
        }
        if (!password) {
            document.getElementById('passwordError').textContent = 'Por favor, ingrese su contraseña.';
            valid = false;
        }
        
        if (valid) {
            ApiLogin.Post(email, password)
                .then(response => {            
                    if (response && response.status === 'OK') {
                        window.location.href = './index.html';
                    } else {
                        alert("Error: correo y/o contraseña incorrecta");
                    }
                })
                .catch(error => {
                    console.error('Error en la petición:', error);
                    alert("Error al intentar iniciar sesión. Por favor, inténtelo nuevamente.");
                });
        }
    });
});
