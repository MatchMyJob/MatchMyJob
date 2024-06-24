import CompanyApi from "../Service/CompanyApi.js";

document.addEventListener('DOMContentLoaded', function () {
    const completeForm = document.getElementById('completeFormC');

    completeForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const citySelect = document.getElementById('citySelectc');
        const cityId = citySelect.value;
        const cuit = document.getElementById('cuit').value;
        const phonec = document.getElementById('phonec').value;
        const businessName = document.getElementById('businessName').value;
        const address = document.getElementById('address').value;
        const businessSector = document.getElementById('businessSector').value;
        const website = document.getElementById('website').value;
        const minimalDescriptionc = document.getElementById('minimalDescriptionc').value;
        const workerQuantity = document.getElementById('workerQuantity').value; 
        const descriptionc = document.getElementById('descriptionc').value;
        const founded = document.getElementById('founded').value;
        const image = document.getElementById('imageL').value;
        const Banner = document.getElementById('Banner').value;

        const errors = {
            cityId: document.getElementById('cityIdError'),
            cuit: document.getElementById('cuitError'),
            phonec: document.getElementById('phoneError'),
            businessName: document.getElementById('businessNameError'),
            address: document.getElementById('addressError'),
            businessSector: document.getElementById('businessSectorError'),
            minimalDescriptionc: document.getElementById('minimalDescriptionError'),
            website: document.getElementById('websiteError'),
            descriptionc: document.getElementById('descriptionError'),
            workerQuantity: document.getElementById('workerQuantityError'),
            founded: document.getElementById('foundedError'),
            image: document.getElementById('imageError'),
            Banner: document.getElementById('BannerError'),
        };
        Object.values(errors).forEach(error => error.textContent = '');

        let valid = true;

        if (!cityId) {
            errors.cityId.textContent = 'Por favor, seleccione una ciudad.';
            valid = false;
        }

        if (!cuit) {
            errors.cuit.textContent = 'Por favor, ingrese el CUIT.';
            valid = false;
        }

        if (!phonec) {
            errors.phonec.textContent = 'Por favor, ingrese el teléfono.';
            valid = false;
        }

        if (!businessName) {
            errors.businessName.textContent = 'Por favor, ingrese el nombre de la empresa.';
            valid = false;
        }

        if (!address) {
            errors.address.textContent = 'Por favor, ingrese la dirección.';
            valid = false;
        }

        if (!businessSector) {
            errors.businessSector.textContent = 'Por favor, seleccione el sector de la empresa.';
            valid = false;
        }

        if (!website) {
            errors.website.textContent = 'Por favor, ingrese el sitio web.';
            valid = false;
        }

        if (!minimalDescriptionc) {
            errors.minimalDescriptionc.textContent = 'Por favor, ingrese una descripción mínima de la empresa.';
            valid = false;
        }

        if (!workerQuantity) {
            errors.workerQuantity.textContent = 'Por favor, ingrese la cantidad de empleados.';
            valid = false;
        }

        if (!descriptionc) {
            errors.descriptionc.textContent = 'Por favor, ingrese una descripción detallada de la empresa.';
            valid = false;
        }

        if (!founded) {
            errors.founded.textContent = 'Por favor, ingrese el año de fundación de la empresa.';
            valid = false;
        }

        if (!image) {
            errors.image.textContent = 'Por favor, ingrese la URL de la imagen de la empresa.';
            valid = false;
        }

        if (!Banner) {
            errors.Banner.textContent = 'Por favor, ingrese la URL del banner de la empresa.';
            valid = false;
        }

        if (valid) {
            try {
                const company = await CompanyApi.RegisterCompany(cityId, cuit, phonec, businessName, address, businessSector, website, minimalDescriptionc, workerQuantity, descriptionc, founded, image, Banner);
                if(company.metadata.status === 201){
                    window.location.href = './company.html';
                }                    
            } catch (error) {
                console.error('Error al completar el registro:', error);
                alert("Error al completar el registro. Por favor, inténtelo nuevamente.");
            }
        }
    });
});