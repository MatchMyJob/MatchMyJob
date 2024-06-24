import { header } from "../Components/header/navoffer.js";
import { applicationSearch } from "../EventFunction/applicationAction.js";

const userApplicationRender = async () => {

    header();
    await applicationSearch();
}

await userApplicationRender();