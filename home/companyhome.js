import CompanyApi from "../Service/CompanyApi.js";
async function GenerarMain() {
    const response = await CompanyApi.GetCompany();
    const Company = response.result.data;
    const MainRightContainer = document.createElement('div');
    MainRightContainer.className = 'MainRight-Container';
    const MainRight = document.createElement('div');
    MainRight.className = 'news';
    MainRight.innerHTML = `<h4>Compañias</h4>
                            <i class="fa-solid fa-circle-info"></i>`;

    MainRightContainer.appendChild(MainRight);
    Company.forEach(comp => {
        const MainRightCompany = document.createElement('div');
        MainRightCompany.className = "latest_news";
        MainRightCompany.innerHTML = `<div class="one">
                                    <i class="fa-solid fa-circle"></i>
                                    <h5>${comp.businessName}</h5>
                                </div>`;
        MainRightContainer.appendChild(MainRightCompany);
    });
    return MainRightContainer
}
document.addEventListener('DOMContentLoaded', async () => {
    const contenedor = document.querySelector('.right_side');
    const main = await GenerarMain();
    contenedor.appendChild(main);
});