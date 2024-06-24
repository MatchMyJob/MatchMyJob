const urlBase = "https://localhost:7291/api/Offer";

const getOfferById = async (offerId) => {

    const url = `${urlBase}/${offerId}`;
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


const getOfferByFilters = async (
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
    ) => {
    var url = `${urlBase}?`;

    if(title)
    {
        url += `title=${title}`;
    }
    if(companies)
    {
        if (title) {url += `&`;}
        let queryParams = companies.map(id => `companies=${id}`).join('&');
        url += `${queryParams}`;
    }
    if(jobOfferMode)
    {
        if (title || companies) {url += `&`;}
        url += `jobOfferMode=${jobOfferMode}`;
    }
    if(jobOfferType)
    {
        if (title || companies || jobOfferMode) {url += `&`;}
        url += `jobOfferType=${jobOfferType}`;
    }
    if(provinces)
    {
        if (title || companies || jobOfferMode || jobOfferType) {url += `&`;}
        let queryParams = provinces.map(id => `province=${id}`).join('&');
        url += `${queryParams}`;
    }
    if(studyType)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces) {url += `&`;}
        url += `studyType=${studyType}`;
    }
    if(availabilityToTravel)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces || studyType) {url += `&`;}
        url += `availabilityToTravel=${availabilityToTravel}`;
    }
    if(availabilityChangeOfResidence)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces || studyType || availabilityToTravel) {url += `&`;}
        url += `availabilityChangeOfResidence=${availabilityChangeOfResidence}`;
    }
    if(from)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces || studyType || availabilityToTravel || availabilityChangeOfResidence) {url += `&`;}
        url += `from=${from}`;
    }
    if(to)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces || studyType || availabilityToTravel || availabilityChangeOfResidence || from) {url += `&`;}
        url += `to=${to}`;
    }
    if(pageNumber)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces || studyType || availabilityToTravel || availabilityChangeOfResidence || from || to) {url += `&`;}
        url += `pageNumber=${pageNumber}`;
    }
    if(pageSize)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces || studyType || availabilityToTravel || availabilityChangeOfResidence || from || to || pageNumber) {url += `&`;}
        url += `pageSize=${pageSize}`;
    }
    if(categories)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces || studyType || availabilityToTravel || availabilityChangeOfResidence || from || to || pageNumber || pageSize) {url += `&`;}
        let queryParams = categories.map(id => `categories=${id}`).join('&');
        url += `${queryParams}`;
    }
    if(skills)
    {
        if (title || companies || jobOfferMode || jobOfferType || provinces || studyType || availabilityToTravel || availabilityChangeOfResidence || from || to || pageNumber || pageSize || categories) {url += `&`;}
        let queryParams = skills.map(id => `skills=${id}`).join('&');
        url += `${queryParams}`;
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
const PostOffer = async (titleoffert, description, minSalary, maxSalary, jobOfferMode, city, minAge, maxAge, vacancies, availabilityToTravel, availabilityChangeOfResidence,educationTypec,jobCategory,skillList) => {
    const postUrl = `https://localhost:7291/api/Offer`;
    const authToken = sessionStorage.getItem("authToken");   
    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({
            title: titleoffert,            
            description: description,
            minSalary: minSalary,
            maxSalary: maxSalary,
            jobOfferModeId: jobOfferMode,
            cityId: city,
            minAge: minAge,
            maxAge: maxAge,
            vacancies: vacancies,
            availabilityToTravel: availabilityToTravel,
            availabilityChangeOfResidence: availabilityChangeOfResidence,
            studyTypeId: educationTypec,
            categories: [jobCategory],
            skills: [skillList]
        })
    });

    const responseData = await response.json();
    const metadata = {
        status: response.status,
        headers: response.headers
    };
    if (!response.ok) {
        console.error('Error en la solicitud:', responseData);
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return {
        data: responseData,
        metadata: metadata
    };
};
const PutOffert = async (id,titleoffert, description, minSalary, maxSalary, jobOfferMode, city, minAge, maxAge, vacancies, availabilityToTravel, availabilityChangeOfResidence,educationTypec,jobCategory,skillList) => {
    let putResult = null;
    const putUrl = `https://localhost:7291/api/Offer/${id}`;
    const authToken = sessionStorage.getItem("authToken");

    try {
        const putResponse = await fetch(putUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                title: titleoffert,            
                description: description,
                minSalary: minSalary,
                maxSalary: maxSalary,
                jobOfferModeId: jobOfferMode,
                cityId: city,
                minAge: minAge,
                maxAge: maxAge,
                vacancies: vacancies,
                availabilityToTravel: availabilityToTravel,
                availabilityChangeOfResidence: availabilityChangeOfResidence,
                studyTypeId: educationTypec,
                categories: [jobCategory],
                skills: [skillList]
            }),
        });

        if (putResponse.ok) {
            putResult = await putResponse.json();
        } else if (putResponse.status === 400) {
            putResult = { status: 'error', message: 'Solicitud incorrecta' };
        } else {
            putResult = { status: 'error', message: 'Error en la solicitud PUT' };
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        putResult = { status: 'error', message: 'Error en la solicitud' };
    }

    return putResult;
};
const DeleteOffert = async (id) => {
    let putResult = null;
    const putUrl = `https://localhost:7291/api/Offer/${id}`;
    const authToken = sessionStorage.getItem("authToken");

    try {
        const putResponse = await fetch(putUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
            }),
        });

        if (putResponse.ok) {
            putResult = await putResponse.json();
        } else if (putResponse.status === 400) {
            putResult = { status: 'error', message: 'Solicitud incorrecta' };
        } else {
            putResult = { status: 'error', message: 'Error en la solicitud PUT' };
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        putResult = { status: 'error', message: 'Error en la solicitud' };
    }

    return putResult;
};
const OffertApi = {
    GetId: getOfferById,
    GetFilter: getOfferByFilters,
    PostOffert: PostOffer,
    PutOffert: PutOffert,
    DeleteOffert: DeleteOffert    
};

export default OffertApi;