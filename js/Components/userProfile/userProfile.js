import { getApplicantById } from "../../../Service/applicantQuery.js";

export async function userProfile(data) { 
    const { userId, description, image, experiences, skills, studys } = data;

    let response = await getApplicantById(userId);
    const { name, surname, phone, linkedin, minimalDescription, email, ubication } = response.result;

    return `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <link rel="stylesheet" href="/js/Components/userProfile/userProfile.css">   
        <div class="container_user_profile">
            <div class="main_section">
                <div class="box">
                    <div class="content">
                        <div class="user-det">
                            <div class="user-img">
                                <--<img src="../../../Images/fotoPerfilNotFound.png" alt="User Image">
                                <div class="contact-info">
                                    ${name ? `<p id="nameSurname">${name} ${surname}</p>` : ''}
                                    ${minimalDescription ? `<p id="minimalDescription">${minimalDescription}</p>` : ''}
                                    ${ubication ? `<p id="ubication">${ubication.province} - ${ubication.city}</p>` : ''}
                                    ${phone ? `<p><i class="fas fa-phone"></i> ${phone}</p>` : ''}
                                    ${linkedin ? `<p><i class="fab fa-linkedin"></i> <a href="${linkedin}" target="_blank">LinkedIn</a></p>` : ''}
                                    ${email ? `<p><i class="fas fa-envelope"></i> ${email}</p>` : ''}
                                </div>
                            </div>
                            <div class="user-description">
                                <h3>About</h3>
                                <p id="about-description">${description}</p>
                            </div>
                        </div>
                        <div class="information">
                            <h3>Habilidades</h3>
                            <div class="skills-container">
                                ${skills.map(skill => `
                                    <span class="skill-tag">${skill.name}</span>
                                `).join('')}
                            </div>
                            <h3>Experiencias</h3>
                            <ul>
                                ${experiences.map(exp => `
                                    <li class="experience-details">
                                        <span>
                                            <div class="experience-company"> 
                                                ${exp.companyName} - ${exp.jobTitle} ${new Date(exp.startDate).toLocaleDateString()} - ${new Date(exp.endDate).toLocaleDateString()}
                                            </div>
                                            <span class="experience-title">
                                                ${exp.jobDescription}
                                            </span>
                                        </span>
                                    </li>
                                `).join('')}
                            </ul>
                            <h3>Estudios</h3>
                            <ul>
                                ${studys.map(study => `
                                    <li class="study-details">
                                        <span>
                                            <div class="study-type">
                                                ${study.studyType.name} - ${new Date(study.startDate).toLocaleDateString()} - ${new Date(study.endDate).toLocaleDateString()}
                                            </div>
                                            <span class="study-description">
                                                ${interpretarTexto(study.description)}
                                            </span>
                                        </span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
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