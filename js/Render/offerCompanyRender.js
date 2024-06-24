import { offerSearchByCompany, offerSearchWithFilters, seeApplicationOffer, selectByCompanyOffer } from "../EventFunction/offerSActionCompany.js";
import { headerC } from "../Components/companyNav/navcompany.js";
import { offerSidebar } from "./RenderSidebar.js";

const offerCompanyRender = async () => {

    headerC();
    offerSidebar();
    await offerSearchByCompany();
    await selectByCompanyOffer();
    await offerSearchWithFilters();
    await seeApplicationOffer();
}

await offerCompanyRender();