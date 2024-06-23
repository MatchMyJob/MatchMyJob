import { userApplication } from "../Components/userApplication/userApplication.js";
import { getApplicationByFilters } from "../Service/applicationQuery.js";

export async function applicationSearch() {
    let applicationFilters = document.getElementById('applicationFilters');
    let applicationContainer = document.getElementById('applicationContainer');

    applicationFilters.addEventListener('click', async (e) => {
        if (e.target.classList.contains('filter-button')) { // Verifica si el elemento clicado tiene la clase 'filter-button'
            let filter = e.target.value;
            let applications = await getApplicationByFilters(filter, 1, 100);
            
            applicationContainer.innerHTML = '';
            applications.result.data.forEach(application => {
                applicationContainer.innerHTML += userApplication(application);
            });
        }
    });
}
