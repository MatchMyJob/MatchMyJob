const urlBase = "https://localhost:7292/api/Company";




export const getCompanyByFilters = async (
    name, 
    pageNumber, 
    pageSize
    ) => {
    var url = `${urlBase}?`;
        
    if(name)
    {
        url += `name=${name}`;
    }
    if(pageNumber)
    {
        if (name) {url += `&`;}
        url += `pageNumber=${pageNumber}`;
    }
    if(pageSize)
    {
        if (name || pageNumber) {url += `&`;}
        url += `pageSize=${pageSize}`;
    }
    
    let result = []
    try {
        let response = await fetch(url);
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

