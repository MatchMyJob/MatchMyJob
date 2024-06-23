export const offer = (data) => { 
    const availabilityToTravel = data.result.availabilityToTravel ? 'sí' : 'no';
    const availabilityChangeOfResidence = data.result.availabilityChangeOfResidence ? 'sí' : 'no';
    return    `
            <link rel="stylesheet" href="/js/Components/offer/offer.css">   
            <div class="container_offer">
                <div class="main_section">
                    <div class="box">
                        <div class="content">
                            <div class="offer-job-det">
                                <div class="company-img">
                                    <img src="${data.result.company.logo}" alt="">
                                    <span>${data.result.company.businessName}</span>
                                </div>
                                <div class="ember-jobs">
                                    <div class="ember-a">
                                        <span>${data.result.title}</span>
                                    </div>
                                </div>                  
                                <div class="ember-location">
                                    <p>${data.result.ubication.province}  -  ${data.result.ubication.city} - ${timeAgo(data.result.publicationDate)}</p>
                                </div>
                            </div>
                            <div class="information">
                                <ul>
                                    <li class="job-details">
                                        <div class="icon">
                                            <i class="fa-solid fa-bag-shopping"></i>
                                        </div>
                                        <span>
                                            <span class="job-modality">
                                                ${data.result.jobOfferMode.name}
                                            </span>
                                            <span class="job-jornada">
                                                Full-Time
                                            </span>
                                        </span>
                                    </li>
                                    <li class="job-details">
                                        <div class="icon">
                                            <i class="fa-solid fa-building"></i>
                                        </div>
                                        <span>
                                            <span class="company-info">
                                                Más de ${data.result.company.workerQuantity} empleados · ${data.result.company.businessSector}
                                            </span>
                                        </span>
                                    </li>
                                    <li class="job-details">
                                        <div class="icon">
                                            <i class="fa-solid fa-list-check"></i>
                                        </div>
                                        <span>
                                            <span class="aplicant-info">
                                                Aptitudes: TRAIDAS DEL BACKEND
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                                <button id="applyOffer" offerId="${data.result.offerId}" class="btn">Aplicar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="submain_section">
                    <article class="jobs-description">
                        <div class="description-title">
                            <h2>Acerca del empleo</h2>
                            <div class="description-job">
                                ${interpretarTexto(data.result.description)}
                            </div>
                            <div class="other-requirements">
                                <h3>Otros Requerimientos</h3>
                                <span class="job-studyType">
                                    Educación mínima: ${data.result.studyType.name}
                                </span>
                                <span class="job-availabilityToTravel">
                                    Disponibilidad para viajar: ${availabilityToTravel}
                                </span>
                                <span class="job-availabilityChangeOfResidence">
                                    Disponibilidad de cambio de residencia: ${availabilityChangeOfResidence}
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>`;
}

function interpretarTexto(texto) {
    // Reemplazar el patrón "- " con "<br>"
    let textoFormateado = texto.replace(/- /g, "<br>");

    // Reemplazar saltos de línea representados por \r\n o \n con <br>
    textoFormateado = textoFormateado.replace(/(\r\n|\n)/g, "<br>");

    return textoFormateado;
}

function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = [
        { label: 'año', seconds: 31536000 },
        { label: 'mes', seconds: 2592000 },
        { label: 'semana', seconds: 604800 },
        { label: 'día', seconds: 86400 },
        { label: 'hora', seconds: 3600 },
        { label: 'minuto', seconds: 60 },
        { label: 'segundo', seconds: 1 }
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `Hace ${count} ${interval.label}${count > 1 ? 's' : ''}`;
        }
    }
    return 'Justo ahora';
}