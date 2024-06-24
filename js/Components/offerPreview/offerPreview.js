export const offerPreview = (data) => {
   
    const companyLogo = data.company && data.company.logo ? data.company.logo : 'default-logo.png'; // Provide a default logo if not available
    const companyName = data.company && data.company.businessName ? data.company.businessName : 'Unknown Company';
    const province = data.ubication && data.ubication.province ? data.ubication.province : 'Unknown Location';
    
    return `
        <link rel="stylesheet" href="/js/Components/offerPreview/offerPreview.css">   
        <li class="ember-view" id="${data.offerId}">
            <div class="ember-views">
                <div class="ember-img">
                    <img src="${companyLogo}" alt="">
                </div>
                <div class="ember-jobs">
                    <a class="job-title" href="#">${data.title}</a>
                    <div class="ember-span">
                        <span>${companyName}</span>
                    </div>
                    <div class="ember-p">
                        <p>${province}</p>
                    </div>
                </div>                
            </div>
        </li>
    `;
}