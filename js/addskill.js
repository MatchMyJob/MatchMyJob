import ResumeApi from "../Service/ResumeApi.js";
document.addEventListener('DOMContentLoaded', async() => {
    const skillModal = document.getElementById('skillModal');
    const addSkillBtn = document.getElementById('addSkillBtn');
    const closeBtn = skillModal.querySelector('.close');    
    const cancelBtn = skillModal.querySelector('.cancel-btn');
    skillModal.style.display = 'none';
    const reloadPage = () => {
        location.reload();
    };
    if (addSkillBtn) {
        addSkillBtn.onclick = function() {
            skillModal.style.display = 'block';
            fetchSkills();
        }
    }
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            skillModal.style.display = 'none';
        }
    }
    
    if (cancelBtn) {
        cancelBtn.onclick = function() {
            skillModal.style.display = 'none';
        }
    }
    fetchSkills();

    const skillForm = document.getElementById('skillForm');

    skillForm.onsubmit = function(event) {
        event.preventDefault();
        const selectedSkillId = document.getElementById('skillList').value;
        ResumeApi.PostSkill(selectedSkillId);
        skillModal.style.display = 'none';
        reloadPage();
    }
})
async function fetchSkills() {
    try {
        const data = await ResumeApi.GetSkills();
        const skillList = document.getElementById('skillList');
        skillList.innerHTML = '';
        data.forEach(skill => {
            const option = document.createElement('option');
            option.value = skill.skillId;
            option.textContent = skill.name;
            skillList.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching skills:', error);
    }
}
export { fetchSkills };