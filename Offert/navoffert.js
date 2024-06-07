function GenerarNavBuscador() {
    const barraNav = document.createElement('div');
    barraNav.classList ='wrapper';
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
                    <a href="offert.html"><i class="fa-solid fa-suitcase"></i></a>
                    <h6>Postulaciones</h6>
                </div>
                <div class="home">
                    <i class="fa-solid fa-house"></i>
                    <h6>Inicio</h6>
                </div>
                <div class="me">
                    <i class="fa-solid fa-user"></i>
                    <div class="down">
                        <h6>Yo</h6>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="work">
                    <i class="fa-solid fa-braille"></i>
                    <div class="down">
                        <h6>Para negocios</h6>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = GenerarNavBuscador();
contenedor.appendChild(barraNavegacion);