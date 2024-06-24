import ApplicantApi from "../Service/ApplicantApi.js";
import ResumeApi from "../Service/ResumeApi.js";

document.addEventListener('DOMContentLoaded', function () {
    const completeForm = document.getElementById('completeForm');

    completeForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const citySelect = document.getElementById('citySelect');
        const cityId = citySelect.value;
        const dni = document.getElementById('dni').value;
        const phone = document.getElementById('phone').value;
        const linkedin = document.getElementById('linkedin').value;
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const minimalDescription = document.getElementById('minimalDescription').value;
        const birthDate = document.getElementById('birthDate').value; 
        const description = document.getElementById('description').value;
        const minimumSalary = document.getElementById('minimumSalary').value;
        const image = document.getElementById('image').value;
        console.log('City ID:', cityId);
        console.log('Minimal Description:', minimalDescription);

        const errors = {
            cityId: document.getElementById('cityIdError'),
            dni: document.getElementById('dniError'),
            phone: document.getElementById('phoneError'),
            linkedin: document.getElementById('linkedinError'),
            email: document.getElementById('emailError'),
            name: document.getElementById('nameError'),
            surname: document.getElementById('surnameError'),
            minimalDescription: document.getElementById('minimalDescriptionError'),
            birthDate: document.getElementById('birthDateError'),
            description: document.getElementById('descriptionError'),
            minimumSalary: document.getElementById('minimumSalaryError'),
            image: document.getElementById('imageError'),
        };

        // Reset errors
        Object.values(errors).forEach(error => error.textContent = '');

        let valid = true;
        if (!cityId) {
            errors.cityId.textContent = 'Por favor, ingrese una ciudad';
            valid = false;
        }
        if (!dni) {
            errors.dni.textContent = 'Por favor, ingrese su DNI.';
            valid = false;
        }
        if (!phone) {
            errors.phone.textContent = 'Por favor, ingrese su teléfono.';
            valid = false;
        }
        if (!linkedin) {
            errors.linkedin.textContent = 'Por favor, ingrese su LinkedIn.';
            valid = false;
        }
        if (!email) {
            errors.email.textContent = 'Por favor, ingrese su email.';
            valid = false;
        }
        if (!name) {
            errors.name.textContent = 'Por favor, ingrese su nombre.';
            valid = false;
        }
        if (!surname) {
            errors.surname.textContent = 'Por favor, ingrese su apellido.';
            valid = false;
        }
        if (!minimalDescription) {
            errors.minimalDescription.textContent = 'Por favor, ingrese una descripción mínima.';
            valid = false;
        }
        if (!birthDate) {
            errors.birthDate.textContent = 'Por favor, ingrese su fecha de nacimiento.';
            valid = false;
        }
        if (!description) {
            errors.description.textContent = 'Por favor, ingrese una presentación.';
            valid = false;
        }
        if (!minimumSalary) {
            errors.minimumSalary.textContent = 'Por favor, ingrese un salario mínimo.';
            valid = false;
        }
        if (!image) {
            errors.image.textContent = 'Por favor, ingrese la URL de su imagen.';
            valid = false;
        }

        if (valid) {
            try {
                const applicantResponse = await ApplicantApi.Register(cityId, dni, phone, linkedin, email, name, surname, minimalDescription, birthDate);
                console.log('Applicant Response:', applicantResponse);

                if (applicantResponse.metadata.status === 201) {
                    const resumeResponse = await ResumeApi.PostResume(description, minimumSalary, image);
                    console.log('Resume Response:', resumeResponse);
                    window.location.href = './index.html';
                } else {
                    console.error('Error en el registro del aplicante:', applicantResponse.data);
                    alert("Error al completar el registro del aplicante. Por favor, inténtelo nuevamente.");
                }
            } catch (error) {
                console.error('Error al completar el registro:', error);
                alert("Error al completar el registro. Por favor, inténtelo nuevamente.");
            }
        }
    });
});