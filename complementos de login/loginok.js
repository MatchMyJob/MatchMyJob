import ApiLogin from "../Service/loginApi.js";
document.addEventListener('DOMContentLoaded', function () {
    let signUp = document.getElementById("signUp");
    let signIn = document.getElementById("signIn");
    let nameInput = document.getElementById("nameInput");
    let title = document.getElementById("title");
    let isSignUpMode = false;
    let email, password, rol;
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

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            email = document.getElementById('email').value;
            password = document.getElementById('password').value;
            rol = isSignUpMode ? document.getElementById('rol').value : '';

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
                document.getElementById('rolError').textContent = 'Por favor, seleccione un rol.';
                valid = false;
            }

            if (valid) {
                try {
                    if (isSignUpMode) {
                        const registerResponse = await ApiLogin.Register(email, password, rol);
                        const loginResponse = await ApiLogin.Post(email, password);
                        if (loginResponse && loginResponse.status === 'OK' && loginResponse.result && loginResponse.result.token) {
                            sessionStorage.setItem("authToken", loginResponse.result.token);
                            if (rol === '05cd6e7f-9fdc-44a4-9fdc-60317f1872d9') {
                                window.location.href = './completarregistrocompany.html'; 
                            } else if (rol === '2abce592-b6aa-42c0-b20a-b0f97ce9e2eb') {
                                window.location.href = './completeregister.html';
                            } else {
                                throw new Error('Rol desconocido.');
                            }
                        } else {
                            throw new Error('Error en el inicio de sesión después del registro.');
                        }
                    } else {
                        const loginResponse = await ApiLogin.Post(email, password);
                        console.log('Respuesta de inicio de sesión:', loginResponse);
                        if (loginResponse && loginResponse.status === 'OK' && loginResponse.result && loginResponse.result.token) {
                            sessionStorage.setItem("authToken", loginResponse.result.token);
                            window.location.href = './index.html'; 
                        } else {
                            throw new Error('Error en el inicio de sesión.');
                        }
                    }
                } catch (error) {
                    console.error('Error en el registro o inicio de sesión:', error);
                    alert("Error en el registro o inicio de sesión. Por favor, inténtelo nuevamente.");
                }
            }
        });
    }
    function resetErrors() {
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('rolError').textContent = '';
    }
});