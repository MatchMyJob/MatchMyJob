export function footer() {
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';
    const footer = document.createElement('div');
    footer.className = 'fbox-container';
    footer.innerHTML = ` 
    <link rel="stylesheet" href="/js/Components/footer/footer.css">   
        <div class="fbox">
            <h3>General</h3><br>
            <ul>
                <li><a href="#">Acerca de</a><br></li>
                <li><a href="#">Empleos</a><br></li>
                <li><a href="#">Preguntas frecuentes</a><br></li>
            </ul>
        </div>
        <div class="fbox">
            <h3>Navegar por MatchMyJob</h3><br>
            <ul>
                <li><a href="#">Cuenta</a><br></li>
                <li><a href="#">Servicios</a><br></li>
                <li><a href="#">Inicio</a><br></li>
            </ul>
        </div>
        <div class="fbox">
            <h3>Ayuda y Contacto</h3><br>
            <ul>
                <li><a href="#" target="_blank">Contactanos</a><br></li>
                <li><a href="#">Guía</a></li>
            </ul>                
        </div>
    `;
    const footerCredit = document.createElement('div');
    footerCredit.className = 'credit';
    footerCredit.innerHTML = `<p>&copy; 2024 CODECRAFT. Todos los derechos reservados.</p>`;
    footerContainer.appendChild(footer);
    footerContainer.appendChild(footerCredit);
    return footerContainer;
}
const contenedor = document.querySelector('.footer');
const footerLogin = footer();
contenedor.appendChild(footerLogin);
