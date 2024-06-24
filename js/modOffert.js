import OffertApi from "../Service/OffertApi.js";
document.addEventListener('DOMContentLoaded', async () => {
    var modal = document.getElementById("OfertModalm");
    var btn = document.querySelectorAll(".offert-edit");
    var span = document.getElementsByClassName("closech")[0];
    let offerId = sessionStorage.getItem('selectoffert');
    modal.style.display = "none";
    const reloadPage = () => {
        location.reload();
    };
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }
    
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    document.getElementById("offerFormc").addEventListener("submit", function(event) {
        event.preventDefault();
        const jobOfferMode = document.getElementById("jobOfferModech").value;
        const titleoffert = document.getElementById("titleoffertch").value;
        const description = document.getElementById("jobDescriptionch").value;
        const minSalary = document.getElementById("minSalarych").value;
        const maxSalary = document.getElementById("maxSalarych").value;
        const city = document.getElementById("citySelectch").value;
        const minAge = document.getElementById("minAgech").value;
        const maxAge = document.getElementById("maxAgech").value;
        const vacancies = document.getElementById("vacanciesch").value;
        const availabilityToTravel = document.getElementById("travelch").value === "true";
        const availabilityChangeOfResidence = document.getElementById("residencech").value === "true";
        const educationTypec = document.getElementById("educationTypecch").value;
        const jobCategory = document.getElementById("jobCategorych").value;
        const skillList = document.getElementById("skillListch").value;

        OffertApi.PutOffert(offerId,titleoffert, description, minSalary, maxSalary, jobOfferMode, city, minAge, maxAge, vacancies, availabilityToTravel, availabilityChangeOfResidence, educationTypec, jobCategory, skillList)
            .then(response => { 
                modal.style.display = "none";
                reloadPage();
            })
            .catch(error => {
                alert("Error no se pudo modificar la experiencia:", error);
            });
    });

    function clearFormFields() {
        document.getElementById("offerFormc").reset();
    }
});