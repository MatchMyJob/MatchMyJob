import { updateApplication } from "../../Service/applicationCommand.js";

export const companyApplication = (data) => {
    // Función para formatear la fecha en términos como "hoy", "ayer", etc.
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const today = new Date();
        const diffTime = Math.abs(today - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            return "hoy";
        } else if (diffDays === 2) {
            return "ayer";
        } else if (diffDays <= 7) {
            return `hace ${diffDays} días`;
        } else if (diffDays <= 14) {
            return "hace una semana";
        } else if (diffDays <= 30) {
            const weeks = Math.floor(diffDays / 7);
            return `hace ${weeks} semanas`;
        } else if (diffDays <= 365) {
            const months = Math.floor(diffDays / 30);
            return `hace ${months} meses`;
        } else {
            const years = Math.floor(diffDays / 365);
            return `hace ${years} años`;
        }
    };

    return `
        <link rel="stylesheet" href="/js/Components/userApplication/userApplication.css">
        <div class="job-card" userId="${data.applicant.userId}" applicationId="${data.applicationId}">
            <h2>${data.applicant.name} ${data.applicant.surname}</h2>
            <p>${data.applicant.ubication.province} - ${data.applicant.ubication.city}</p>
            <div class="status">
                <span>${data.applicationStatusType}</span>
                <span>${formatDate(data.applicationDate)}</span>
                <select class=onchange="handleChange(event)">
                    <option statusId="" value="" ${data.applicationStatusType === 'en proceso' ? 'selected' : ''}>Cambiar estado</option>
                    <option statusId="3" value="en proceso">En proceso</option>
                    <option statusId="4" value="finalista">Finalizado</option>
                    <option statusId="5" value="finalizado">Finalista</option>
                </select>
            </div>
        </div>
    `;
};

window.handleChange = async function(event) {
    const newStatus = event.target.options[event.target.selectedIndex].getAttribute('statusId');
    const offerId = event.target.closest('.job-card').getAttribute('applicationId');
    const response = await updateApplication(offerId, newStatus);
    
    if (response.isSuccess) {
        console.log(`Estado actualizado a: ${newStatus} para la oferta ${offerId}`);
    } else {
        console.error(`Error actualizando el estado: ${response.statusCodeMessage.message}`);
    }
};
