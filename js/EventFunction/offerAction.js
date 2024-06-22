import { offerPreview } from "../Components/offerPreview/offerPreview.js";
import { offer } from "../Components/offer/offer.js";
import { getOfferByFilters, getOfferById } from "../Service/offerQuery.js";
import { offerClick } from "./clickAction.js";
import { loaderOfferPreview } from "../Components/loaderOfferPreview/loaderOfferPreview.js";



export async function offerSearchWithFilters(){
    let buttons = document.querySelectorAll(".apply-button");

    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            await offerSearch(); 
        });
    });
}


export async function offerSearch() {

    let title = document.querySelector('#searchOffer').value;
    console.log("hola" + title);
    let companies = JSON.parse(localStorage.getItem("selectedCompanies")) || [];
    let jobOfferMode = localStorage.getItem("selectedMode");
    let jobOfferType = null;
    let provinces = JSON.parse(localStorage.getItem("selectedProvinces")) || [];
    let studyType = null;
    let categories = JSON.parse(localStorage.getItem("selectedCategories")) || [];
    let skills = null;
    let availabilityToTravel = null;
    let availabilityChangeOfResidence = null;
    let from = getDate();
    let to = null;
    let pageNumber = 1;
    let pageSize = 10;


    let sidebar = document.getElementById("offer-previews");
    sidebar.innerHTML = loaderOfferPreview();

    let offers = await getOfferByFilters(
                            title, 
                            companies, 
                            jobOfferMode, 
                            jobOfferType, 
                            provinces, 
                            studyType, 
                            categories, 
                            skills, 
                            availabilityToTravel, 
                            availabilityChangeOfResidence, 
                            from, 
                            to, 
                            pageNumber, 
                            pageSize
                        );
    sidebar.innerHTML = "";
    (offers.result.data).forEach((offer) => {
        sidebar.innerHTML += offerPreview(offer);
    });


    function getDate() {
        let from = null;
        let selectedDate = localStorage.getItem('selectedDate');
    
        if (selectedDate === "1") {
            // Para hoy
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
            let yyyy = today.getFullYear();
    
            from = `${yyyy}-${mm}-${dd}`;
        } else if (selectedDate === "2") {
            // Para la semana
            let weekAgo = new Date();
            weekAgo.setDate(weekAgo.getDate() - 7);
    
            let dd = String(weekAgo.getDate()).padStart(2, '0');
            let mm = String(weekAgo.getMonth() + 1).padStart(2, '0'); // Enero es 0!
            let yyyy = weekAgo.getFullYear();
    
            from = `${yyyy}-${mm}-${dd}`;
        } else if (selectedDate === "3") {
            // Para el mes
            let monthAgo = new Date();
            monthAgo.setDate(monthAgo.getDate() - 60);
    
            let dd = String(monthAgo.getDate()).padStart(2, '0');
            let mm = String(monthAgo.getMonth() + 1).padStart(2, '0'); // Enero es 0!
            let yyyy = monthAgo.getFullYear();
    
            from = `${yyyy}-${mm}-${dd}`;
        }
        return from;
    }
    
    
}



export const selectByOffer = async () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    offerClick();

    sidebar.addEventListener("click", async (e) => {
        if (
            e.target.closest(".ember-view") ||  
            e.target.closest(".ember-img") ||   
            e.target.closest(".job-title") || 
            e.target.closest(".ember-span") ||  
            e.target.closest(".ember-p")        
        ) {
            const offerInfo = document.getElementById('main_section'); 
            let id = e.target.closest(".ember-view").id;
            let offerDescription = await getOfferById(id);
            offerInfo.innerHTML = offer(offerDescription);
        }
    });
}
