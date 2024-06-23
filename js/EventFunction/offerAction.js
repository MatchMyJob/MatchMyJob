import { offerPreview } from "../Components/offerPreview/offerPreview.js";
import { offer } from "../Components/offer/offer.js";
import { getOfferByFilters, getOfferById } from "../Service/offerQuery.js";
import { offerClick } from "./clickAction.js";
import { loaderOfferPreview } from "../Components/loaderOfferPreview/loaderOfferPreview.js";
import { pagination } from "../Components/pagination/pagination.js";
import { loaderOffer } from "../Components/loaderOffer/loaderOffer.js";
import { registerApplication } from "../Service/applicationCommand.js";



export async function offerSearchWithFilters() {
    let buttons = document.querySelectorAll(".apply-button");
    let searchInput = document.querySelector('#searchOffer');

    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            await offerSearch(getCurrentPage(), 10); // Usar la página actual guardada
        });
    });

    // Añadir evento de escucha para la tecla Enter en el campo de búsqueda
    searchInput.addEventListener('keypress', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar la acción por defecto del Enter
            await offerSearch(1, 10); // Buscar desde la primera página
        }
    });
}


export async function offerSearch(pageNumber = 1, pageSize = 10) {
    let title = document.querySelector('#searchOffer').value;
    let companies = JSON.parse(localStorage.getItem("selectedCompanies")) || [];
    let jobOfferMode = localStorage.getItem("selectedMode");
    let jobOfferType = null;
    let provinces = JSON.parse(localStorage.getItem("selectedProvinces")) || [];
    let studyType = null;
    let categories = JSON.parse(localStorage.getItem("selectedCategories")) || [];
    let skills = null;
    let availabilityToTravel = null;
    let availabilityChangeOfResidence = null;
    let from = getDate();
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
            await offerSearch(i, 10); // Cargar la página seleccionada
        });

        paginationDiv.appendChild(pageButton);
    }
}


export const selectByOffer = async () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    offerClick();

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
        }
    });
}



export async function applyToOffer() {
    let offer = document.getElementById("main_section");

    offer.addEventListener('click', async e => {
        if(e.target.matches("#applyOffer")){
            let offerId = e.target.getAttribute("offerId");
            await registerApplication(offerId);
        }
    });
}



function getDate() {
    let from = null;
    let selectedDate = localStorage.getItem('selectedDate');

    if (selectedDate === "1") {
        // Para hoy
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        let yyyy = today.getFullYear();

        from = `${yyyy}-${mm}-${dd}`;
    } else if (selectedDate === "2") {
        // Para la semana
        let weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        let dd = String(weekAgo.getDate()).padStart(2, '0');
        let mm = String(weekAgo.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        let yyyy = weekAgo.getFullYear();

        from = `${yyyy}-${mm}-${dd}`;
    } else if (selectedDate === "3") {
        // Para el mes
        let monthAgo = new Date();
        monthAgo.setDate(monthAgo.getDate() - 60);

        let dd = String(monthAgo.getDate()).padStart(2, '0');
        let mm = String(monthAgo.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        let yyyy = monthAgo.getFullYear();

        from = `${yyyy}-${mm}-${dd}`;
    }
    return from;
}