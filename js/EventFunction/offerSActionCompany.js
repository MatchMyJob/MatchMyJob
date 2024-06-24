import { offerPreview } from "../Components/offerPreview/offerPreview.js";
import { offer } from "../Components/offer/offer.js";
import { getOfferByFilters, getOfferById } from "../../Service/offerQuery.js";
import { loaderOfferPreview } from "../Components/loaderOfferPreview/loaderOfferPreview.js";
import { pagination } from "../Components/pagination/pagination.js";
import { loaderOffer } from "../Components/loaderOffer/loaderOffer.js";
import { offerClick } from "./clickAction.js";



export async function offerSearchWithFilters() {
    let buttons = document.querySelectorAll(".apply-button");
    let searchInput = document.querySelector('#searchOffer');

    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            await offerSearchByCompany(getCurrentPage(), 10); // Usar la página actual guardada
        });
    });
}


export async function offerSearchByCompany(pageNumber = 1, pageSize = 10) {
    let companyId = sessionStorage.getItem("CompanyId");
    let title = null
    let companies = [companyId];
    let jobOfferMode = null;
    let jobOfferType = null;
    let provinces = null;
    let studyType = null;
    let categories = null;
    let skills = null;
    let availabilityToTravel = null;
    let availabilityChangeOfResidence = null;
    let from = null;
    let to = null;

    let sidebar = document.getElementById("offer-previews");
    const offerInfo = document.getElementById('main_section'); 
    offerInfo.innerHTML = loaderOffer();
    sidebar.innerHTML = loaderOfferPreview();

    let offers = await getOfferByFilters(
        title, 
        companies, 
        jobOfferMode, 
        jobOfferType, 
        provinces, 
        studyType, 
        categories, 
        skills, 
        availabilityToTravel, 
        availabilityChangeOfResidence, 
        from, 
        to, 
        pageNumber, 
        pageSize
    );

    sidebar.innerHTML = "";
    offers.result.data.forEach((offer) => {
        sidebar.innerHTML += offerPreview(offer);
    });

    sidebar.innerHTML += pagination();

    // Guardar la página actual en localStorage
    localStorage.setItem('currentPage', pageNumber);

    await renderPaginationControls(pageNumber, offers.result.metaData.totalPages);

    // Imprimir en la seccion derecha la primera oferta de la lista
    offerInfo.innerHTML = '';
    if(offers.result.data[0]){
        let offerDescription = await getOfferById(offers.result.data[0].offerId);
        offerInfo.innerHTML = offer(offerDescription);
    }    
    
}

function getCurrentPage() {
    return parseInt(localStorage.getItem('currentPage')) || 1;
}


async function renderPaginationControls(currentPage, totalPages) {
    const paginationDiv = document.getElementById('pagination');

    // Vaciar el contenido anterior
    paginationDiv.innerHTML = '';

    // Crear botones de paginación
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'page-button';
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', async () => {
            await offerSearchByCompany(i, 10); // Cargar la página seleccionada
        });

        paginationDiv.appendChild(pageButton);
    }
}

export const selectByCompanyOffer = async () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    offerClick();
    let button = document.getElementById("applyOffer");
    button.textContent = "Ver Postulaciones";
    
    sidebar.addEventListener("click", async (e) => {
        if (
            e.target.closest(".ember-view") ||  
            e.target.closest(".ember-img") ||   
            e.target.closest(".job-title") || 
            e.target.closest(".ember-span") ||  
            e.target.closest(".ember-p")        
        ) {
            offerClick();
            const offerInfo = document.getElementById('main_section'); 
            let id = e.target.closest(".ember-view").id;
            let offerDescription = await getOfferById(id);
            offerInfo.innerHTML = offer(offerDescription);

            let button = document.getElementById("applyOffer");
            button.textContent = "Ver Postulaciones";
        }
    });
}

export async function seeApplicationOffer() {
    let offer = document.getElementById("main_section");

    offer.addEventListener('click', async e => {
        if(e.target.matches("#applyOffer")){
            let offerId = e.target.getAttribute("offerId");
            sessionStorage.setItem("offerId", offerId);
            window.location.href = './applicationCompany.html';
        }
    });
}