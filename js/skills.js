import ResumeApi from "../Service/ResumeApi.js";
async function allSkills() {
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
export { allSkills };