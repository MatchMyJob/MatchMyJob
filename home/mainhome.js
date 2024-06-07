function GenerarMain() {
    const MainContainer = document.createElement('div');
    MainContainer.className = 'main_section';
    MainContainer.innerHTML = `<div id="close"><i class="fa-solid fa-xmark"></i></div>
                <div class="event">
                    <h3>Principales empleos que te recomendamos</h3>
                </div>
                <div class="box">
                    <div class="content">
                        <h2><a href="">TITULO TRAIDO DEL BACKEND</a></h2>
                        <p><a href="">EMPRESA TRAIDA DEL BACKEND</a> - CIUDAD TRAIDA DEL BACKEND </p>
                        <p>DESCRIPCION DEL BACKEND</p>
                    </div>                  
                <button class="btn">Learn more</button>               
            </div>`;
    return MainContainer
}
const contenedor = document.querySelector('.main-container');
const main = GenerarMain();
contenedor.appendChild(main);