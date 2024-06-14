function GenerarNavBuscador() {
    const barraNav = document.createElement('div');
    barraNav.classList = 'wrapper';
    barraNav.innerHTML = `
            <div class="left">
    <div class="logo">
        <img src="./Images/logo.png" alt="Logo" />
    </div>
    <div class="input">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Buscar" />
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
</div>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = GenerarNavBuscador();
contenedor.appendChild(barraNavegacion);