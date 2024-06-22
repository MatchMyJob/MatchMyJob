import ResumeApi from "../Service/ResumeApi.js";
document.addEventListener('DOMContentLoaded', async() => {
    var educationModal = document.getElementById("educationModal");
    var addEducationBtn = document.getElementById("addEducationBtn");
    var closeEducationModal = document.querySelector("#educationModal .close");
    var cancelEducationBtn = document.querySelector("#educationModal .cancel-btn");
    var educationForm = document.getElementById("educationForm");
    var educationTypeInput = document.getElementById("educationType");
    var educationDescriptionInput = document.getElementById("educationDescription");
    var educationStartDateInput = document.getElementById("educationStartDate");
    var educationEndDateInput = document.getElementById("educationEndDate");
    var educationCurrentCheckbox = document.getElementById("educationCurrent");
    let currentEndDate = "";
    educationModal.style.display = "none";

    if (addEducationBtn) {
        addEducationBtn.addEventListener('click', function() {
            educationModal.style.display = "block";
        });
    }

    if (closeEducationModal) {
        closeEducationModal.addEventListener('click', function() {
            educationModal.style.display = "none";
            clearEducationForm();
        });
    }

    if (cancelEducationBtn) {
        cancelEducationBtn.addEventListener('click', function() {
            educationModal.style.display = "none";
            clearEducationForm();
        });
    }

    if (educationCurrentCheckbox) {
        educationCurrentCheckbox.onchange = function() {
            if (this.checked) {
                currentEndDate = new Date().toISOString().split('T')[0]; 
                console.log(currentEndDate);
                educationEndDateInput.style.display = "none";
                educationEndDateInput.value = "";
            } else {
                educationEndDateInput.style.display = "block";
            }
        };
    }

    if (educationForm) {
        educationForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var educationType = educationTypeInput.value;
            var educationDescription = educationDescriptionInput.value;
            var educationStartDate = educationStartDateInput.value;
            var educationEndDate = educationCurrentCheckbox.checked ? "Actualmente" : educationEndDateInput.value;
            ResumeApi.PostStudy(educationType,educationDescription,educationStartDate,educationEndDate);
            educationModal.style.display = "none";
            clearEducationForm();
        });
    }

    function clearEducationForm() {
        educationForm.reset();
        educationEndDateInput.style.display = "block";
        currentEndDate = "";
    }
});