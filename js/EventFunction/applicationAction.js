import { loaderOffer } from "../Components/loaderOffer/loaderOffer.js";
import { loaderOfferPreview } from "../Components/loaderOfferPreview/loaderOfferPreview.js";
import { offer } from "../Components/offer/offer.js";
import { pagination } from "../Components/pagination/pagination.js";
import { userApplication } from "../Components/userApplication/userApplication.js";
import { getApplicationByFilters } from "../../Service/applicationQuery.js";
import { getOfferById } from "../../Service/offerQuery.js";
import { applicationClick } from "./clickAction.js";

export async function applicationSearchByFilters() {
    let buttons = document.querySelectorAll(".filter-button");

    buttons.forEach(button => {
        button.addEventListener('click', async (e) => {
            let filterValue = e.target.value;
            await applicationSearch(filterValue, getCurrentPage(), 10); // Llamar a applicationSearch con el valor del botón y la página actual
        });
    });
}

export async function applicationSearch(statusType, pageNumber = 1, pageSize = 10) {
    let sidebar = document.getElementById("offer-previews");
    const offerInfo = document.getElementById('main_section'); 
    offerInfo.innerHTML = loaderOffer();
    sidebar.innerHTML = loaderOfferPreview();

    let applications = await getApplicationByFilters(
        statusType,
        pageNumber,
        pageSize
    );

    sidebar.innerHTML = "";
    applications.result.data.forEach((application) => {
        sidebar.innerHTML += userApplication(application);
    });

    sidebar.innerHTML += pagination();

    // Guardar la página actual en localStorage
    localStorage.setItem('currentPage', pageNumber);

    await renderPaginationControls(pageNumber, applications.result.metaData.totalPages);

    // Imprimir en la seccion derecha la primera oferta de la lista
    offerInfo.innerHTML = '';
    if(applications.result.data[0]){
        let offerDescription = await getOfferById(applications.result.data[0].offerId);
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
            await applicationSearch(getCurrentStatusType(), i, 10); // Llamar con statusType actual, página seleccionada y tamaño de página
        });

        paginationDiv.appendChild(pageButton);
    }
}

// Función para obtener el tipo de estado actual desde el filtro seleccionado
function getCurrentStatusType() {
    let buttons = document.querySelectorAll(".filter-button");
    for (let button of buttons) {
        if (button.classList.contains('active')) {
            return button.value;
        }
    }
    return null;
}

export const selectOfferByApplication = async () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    applicationClick();

    sidebar.addEventListener("click", async (e) => {
        const jobCard = e.target.closest(".job-card");
        if (jobCard) {
            applicationClick();
            const offerInfo = document.getElementById('main_section'); 
            let id = jobCard.getAttribute('offerId'); // Obtener el atributo offerId
            let offerDescription = await getOfferById(id);
            offerInfo.innerHTML = offer(offerDescription);
        }
    });
};
