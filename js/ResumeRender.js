import ResumeApi from "../Service/ResumeApi.js";
import ApplicantApi from "../Service/ApplicantApi.js";
import {getApplicationByFilters } from "../Service/applicationQuery.js"
import { fetchSkills } from "../js/addskill.js"
async function renderResume() {
    const article = document.createElement('article');
    const response = await ApplicantApi.Getme();
    const applicante = response.result;
    const responsecv = await ResumeApi.GetResume();
    const resume = responsecv;
    const applicationsResponse = await getApplicationByFilters(null, null, 5);
    const applications = applicationsResponse.result.data;

    let Experiences = [];
    let Skills = [];
    let Studys = [];
    resume.experiences.forEach(experience => {
        Experiences.push({
            experienceId: experience.experienceId,
            companyName: experience.companyName,
            jobTitle: experience.jobTitle,
            jobDescription: experience.jobDescription,
            startDate: formatDate(experience.startDate),
            endDate: formatDate(experience.endDate)
        });
    });
    resume.skills.forEach(skill => {
        Skills.push({
            skillId: skill.skillId,
            name: skill.name
        });
    });

    resume.studys.forEach(study => {
        Studys.push({
            studyId: study.studyId,
            studyTypeId: study.studyType.studyTypeId,
            studyTypeName: study.studyType.name,
            description: study.description,
            startDate: formatDate(study.startDate),
            endDate: formatDate(study.endDate)
        });
    });
    const applicationsList = applications.map(application => `
        <li>
            <div class="postulaciones">
                <p class="fs20-">${application.offerTitle}</p>
                <span class="post-estado">${application.applicationStatusType}</span>
            </div>
        </li>
    `).join('')
    ;
        
    article.className = 'formulario_cv'
    article.innerHTML = `
            <div class="main-content">
                <div class="boxx">
                    <div class="form_fields form_header">
                        <div class="photo_user">
                            <img src="${resume.image}" alt="${applicante.name}" class="user-photo"/>
                        </div>
                        <div class="info_user">
                            <div class="user-info">
                                <p class="user-name">${applicante.name}  ${applicante.surname}</p>
                                <p class="user-region">${applicante.ubication.city}</p>
                            </div>
                            <ul class="user-contact">
                                <li class="cols">
                                    <span class="user-mail-icon"><i class="fa-regular fa-envelope"></i><span
                                            class="user-mail"> ${applicante.email} </span></span>
                                </li>
                                <li class="cols">
                                    <span class="user-phone-icon"><i class="fa-solid fa-phone"></i><span
                                            class="user-phone"> ${applicante.phone} </span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="user-form">
                        <div class="dFlex">
                            <p class="title_cv">Descripción</p>
                            <!--<a class="lapiz-icon"><i class="fa-solid fa-pencil"></i></a>-->
                        </div>
                        <p>${resume.description}</p>
                        <br>
                        <div class="lamparita-icon"><i class="fa-regular fa-lightbulb"></i>
                            Una descripción bien detallada y extensa de tu perfil profesional te ayudará a destacar
                            entre otros
                            candidatos.
                        </div>
                    </div>
                    <div class="user-form">
                    <p class="title_cv">Mis experiencias profesionales</p>
                    <ul id="experiences-container" class="list_timeline">
                        ${Experiences.map(experience => `
                            <li>
                                <div class="w100 dFlex">
                                    <div class="info">
                                        <p class="fc80">Nombre de la Empresa: ${experience.companyName}</p>
                                        <p><span>Puesto: ${experience.jobTitle}</span></p>
                                        <p><span>Descripcion: ${experience.jobDescription}</span></p>
                                        <p class="fc80 mt5">Inicio:${experience.startDate} - Fin: ${experience.endDate}</p>
                                    </div>
                                    <div class="actions">
                                        <a class="exp-edit" data-experience-id="${experience.experienceId}">
                                            <span class="lapiz-icon"><i class="fa-solid fa-pencil"></i></span>
                                        </a>
                                        <a class="exp-delete" data-experience-id="${experience.experienceId}">
                                            <span class="delete-icon"><i class="fa-solid fa-trash"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        `).join('')}
                        <li id="add-experience-container">
                            <div class="w100 dFlex">
                                <button class="btn">AÑADIR MÁS EXPERIENCIAS</button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="user-form">
                    <p class="title_cv">Mis estudios</p>
                    <ul class="list_timeline">
                        ${Studys.map(study => `
                            <li>
                                <div class="w100 dFlex">
                                    <div class="info">
                                        <p class="fs15">Tipo de estudio: ${study.studyTypeName}</p>
                                        <p class="fc80">Donde: ${study.description}</p>
                                        <p class="fc80 mt5">Inicio: ${study.startDate} - Fin: ${study.endDate}</p>
                                    </div>
                                    <div class="actions">
                                        <a class="study-edit" data-study-id="${study.studyId}">
                                            <span class="lapiz-icon"><i class="fa-solid fa-pencil"></i></span>
                                        </a>
                                        <a class="study-delete" data-study-id="${study.studyId}">
                                            <span class="deleteS-icon"><i class="fa-solid fa-trash"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        `).join('')}
                        <li id="add-education-container">
                            <div class="w100 dFlex">
                                <button id="addEducationBtn" class="btn">AÑADIR MÁS ESTUDIOS</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="Skills" class="user-form">
                    <div class="dFlex">
                        <p class="title_cv">Skills</p>
                    </div>
                    <div id="skills-container" class="skills-container">
                        ${Skills.map(skill => `
                        <div class="skill-item" >
                            <span class="item_tag">${skill.name}</span>
                            <a class="delete-skill" data-skill-id="${skill.skillId}">
                            <span id="delete-icon-skill" class="deleteSK-icon"><i class="fa-solid fa-trash"></i></span>
                            </a>
                        </div>
                        `).join('')}
                    </div>
                            <button id="addSkillBtn" class="btn">AÑADIR NUEVA SKILL</button>
                </div>
            </div>
        </div>
            <aside class="sidebar">
                <section class="formulario_lateral">
                    <h3 class="fs20 mb0"><a id="postu-ref" href="/applicationUser.html">MIS POSTULACIONES</a></h3>
                    <ul class="list_timeline">
                    ${applicationsList}                        
                    </ul>
                </section>
            </aside>
    `;
    return article;
}
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}
export default renderResume();
document.addEventListener('DOMContentLoaded', async () => {
    const contenedor = document.querySelector('.container');
    const resume = await renderResume();
    contenedor.appendChild(resume);
    const reloadPage = () => {
        location.reload();
    };
    const addSkillBtn = document.getElementById('addSkillBtn');
    if (addSkillBtn) {
        addSkillBtn.addEventListener('click', function () {
            skillModal.style.display = 'block';
            fetchSkills();
        });
    }
    const addEducationBtn = document.getElementById('addEducationBtn');
    if (addEducationBtn) {
        addEducationBtn.addEventListener('click', function () {
            educationModal.style.display = "block";
        });
    }
    const addExperience = document.querySelector("#add-experience-container .btn");
    if (addExperience) {
        addExperience.addEventListener('click', function () {
            const modal = document.getElementById("experienceModal");
            modal.style.display = "block";
        });
    }

    const editButtons = document.querySelectorAll(".exp-edit");
    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = document.getElementById("experienceModalm");
            const experienceId = this.getAttribute('data-experience-id');
            sessionStorage.setItem('selectExp', experienceId);
            modal.style.display = "block";

        });
    });
    const editStudy = document.querySelectorAll(".study-edit");
    editStudy.forEach(button => {
        button.addEventListener('click', function () {
            const modal = document.getElementById("educationModalm");
            const studyId = this.getAttribute('data-study-id');
            sessionStorage.setItem('studyid', studyId);
            modal.style.display = "block";
        });
    });
    const deleteExpIcons = document.querySelectorAll('.delete-icon');
    const confirmationModal = document.getElementById('confirmationModal');
    const confirmDeleteButton = document.getElementById('confirmDelete');
    const cancelDeleteButton = document.getElementById('cancelDelete');
    deleteExpIcons.forEach(deleteIcon => {
        deleteIcon.addEventListener('click', (event) => {
            const expId = event.currentTarget.parentElement.getAttribute('data-experience-id');
            confirmationModal.style.display = 'block';
            confirmDeleteButton.addEventListener('click', async () => {
                try {
                    const response = await ResumeApi.DeleteExperience(expId);
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
    const deleteStudyIcons = document.querySelectorAll('.deleteS-icon');
    const confirmationModalS = document.getElementById('confirmationModalS');
    const confirmDeleteButtonS = document.getElementById('confirmDeleteS');
    const cancelDeleteButtonS = document.getElementById('cancelDeleteS');
    deleteStudyIcons.forEach(deleteIcon => {
        deleteIcon.addEventListener('click', (event) => {
            const studyId = event.currentTarget.parentElement.getAttribute('data-study-id');
            confirmationModalS.style.display = 'block';
            confirmDeleteButtonS.addEventListener('click', async () => {
                try {
                    const response = await ResumeApi.DeleteStudy(studyId);
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
                    confirmationModalS.style.display = 'none';
                }
            });
            cancelDeleteButtonS.addEventListener('click', () => {
                confirmationModalS.style.display = 'none';
            });
        });
    });
    const deleteSkillIcons = document.querySelectorAll('.deleteSK-icon');
    const confirmationModalSK = document.getElementById('confirmationModalSK');
    const confirmDeleteButtonSK = document.getElementById('confirmDeleteSK');
    const cancelDeleteButtonSK = document.getElementById('cancelDeleteSK');
    deleteSkillIcons.forEach(deleteIcon => {
        deleteIcon.addEventListener('click', (event) => {
            const skillId = event.currentTarget.parentElement.getAttribute('data-skill-id');
            confirmationModalSK.style.display = 'block';
            confirmDeleteButtonSK.addEventListener('click', async () => {
                try {
                    const response = await ResumeApi.DeleteSkill(skillId);
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
                    confirmationModalSK.style.display = 'none';
                }
            });
            cancelDeleteButtonSK.addEventListener('click', () => {
                confirmationModalSK.style.display = 'none';
            });
        });
    });
});
