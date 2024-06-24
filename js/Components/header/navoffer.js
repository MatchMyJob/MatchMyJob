export function header() {
    const barraNav = document.createElement('div');
    barraNav.classList = 'wrapper';
    barraNav.innerHTML = `
    <link rel="stylesheet" href="/js/Components/header/navoffer.css">   

            <div class="left">
    <div class="logo">
        <img src="../Images/logo.png" alt="Logo" />
    </div>
    <div class="input">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input id="searchOffer" type="search" placeholder="Buscar" />
    </div>
</div>
<div class="right">
    <div class="jobs">
        <a href="offert.html">
            <i class="fa-solid fa-suitcase"></i>
            <h6>Empleos</h6>
        </a>
    </div>
    <div class="home">
        <a href="index.html">
            <i class="fa-solid fa-house"></i>
            <h6>Inicio</h6>
        </a>
    </div>
    <div class="me">
        <a href="resume.html">
            <i class="fa-solid fa-user"></i>
            <div class="down">
                <h6>Yo</h6>
            </div>
        </a>
    </div>
    <div class="work">
        <a href="negocio.html">
            <i class="fa-solid fa-braille"></i>
            <div class="down">
                <h6>Negocios</h6>
            </div>
        </a>
    </div>
    <div class="logout">
                <button id="logoutButton">
                    <i class="fa-solid fa-sign-out-alt"></i>
                    <h6>Salir</h6>
                </button>
    </div>
</div>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = header();
contenedor.appendChild(barraNavegacion);
document.getElementById('logoutButton').addEventListener('click', function() {
    deleteAllCookies();
    window.location.href = 'login.html';
});
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}