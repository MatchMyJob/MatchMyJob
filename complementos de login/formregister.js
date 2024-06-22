function renderAdditionalForm() {
    const additionalForm = document.createElement('div');
    additionalForm.className = 'container';
    additionalForm.innerHTML = `
        <div class="container-register">
            <div class="form-content">
                <h1 id="title">Completar Registro</h1>
                <form id="additionalForm">
                    <div class="input-field">
                        <i class="fa-solid fa-map-marker"></i>
                        <input type="text" id="cityId" placeholder="Ciudad">
                        <span id="ci tyIdError" class="error"></span>
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-id-card"></i>
                        <input type="text" id="dni" placeholder="DNI" required>
                        <span id="dniError" class="error"></span>
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-phone"></i>
                        <input type="text" id="phone" placeholder="Teléfono" required>
                        <span id="phoneError" class="error"></span>
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" id="name" placeholder="Nombre">
                        <span id="nameError" class="error"></span>
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-calendar"></i>
                        <input type="date" id="birthDate" placeholder="Fecha de Nacimiento" required>
                        <span id="birthDateError" class="error"></span>
                    </div>
                    <div class="input-field">
                        <i class="fa-solid fa-comment-alt-lines"></i>
                        <input type="text" id="minimalDescription" placeholder="Descripción mínima">
                        <span id="minimalDescriptionError" class="error"></span>
                    </div>

                    <div class="btn-field">
                        <button type="submit" id="submitAdditional" >Finalizar Registro</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    return additionalForm;
}
const contenedor = document.getElementById('home');
const additionalForm = renderAdditionalForm();
contenedor.appendChild(additionalForm);
