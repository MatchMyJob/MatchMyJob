function renderNav() {
    const nav = document.createElement('div');
    nav.className = 'container'
    nav.innerHTML = `
            <div class="logo-site">
                <a href="#" class="logo-link"><img src="./images/logo.png" alt=""></a>
            </div>
    `;
    return nav;
}
const contenedor = document.querySelector('.navbar');
const navLogin = renderNav();
contenedor.appendChild(navLogin);
