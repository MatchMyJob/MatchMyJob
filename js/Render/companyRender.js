import CompanyApi from "../../Service/CompanyApi.js";
import ApplicantApi from "../../Service/ApplicantApi.js";
import { getOfferByFilters } from "../../Service/offerQuery.js"
import OffertApi from "../../Service/OffertApi.js";
async function renderCompany() {
    const response = await CompanyApi.GetMeCompany();
    const authToken = sessionStorage.getItem("authToken");
    const company = response.result;
    const companyId = sessionStorage.setItem("CompanyId", company.companyId);
    const defaultImage = 'https://media.istockphoto.com/id/1333528095/es/foto/fondo-de-textura-de-papel-negro-desgastado.jpg?s=1024x1024&w=is&k=20&c=ke8RsLCXe0rC4_Ii5y3AqBgz_onY3Kn67JOZ6LhMuYA=';

    if (company && company.frontPage) {
        document.body.style.backgroundImage = `url(${company.frontPage})`;
    } else {
        document.body.style.backgroundImage = `url(${defaultImage})`;
    }    
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    const offers = await getOfferByFilters(null, [company.companyId], null, null, null, null, null, null, null, null, null, null, null, 3);
    const offerts = offers.result.data;
    console.log(offerts);
    let applicantes = [];
    try {
        const applicantresponse = await ApplicantApi.GetApplicantes();
        if (applicantresponse && applicantresponse.result && applicantresponse.result.data) {
            applicantresponse.result.data.forEach(applicante => {
                applicantes.push({
                    name: applicante.name,
                    surname: applicante.surname,
                    minimalDescription: applicante.minimalDescription
                });
            });
        }
    } catch (error) {
        console.error('Error fetching applicants:', error);
    }
    const article = document.createElement('article');
    article.className = 'formulario_cv';
    article.innerHTML = `
        <div class="main-contentc">
            <div class="boxxc">
                <div class="form_fields form_header">
                    <div class="photo_user">
                        <img src="${company.logo}" alt="${company.businessName}" class="user-photo"/>
                    </div>
                    <div class="info_user">
                        <div class="user-info">
                            <p class="user-name">${company.businessName}</p>
                            <p class="user-region">${company.ubication.city}</p>
                        </div>
                        <ul class="user-contact">
                            <li class="cols">
                                <span class="user-mail-icon"><i class="fa-regular fa-envelope"></i><span
                                        class="user-mail">${company.website}</span></span>
                            </li>
                            <li class="cols">
                                <span class="user-phone-icon"><i class="fa-solid fa-phone"></i><span
                                        class="user-phone"> ${company.phone}</span></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="user-form">
                    <div class="dFlex">
                        <p class="title_cv">${company.businessName}</p>
                    </div>
                    <p>${company.description}</p>
                    <br>
                    <div class="lamparita-icon"><i class="fa-regular fa-lightbulb"></i>
                        Una descripción bien detallada y extensa de tu perfil te ayudará a destacar
                        entre otras compañias.
                    </div>
                </div>
                <div class="user-formc">
                    <p class="title_cv">MIS OFERTAS</p>
                    <ul id="experiences-container" class="list_timeline">
                    ${offerts.map(offer => `
                        <li>
                           <div class="w100 dFlexc">
                                <div class="infoc">
                                    <div class="image-container">
                                        <img src="${company.logo}" alt="${company.businessName}" class="user-photoc"/>
                                    </div>
                                    <div class="text-containerc">
                                        <p class="fc80c">${offer.title}</p>
                                        <p><span>${offer.jobOfferMode.name}</span></p>
                                        <p><span>${offer.ubication.province}</span></p>
                                    </div>
                                </div>
                                 <div class="actions">
                                        <a class="offert-edit" data-offert-id="${offer.offerId}">
                                            <span class="lapiz-icon"><i class="fa-solid fa-pencil"></i></span>
                                        </a>
                                        <a class="offert-delete" data-offert-id="${offer.offerId}">
                                            <span class="deleteO-icon"><i class="fa-solid fa-trash"></i></span>
                                        </a>
                                    </div>
                            </div>
                        </li>
                        `).join('')}
                        <li id="add-experience-container">
                            <div class="w100 dFlex">
                                <button id="add-Offert"class="btnc">AÑADIR MÁS OFERTAS</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="applicants-box">
                <p class="title_cv">Postulantes</p>
                <ul class="applicants-list">
                    ${applicantes.map(applicante => `
                        <li>
                            <p class="name-color">${applicante.name} ${applicante.surname}</p>
                            <p>${applicante.minimalDescription}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    return article;
}
document.addEventListener('DOMContentLoaded', async () => {
    const contenedor = document.querySelector('.container-company');
    const company = await renderCompany();
    contenedor.appendChild(company);
    const reloadPage = () => {
        location.reload();
    };
    const editButtons = document.querySelectorAll(".offert-edit");
    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = document.getElementById("OfertModalm");
            const offertid = this.getAttribute('data-offert-id');
            sessionStorage.setItem('selectoffert', offertid);
            modal.style.display = "block";

        });
    });
    const addOffert = document.getElementById("add-Offert");
    if (addOffert) {
        addOffert.addEventListener('click', function () {
            const modal = document.getElementById("OfertModal");
            modal.style.display = "block";
        });
    }
    const deleteExpIcons = document.querySelectorAll('.deleteO-icon');
    const confirmationModal = document.getElementById('confirmationModalO');
    const confirmDeleteButton = document.getElementById('confirmDeleteO');
    const cancelDeleteButton = document.getElementById('cancelDeleteO');
    deleteExpIcons.forEach(deleteIcon => {
        deleteIcon.addEventListener('click', (event) => {
            const offertid = event.currentTarget.parentElement.getAttribute('data-offert-id');
            confirmationModal.style.display = 'block';
            confirmDeleteButton.addEventListener('click', async () => {
                try {
                    const response = await OffertApi.DeleteOffert(offertid);
                    if (response.success) {
                        const listItem = event.currentTarget.closest('.li-color');
                        if (listItem) {
                            listItem.remove();

                        } else {
                            console.error('No se encontró el elemento para eliminar visualmente.');
                        }
                    }
                    else {
                        reloadPage();
                    }
                } catch (error) {
                    console.error('Error en la solicitud DELETE:', error);
                } finally {
                    confirmationModal.style.display = 'none';
                }
            });
            cancelDeleteButton.addEventListener('click', () => {
                confirmationModal.style.display = 'none';
            });
        });
    });

});