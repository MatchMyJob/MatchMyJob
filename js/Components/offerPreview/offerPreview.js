export const offerPreview = (data) => {
    return `
        <link rel="stylesheet" href="/js/Components/offerPreview/offerPreview.css">   
        <li class="ember-view" id="${data.offerId}">
                    <div class="ember-views">
                        <div class="ember-img">
                            <img src="${data.company.logo}" alt="">
                        </div>
                        <div class="ember-jobs">
                            <a class="job-title" href="#">${data.title}</a>
                            <div class="ember-span">
                                <span>${data.company.businessName}</span>
                            </div>
                            <div class="ember-p">
                                <p>${data.ubication.province}</p>
                            </div>
                        </div>                
                    </div>
               </li>
    `
}

