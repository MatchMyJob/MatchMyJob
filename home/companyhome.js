function GenerarMain() {
    const MainRightContainer= document.createElement('div');
    MainRightContainer.className = 'MainRight-Container';
    const MainRight= document.createElement('div');
    MainRight.className = 'news';
    MainRight.innerHTML = `<h4>Compañias</h4>
                            <i class="fa-solid fa-circle-info"></i>`;
    const MainRightCompany = document.createElement('div');
    MainRightCompany.className = "latest_news";
    MainRightCompany.innerHTML = `<div class="one">
                                    <i class="fa-solid fa-circle"></i>
                                    <h5>EMPRESA TRAIDA DEL BACKEND</h5>
                                </div>`;
    MainRightContainer.appendChild(MainRight);
    MainRightContainer.appendChild(MainRightCompany);
    return MainRightContainer
}
const contenedor = document.querySelector('.right_side');
const main = GenerarMain();
contenedor.appendChild(main);