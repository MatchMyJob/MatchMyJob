import { allSkills } from "../../js/skills.js"
async function renderPost() {
    const article = document.createElement('div');
    article.className = 'modal-contentc';
    article.innerHTML = `
    <span class="closec">&times;</span>
    <h2 class="modal-titlec">Añadir Oferta</h2>
    <form id="offerForm">
        <div class="form-groupc">
            <label for="titleoffert">Titulo de Oferta</label>
            <input type="text" id="titleoffert" name="companyId">
        </div>
        <div class="form-groupc">
            <label for="jobOfferModec">Formato</label>
            <select id="jobOfferModec" name="jobOfferMode">
                <option value="1">Presencial</option>
                <option value="2">Híbrido</option>
                <option value="3">Remoto</option>
            </select>
        </div>
        <div class="form-groupc">
            <label for="jobDescription">Descripción</label>
            <textarea id="jobDescription" name="description" rows="3"></textarea>
        </div>
        <div class="form-groupc">
            <label for="minSalary">Salario mínimo:</label>
            <input type="number" id="minSalary" name="minSalary" placeholder="Ingrese el salario mínimo" min="100000">
        </div>
        <div class="form-groupc">
            <label for="maxSalary">Salario máximo:</label>
            <input type="number" id="maxSalary" name="maxSalary" placeholder="Ingrese el salario máximo" min="100000">
        </div>
        <div class="form-groupc">
            <label for="citySelect">Ciudad</label>
            <select id="citySelect" name="ubication.city">
                <option value="">Selecciona una ciudad</option>
                <option value="60218">Chascomús</option>
                <option value="60274">Florencio Varela</option>
                <option value="60028">Almirante Brown</option>
                <option value="60091">Berazategui</option>
                <option value="22007">Comuna 1</option>
                <option value="22014">Comuna 2</option>
                <option value="140742">Villa Carlos Paz</option>
                <option value="140861">Río Cuarto</option>
            </select>
        </div>
        <div class="form-groupc">
            <label for="minAge">Edad mínima:</label>
            <input type="number" id="minAge" name="minAge" placeholder="Ingrese la edad mínima">
        </div>
        <div class="form-groupc">
            <label for="maxAge">Edad máxima:</label>
            <input type="number" id="maxAge" name="maxAge" placeholder="Ingrese la edad máxima">
        </div>
        <div class="form-groupc">
            <label for="vacancies">Vacantes:</label>
            <input type="number" id="vacancies" name="vacancies" placeholder="Ingrese las vacantes">
        </div>
        <div class="form-groupc">
            <label for="travel">Disponibilidad para viajar:</label>
            <select id="travel" name="availabilityToTravel">
                <option value="true">Sí</option>
                <option value="false">No</option>
            </select>
        </div>
        <div class="form-groupc">
            <label for="residence">Disponibilidad para cambiar de residencia:</label>
            <select id="residence" name="availabilityChangeOfResidence">
                <option value="true">Sí</option>
                <option value="false">No</option>
            </select>
        </div>
         <div class="form-groupc">
                    <label for="educationTypec">Tipo de estudio</label>
                    <select id="educationTypec" name="educationType">
                        <option value="1">Primaria</option>
                        <option value="2">Secundaria</option>
                        <option value="3">Terciario</option>
                        <option value="4">Universitario</option>
                        <option value="5">Posgrado</option>
                        <option value="6">Master</option>
                        <option value="7">Doctorado</option>
                        <option value="8">Curso</option>
                    </select>
                </div>
                <div class="form-group">
    <label for="jobCategory">Categoría de Trabajo</label>
    <select id="jobCategory" name="jobCategory">
        <option value="1">Diseño y Desarrollo</option>
        <option value="2">Comercial, Ventas y Negocios</option>
        <option value="3">Administración, Contabilidad y Finanzas</option>
        <option value="4">Ingenierías</option>
        <option value="5">Tecnología, Sistemas y Telecomunicaciones</option>
        <option value="6">Secretarias y Recepción</option>
        <option value="7">Oficios y Otros</option>
        <option value="8">Gastronomía y Turismo</option>
        <option value="9">Abastecimiento y Logística</option>
        <option value="10">Atención al Cliente, Call Center y Telemarketing</option>
        <option value="11">Recursos Humanos y Capacitación</option>
        <option value="12">Salud, Medicina y Farmacia</option>
        <option value="13">Producción y Manufactura</option>
        <option value="14">Legales</option>
        <option value="15">Aduana y Comercio Exterior</option>
        <option value="16">Ingeniería Civil y Construcción</option>
        <option value="17">Seguros</option>
        <option value="18">Gerencia y Dirección General</option>
        <option value="20">Comunicación y Relaciones Públicas</option>
        <option value="21">Educación, Docencia e Investigación</option>
        <option value="22">Departamento Técnico</option>
        <option value="23">Enfermería</option>
        <option value="24">Minería, Petróleo y Gas</option>
        <option value="25">Naviero, Marítimo, Portuario</option>
        <option value="26">Marketing y Publicidad</option>
    </select>
</div>
<div class="form-groupc">
                    <label for="skillList">Selecciona una Skill</label>
                    <select id="skillList" name="skillList" required>
                    </select>
                </div>
        <div id="button-groupc" class="form-group button-group">
            <button type="submit" class="btn">Guardar</button>
        </div>
    </form>`;

    return article;
}
document.addEventListener('DOMContentLoaded', async () => {
    const contenedor = document.querySelector('.modalc');
    const postcompany = await renderPost();
    contenedor.appendChild(postcompany);
    await allSkills();
});
