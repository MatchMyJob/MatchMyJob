import { headerC } from "../Components/companyNav/navcompany.js";
import { applicationSearch, applicationSearchByFilters, selectOfferByApplication } from "../EventFunction/companyApplicationAction.js";

const userApplicationRender = async () => {
    headerC();
    await applicationSearch(null, 1, 10); // Cargar la primera página con pageSize de 4
    await selectOfferByApplication();
    await applicationSearchByFilters();
}

await userApplicationRender();
