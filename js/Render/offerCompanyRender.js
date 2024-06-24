import { offerSearchByCompany, offerSearchWithFilters, seeApplicationOffer, selectByCompanyOffer } from "../EventFunction/offerCompanyAction.js";
import { header } from "../Components/header/navoffer.js";
import { offerSidebar } from "./RenderSidebar.js";

const offerCompanyRender = async () => {

    header();
    offerSidebar();
    await offerSearchByCompany();
    await selectByCompanyOffer();
    await offerSearchWithFilters();
    await seeApplicationOffer();
}

await offerCompanyRender();