import { offerSearch, selectByOffer, offerSearchWithFilters, applyToOffer } from "../EventFunction/offerAction.js";
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
    await applyToOffer();
}

await offerRender();