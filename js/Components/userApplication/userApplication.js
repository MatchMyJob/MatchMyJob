export const userApplication = (data) => {
    // Función para formatear la fecha en términos como "hoy", "ayer", etc.
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const today = new Date();
        const diffTime = Math.abs(today - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            return "hoy";
        } else if (diffDays === 1) {
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

    // Función para formatear la cantidad de postulaciones
    const formatApplicationQuantity = (quantity) => {
        if (quantity === 0 || quantity === null) {
            return "1 candidato postulado";
        }
        else if (quantity === 1) {
            return "1 candidato postulado";
        } else {
            return `+ ${quantity} candidatos postulados`;
        }
    };

    return `
        <link rel="stylesheet" href="/js/Components/userApplication/userApplication.css">   
        <div class="job-card" offerId="${data.offerId}">
            <h2>${data.offerTitle}</h2>
            <p>${data.company.businessName}</p>
            <div class="status">
                <span>${data.applicationStatusType}</span>
                <span>${formatDate(data.applicationDate)}</span>
                <span>${formatApplicationQuantity(data.applicationQuantity)}</span>
            </div>
        </div>
    `;
};
