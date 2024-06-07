function renderNav() {
    const nav = document.createElement('div');
    nav.className = 'container'
    nav.innerHTML = `
            <div class="logo-site">
                <a href="#" class="logo-link"><img src="./images/logo.png" alt=""></a>
            </div>
            <div class="navigation">
                <a href="#" class="btn-register">Crear cuenta</a>
                <a href="#" class="btn-login">Ya tengo cuenta</a>
            </div>
    `;
    return nav;
}
const contenedor = document.querySelector('.navbar');
const navLogin = renderNav();
contenedor.appendChild(navLogin);
