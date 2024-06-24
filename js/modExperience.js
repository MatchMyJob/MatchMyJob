import ResumeApi from "../Service/ResumeApi.js";
document.addEventListener('DOMContentLoaded', async () => {
    var modal = document.getElementById("experienceModalm");
    var btn = document.querySelectorAll(".exp-edit");
    var span = document.getElementsByClassName("closem")[0];
    var currentlyWorkingCheckbox = document.getElementById("currentlyWorkingm");
    var endDateInput = document.getElementById("endDateE");
    let expid = sessionStorage.getItem('selectExp');
    let currentEndDate = "";
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

    if (currentlyWorkingCheckbox) {
        currentlyWorkingCheckbox.onchange = function() {
            if (this.checked) {
                currentEndDate = new Date().toISOString().split('T')[0];
                endDateInput.style.display = "none";
                endDateInput.value = "";
            } else {
                endDateInput.style.display = "block";
            }
        }
    }

    document.getElementById("experienceFormE").addEventListener("submit", function(event) {
        event.preventDefault();
        var companyName = document.getElementById("companyNameE").value;
        var jobTitle = document.getElementById("jobTitleE").value;
        var jobDescription = document.getElementById("jobDescriptionE").value;
        var startDate = document.getElementById("startDateE").value;
        var endDate = currentlyWorkingCheckbox.checked ? "Actualmente" : document.getElementById("endDateE").value;

        ResumeApi.PutExperience(expid,companyName, jobTitle, jobDescription, startDate, endDate)
            .then(response => { 
                modal.style.display = "none";
                reloadPage();
                clearFormFields(); 
            })
            .catch(error => {
                alert("Error no se pudo modificar la experiencia:", error);
            });
    });

    function clearFormFields() {
        document.getElementById("experienceForm").reset();
        endDateInput.style.display = "block"; 
        currentEndDate = "";
    }
});