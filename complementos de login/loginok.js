import ApiLogin from '../Service/loginApi.js';

document.addEventListener('DOMContentLoaded', function () {
    let signUp = document.getElementById("signUp");
    let signIn = document.getElementById("signIn");
    let nameInput = document.getElementById("nameInput");
    let title = document.getElementById("title");
    let isSignUpMode = false;

    signIn.onclick = function () {
        nameInput.style.maxHeight = "0";
        title.innerHTML = "Iniciar Sesión";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");
        isSignUpMode = false;
        resetErrors();
    };

    signUp.onclick = function () {
        nameInput.style.maxHeight = "60px";
        title.innerHTML = "Registrar";
        signUp.classList.remove("disable");
        signIn.classList.add("disable");
        isSignUpMode = true;
        resetErrors();
    };

    document.getElementById('registerForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rol = isSignUpMode ? document.getElementById('rol').value : '';

        resetErrors();

        let valid = true;

        if (!email) {
            document.getElementById('emailError').textContent = 'Por favor, ingrese su email.';
            valid = false;
        }
        if (!password) {
            document.getElementById('passwordError').textContent = 'Por favor, ingrese su contraseña.';
            valid = false;
        }

        if (isSignUpMode && !rol) {
            document.getElementById('rolError').textContent = 'Por favor, ingrese su rol.';
            valid = false;
        }

        if (valid) {
            if (isSignUpMode) {
                ApiLogin.Register(email, password, rol)
                    .then(response => {
                        if (response && response.metadata.status === 200) {
                            alert("Registro Exitoso!");
                        } else if (response && response.metadata.status === 400) {
                            alert("Error: Solicitud incorrecta. Por favor revise los datos ingresados.");
                        } else if (response && response.metadata.status === 409) {
                            alert("Error: El usuario ya existe. Intente con otra dirección de correo electrónico.");
                        } else if (response && response.metadata.status === 500) {
                            alert("Error interno en el servidor. Por favor, inténtelo nuevamente más tarde.");
                        } else {
                            alert("Error desconocido al intentar registrar. Por favor, inténtelo nuevamente.");
                        }
                    })
                    .catch(error => {
                        console.error('Error en la petición:', error);
                        alert("Error al intentar registrar. Por favor, inténtelo nuevamente.");
                    });
            } else {
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
        }
    });

    function resetErrors() {
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('rolError').textContent = ''; 
    }
});