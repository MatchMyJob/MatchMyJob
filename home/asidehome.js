import ApplicantApi from "../Service/ApplicantApi.js";
import ResumeApi from "../Service/ResumeApi.js";

async function GenerarAsideInicial(applicante, Studys) {
    const asidecontainer = document.createElement('div');
    asidecontainer.className = 'aside-div-container';
    const responsecv = await ResumeApi.GetResume();
    const resume = responsecv;
    console.log(resume);
    const newaside = document.createElement('div');
    newaside.className = 'sidebar';
    newaside.innerHTML = `
        <img src="${resume.image}" alt="" />
  
        <div class="profile">
            <a href="./resume.html">${applicante.name} ${applicante.surname}</a>
            <small>
                Descripcion: ${applicante.minimalDescription}
                <br>
                Mail: ${applicante.email}
                <br>
                Linkedin: ${applicante.linkedin}
                <br>
                Fecha de Nacimiento: ${applicante.birthDate}
            </small>
            <hr id="profile">
        </div>
        <div class="view">
               ${Studys.map(study => `
                <div class="views">
                    <h6>${study.studyTypeName}</h6>
                    <h6>Inicio:${study.startDate} - Fin: ${study.endDate}</h6>
                </div>
            `).join('')}
            <hr id="view">
        </div>
        <div class="items">        
            <i class="fa-solid fa-bookmark"></i>
            <a href="resume.html" style="text-decoration: none; color: white;"><h6>MI CV</h6></a>
        </div>`;
    asidecontainer.appendChild(newaside);

    return asidecontainer;
}

async function GenerarEstudiosRecientes(Studys) {
    const asidestudy = document.createElement('div');
    asidestudy.className = 'recent_jobs';
    asidestudy.innerHTML = `<div class="recent">
                            <h6>Estudios recientes</h6>
                            ${Studys.map(study => `
                                <div class="one">
                                    <i class="fa-solid fa-book"></i>
                                    <h6>${study.studyTypeName}</h6>
                                </div>
                            `).join('')}
                            </div>`;
    return asidestudy;
}

async function GenerarAside() {
    const response = await ApplicantApi.Getme();
    const applicante = response.result;
    const responsecv = await ResumeApi.GetResume();
    const resume = responsecv;
    
    let Studys = resume.studys.map(study => ({
        studyId: study.studyId,
        studyTypeId: study.studyType.studyTypeId,
        studyTypeName: study.studyType.name,
        description: study.description,
        startDate: formatDate(study.startDate),
        endDate: formatDate(study.endDate)
    }));

    const contenedor = document.querySelector('.aside-container');
    const recentJobsSection = contenedor.querySelector('.recent_jobs');
    if (recentJobsSection) {
        recentJobsSection.remove();
    }
    if (!contenedor.querySelector('.aside-div-container')) {
        const Aside = await GenerarAsideInicial(applicante,Studys);
        contenedor.appendChild(Aside);
    }
    const EstudiosRecientes = await GenerarEstudiosRecientes(Studys);
    contenedor.appendChild(EstudiosRecientes);
}

document.addEventListener('DOMContentLoaded', async () => {
    await GenerarAside();
});

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}