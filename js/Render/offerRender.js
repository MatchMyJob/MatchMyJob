import { offerSearch, selectByOffer, offerSearchWithFilters } from "../EventFunction/offerAction.js";
import { header } from "../Components/header/navoffer.js";
import { generateFilters } from "../Components/filters/filters.js";
import { offerSidebar } from "./RenderSidebar.js";

const offerRender = async () => {

    header();
    generateFilters();
    offerSidebar();
    await offerSearch();
    await selectByOffer();
    await offerSearchWithFilters();
}
//usa este
await offerRender();