function renderHeader() {
    const header = document.createElement('div');
    header.className = 'container'
    header.innerHTML = `
            <div class="items">
                <div class="item">
                    <div class="content">
                        <h1>"Conéctate con las oportunidades. Bienvenido al futuro del trabajo."</h1>
                        <form action="" method="post">
                            <div class="line">
                                <label for="email">Email</label>
                                <div class="field">
                                    <input type="text" class="input" placeholder="">
                                </div>
                            </div>
                            <div class="line">
                                <label for="email">Password</label>
                                <div class="field">
                                    <input type="text" class="input" placeholder="">
                                    <span class="icon"><i class="fa-solid fa-eye"></i></span>
                                </div>
                            </div>
                            <a href="#" class="forgot">
                                Olvidaste tu contraseña?
                            </a>

                            <div class="btns">
                                <button class="btn-login">login</button>
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

