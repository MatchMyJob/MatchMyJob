import OffertApi from "../Service/OffertApi.js";

document.addEventListener('DOMContentLoaded', async () => {
    var modal = document.getElementById("OfertModal");
    var btn = document.querySelector("#add-Offert .btnc");
    var span = document.getElementsByClassName("closec")[0];

    modal.style.display = "none";

    const reloadPage = () => {
        location.reload();
    };

    if (btn) {
        btn.onclick = function () {
            modal.style.display = "block";
        };
    }

    if (span) {
        span.onclick = function () {
            modal.style.display = "none";
        };
    }

    document.getElementById("offerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const jobOfferMode = document.getElementById("jobOfferModec").value;
        const titleoffert = document.getElementById("titleoffert").value;
        const description = document.getElementById("jobDescription").value;
        const minSalary = document.getElementById("minSalary").value;
        const maxSalary = document.getElementById("maxSalary").value;
        const city = document.getElementById("citySelect").value;
        const minAge = document.getElementById("minAge").value;
        const maxAge = document.getElementById("maxAge").value;
        const vacancies = document.getElementById("vacancies").value;
        const availabilityToTravel = document.getElementById("travel").value === "true";
        const availabilityChangeOfResidence = document.getElementById("residence").value === "true";
        const educationTypec = document.getElementById("educationTypec").value;
        const jobCategory = document.getElementById("jobCategory").value;
        const skillList = document.getElementById("skillList").value;

        OffertApi.PostOffert(titleoffert, description, minSalary, maxSalary, jobOfferMode, city, minAge, maxAge, vacancies, availabilityToTravel, availabilityChangeOfResidence, educationTypec, jobCategory, skillList)
            .then(response => {
                modal.style.display = "none";
                clearFormFields();
                reloadPage();
            })
            .catch(error => {
                alert("Error: No se pudo agregar la oferta.");
                console.error('Error:', error);
            });
    });

    function clearFormFields() {
        document.getElementById("offerForm").reset();
    }
});