function renderHeader() {
    const header = document.createElement('div');
    header.className = 'container'
    header.innerHTML = `
            <div class="items">
                <div class="item">
                    <div class="content">
                        <h1>"Conéctate con las oportunidades. Bienvenido al futuro del trabajo."</h1>
                        <form id="loginForm" action="" method="post">
                            <div class="line">
                                <label for="email">Email</label>
                                <div class="field">
                                    <input type="text" id="email" class="input" placeholder="Ingrese su email aquí">
                                </div>
                            </div>
                            <span id="emailError" class="error"></span>
                            <div class="line">
                                <label for="email">Password</label>
                                <div class="field">
                                    <input type="password" id="password" class="input" placeholder="Ingrese su contraseña aquí">
                                    <span class="icon" id="togglePassword"><i class="fa-solid fa-eye-slash" id="eyeIcon"></i></span>
                                </div>                                                                
                            </div>
                            <span id="passwordError" class="error"></span>
                            <a href="#" class="forgot">
                                Olvidaste tu contraseña?
                            </a>

                            <div class="btns">
                                <button type="submit" class="btn-login">login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    `;
    return header;
}
const contenedor = document.getElementById('home');
const headerLogin = renderHeader();
contenedor.appendChild(headerLogin);
