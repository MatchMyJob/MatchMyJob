import ResumeApi from "../Service/ResumeApi.js";
document.addEventListener('DOMContentLoaded', async() => {    
    var modal = document.getElementById("experienceModal");
    var btn = document.querySelector("#add-experience-container .btn");
    var span = document.getElementsByClassName("close")[0];
    var currentlyWorkingCheckbox = document.getElementById("currentlyWorking");
    var endDateInput = document.getElementById("endDate");
    let currentEndDate = "";
    modal.style.display = "none";
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

    if (currentlyWorkingCheckbox) {
        currentlyWorkingCheckbox.onchange = function() {
            if (this.checked) {
                currentEndDate = new Date().toISOString().split('T')[0];
                console.log(currentEndDate); 
                endDateInput.style.display = "none";
                endDateInput.value = "";
            } else {
                endDateInput.style.display = "block";
            }
        }
    }

    document.getElementById("experienceForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var companyName = document.getElementById("companyName").value;
        var jobTitle = document.getElementById("jobTitle").value;
        var jobDescription = document.getElementById("jobDescription").value;
        var startDate = document.getElementById("startDate").value;
        var endDate = currentlyWorkingCheckbox.checked ? "Actualmente" : document.getElementById("endDate").value;
        
        ResumeApi.PostExperience(companyName, jobTitle, jobDescription, startDate, endDate)
            .then(response => {                
                alert("Carga exitosa");
                modal.style.display = "none";
                clearFormFields(); 
            })
            .catch(error => {
                alert("Error no se pudo cargar la experiencia:", error);
            });
    });

    function clearFormFields() {
        document.getElementById("experienceForm").reset();
        endDateInput.style.display = "block";
        currentEndDate = ""; 
    }
});