const urlBase = "https://localhost:7292/api/Applicant";


export const getApplicantById = async (applicantId) => {

    const url = `${urlBase}/${applicantId}`;
    let result = null;
    let statusCodeMessage = null;

    try {
        const response = await fetch(url);

        if (response.ok) {
            result = await response.json();
        }
        if (response.status===400)
        {
            statusCodeMessage = await response.json();
            console.log(statusCodeMessage.message);
        }
        if (response.status===404)
        {
            statusCodeMessage = await response.json();
            console.log(statusCodeMessage.message);
        }
    } catch (error) {
        if (error.name === "TypeError" && error.message === "Failed to fetch") {
            console.log("Error en la solicitud");
        }
    }
    return result;
}
