import OffertApi from "../Service/OffertApi.js";
import ResumeApi from "../Service/ResumeApi.js";

const matchSkills = (offerSkills, applicantSkills) => {
    return offerSkills.some(skill => applicantSkills.includes(skill));
};

async function GenerarMain() {
    try {
        const resume = await ResumeApi.GetResume();
        const applicantSkills = resume.skills.map(skill => skill.skillId);
        const response = await OffertApi.GetFilter(null, null, null, null, null, null, null, applicantSkills, null, null, null, null, 0, 3);
        const matchingOffers = Array.isArray(response.result.data) ? response.result.data : [];
        
        const MainContainer = document.createElement('div');
        MainContainer.className = 'main_section';

        if (matchingOffers.length === 0) {
            console.log("No hay ofertas que coincidan con las habilidades del aplicante.");
            return MainContainer;
        }

        matchingOffers.forEach(offer => {
            const maxDescriptionLength = 390;
            let shortDescription = offer.title.slice(0, maxDescriptionLength);
            if (offer.title.length > maxDescriptionLength) {
                shortDescription += '...';
            }

            const offerContainer = document.createElement('div');
            offerContainer.className = 'box';
            offerContainer.innerHTML = `
                <div class="content fbox-container" data-offer-id="${offer.offerId}">
                    <img src="${offer.company.logo}" alt="${offer.company.businessName} logo" class="company-logo">
                    <div class="text-content">
                        <h2><a href="">${offer.title}</a></h2>
                        <p><a href="">${offer.company.businessName}</a> - ${offer.ubication.province}</p>
                        <p>${shortDescription}</p>
                    </div>
                </div>
                <button class="btn"  data-offer-id="${offer.offerId}">Learn more</button>
            `;
            MainContainer.appendChild(offerContainer);
            const learnMoreButton = offerContainer.querySelector('.btn');
            learnMoreButton.addEventListener('click', () => {
                navigateToOfferPage(offer.offerId);
            });
        });

        return MainContainer;
    } catch (error) {
        console.error('Error al generar main:', error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const contenedor = document.querySelector('.main-container');
    const main = await GenerarMain();
    if (main) {
        contenedor.appendChild(main);
    }
});
function navigateToOfferPage() {
    window.location.href = `/offert.html`;
}