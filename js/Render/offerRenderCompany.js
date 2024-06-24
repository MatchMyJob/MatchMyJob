import { offerSearchC, selectByOfferC, offerSearchWithFiltersC } from "../EventFunction/offerActionCompany.js";
import { headerC } from "../Components/companyNav/navcompany.js";
import { generateFilters } from "../Components/filters/filters.js";
import { offerSidebar } from "./RenderSidebar.js";

const offerRenderc = async () => {

    headerC();
    generateFilters();
    offerSidebar();
    await offerSearchC();
    await selectByOfferC();
    await offerSearchWithFiltersC();
}
//usa este
await offerRenderc();