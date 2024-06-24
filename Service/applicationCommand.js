import { applicationRegistered, applicationRegisteredDescription, createAlertModal, duplicatedApplication, error400, error400Description } from "../js/EventFunction/alert.js";

const urlBase = "https://localhost:7291/api/Application";

export const registerApplication = async (offerId) => {
    const url = `${urlBase}`;
    const authToken = sessionStorage.getItem("authToken");
    // Datos para enviar en el cuerpo de la solicitud POST
    const requestBody = {
        offerId: offerId
    };

    let result = null;
    let statusCodeMessage = null;
    let isSuccess = false;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}` // Token de autorización
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            result = await response.json();
            isSuccess = true;
            createAlertModal(applicationRegistered, applicationRegisteredDescription);
        } else if (response.status === 400 || response.status === 404) {
            statusCodeMessage = await response.json();
            console.log(statusCodeMessage.message);
            createAlertModal(error400, error400Description);
        } else if (response.status === 409) {
            statusCodeMessage = await response.json();
            console.log(statusCodeMessage.message);
            createAlertModal("Error", duplicatedApplication);
        }
    } catch (error) {
        if (error.name === "TypeError" && error.message === "Failed to fetch") {
            console.log("Error en la solicitud");
            statusCodeMessage = { message: "Error en la solicitud" };
        } else {
            console.error("Error:", error);
            statusCodeMessage = { message: error.message };
        }
    }

    return { result, statusCodeMessage, isSuccess };
};


export const updateApplication = async (applicationId, statusTypeId) => {
    const url = `${urlBase}/${applicationId}`;
    const authToken = sessionStorage.getItem("authToken");
    console.log(url)
    // Datos para enviar en el cuerpo de la solicitud POST
    const requestBody = {
        applicationStatusTypeId: statusTypeId
    };

    let result = null;
    let statusCodeMessage = null;
    let isSuccess = false;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}` // Token de autorización
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            result = await response.json();
            isSuccess = true;
        } else if (response.status === 400 || response.status === 404) {
            statusCodeMessage = await response.json();
            console.log(statusCodeMessage.message);
        } else if (response.status === 409) {
            statusCodeMessage = await response.json();
            console.log(statusCodeMessage.message);
        }
    } catch (error) {
        if (error.name === "TypeError" && error.message === "Failed to fetch") {
            console.log("Error en la solicitud");
            statusCodeMessage = { message: "Error en la solicitud" };
        } else {
            console.error("Error:", error);
            statusCodeMessage = { message: error.message };
        }
    }
    return { result, statusCodeMessage, isSuccess };
};
