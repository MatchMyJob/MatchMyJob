function renderHeader() {
    const header = document.createElement('div');
    header.className = 'container'
    header.innerHTML = `
            <div class="container-register">
             <div class="form-content">
                <h1 id="title">Registro</h1>
                 <form id="registerForm">
                    <div class="input-group">
                        <div class="input-field" id="nameInput">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" id="rol" placeholder="ROL">
                            <span id="rolError" class="error"></span>
                        </div>
                    <div class="input-field">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="text" id="email" placeholder="Email">
                            <span id="emailError" class="error"></span>
                    </div>
                    <div class="input-field">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" id="password" placeholder="Contraseña">
                            <span class="icon" id="togglePassword"><i class="fa-solid fa-eye-slash" id="eyeIcon"></i></span>
                            <span id="passwordError" class="error"></span>
                    </div>
                    
                    
                    
                <div class="btn-field">
                    <button id="signUp" type="submit">Registrar</button>
                    <button id="signIn" type="submit" class="disable">Iniciar Sesión</button>
                </div>
            </div>
        </form>
    </div>
</div>
    `;
    return header;
}
const contenedor = document.getElementById('home');
const headerLogin = renderHeader();
contenedor.appendChild(headerLogin);
