const urlBase = "https://localhost:7291/api/applicant/Application";

export const getApplicationById = async (applicationId) => {

    const url = `${urlBase}/${applicationId}`;
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
    var url = `${urlBase}?`;
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
