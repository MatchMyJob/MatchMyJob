const applicantUrlBase = "https://localhost:7291/api/applicant/Application";
const companyUrlBase = "https://localhost:7291/api/company/Application";


export const getApplicationById = async (applicationId) => {

    const url = `${applicantUrlBase}/${applicationId}`;
    let result = null;
    let statusCodeMessage = null;

    try {
        const response = await fetch(url);

        if (response.ok) {
            result = await response.json();
        }
        if (response.status===400)
        {
            statusCodeMessage = await response.json();
            console.log(statusCodeMessage.message);
        }
        if (response.status===404)
        {
            statusCodeMessage = await response.json();
            console.log(statusCodeMessage.message);
        }
    } catch (error) {
        if (error.name === "TypeError" && error.message === "Failed to fetch") {
            console.log("Error en la solicitud");
        }
    }
    return result;
}

export const getApplicationByFilters = async (
    statusTypeId, 
    pageNumber, 
    pageSize
    ) => {
    const authToken = sessionStorage.getItem("authToken");
    var url = `${applicantUrlBase}?`;
    if(statusTypeId)
    {
        url += `statusTypeId=${statusTypeId}`;
    }
    if(pageNumber)
    {
        if (statusTypeId) {url += `&`;}
        url += `pageNumber=${pageNumber}`;
    }
    if(pageSize)
    {
        if (statusTypeId || pageNumber) {url += `&`;}
        url += `pageSize=${pageSize}`;
    }
    
    let result = []
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`, 
                'Content-Type': 'application/json'
            }
        });
        if(response.ok){
            result = (await response.json());
        }
    } catch (error) {
        if(error.name === "TypeError" && error.message === "Failed to fetch")
        {
            console.log("Error en la solicitud:" + Error);
        }
    }  
    return result;    
}

export const getCompanyApplicationByFilters = async (
    offerId,
    statusTypeId, 
    pageNumber, 
    pageSize
    ) => {
    const authToken = sessionStorage.getItem("authToken");
    var url = `${companyUrlBase}?`;
    if(offerId)
    {
        url += `offerId=${offerId}`;
    }
    if(statusTypeId)
    {
        if (offerId) {url += `&`;}
        url += `statusTypeId=${statusTypeId}`;
    }
    if(pageNumber)
    {
        if (offerId || statusTypeId) {url += `&`;}
        url += `pageNumber=${pageNumber}`;
    }
    if(pageSize)
    {
        if (offerId || statusTypeId || pageNumber) {url += `&`;}
        url += `pageSize=${pageSize}`;
    }
    
    let result = []
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken}`, 
                'Content-Type': 'application/json'
            }
        });
        if(response.ok){
            result = (await response.json());
        }
    } catch (error) {
        if(error.name === "TypeError" && error.message === "Failed to fetch")
        {
            console.log("Error en la solicitud:" + Error);
        }
    }  
    return result;    
}
