import ResumeApi from "../Service/ResumeApi.js";

document.addEventListener('DOMContentLoaded', async () => {
    var educationModal = document.getElementById("educationModalm");
    var addEducationBtns = document.querySelectorAll(".study-edit");
    var closeEducationModal = document.querySelector("#educationModalm .closem");
    var cancelEducationBtn = document.querySelector("#educationModalm .cancel-btnm");
    var educationForm = document.getElementById("educationFormm");
    var educationTypeInput = document.getElementById("educationTypem");
    var educationDescriptionInput = document.getElementById("educationDescriptionm");
    var educationStartDateInput = document.getElementById("educationStartDatem");
    var educationEndDateInput = document.getElementById("educationEndDatem");
    var educationCurrentCheckbox = document.getElementById("educationCurrentm");
    let currentEndDate = "";
    let studyid = sessionStorage.getItem('studyid');
    educationModal.style.display = "none";

    if (addEducationBtns.length > 0) {
        addEducationBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                educationModal.style.display = "block";
            });
        });
    }

    if (closeEducationModal) {
        closeEducationModal.addEventListener('click', function () {
            educationModal.style.display = "none";
            clearEducationForm();
        });
    }

    if (cancelEducationBtn) {
        cancelEducationBtn.addEventListener('click', function () {
            educationModal.style.display = "none";
            clearEducationForm();
        });
    }

    if (educationCurrentCheckbox) {
        educationCurrentCheckbox.onchange = function () {
            if (this.checked) {
                currentEndDate = new Date().toISOString().split('T')[0]; 
                educationEndDateInput.style.display = "none";
                educationEndDateInput.value = "";
            } else {
                currentEndDate = "";
                educationEndDateInput.style.display = "block";
            }
        };
    }

    if (educationForm) {
        educationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var educationType = educationTypeInput.value;
            var educationDescription = educationDescriptionInput.value;
            var educationStartDate = educationStartDateInput.value;
            var educationEndDate = educationCurrentCheckbox.checked ? "Actualmente" : educationEndDateInput.value;
            ResumeApi.PutStudy(studyid, educationType, educationDescription, educationStartDate, educationEndDate);
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