const RegisterApplicant = async (cityId, dni, phone,linkedin, email, name, surname,minimalDescription, birthDate) => {
    const postUrl = `https://localhost:7292/api/Applicant`;
    const authToken = sessionStorage.getItem("authToken");
    const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({
            cityId: cityId,
            dni: dni,
            phone: phone,
            linkedin:linkedin,
            email: email,
            name: name,
            surname: surname,
            minimalDescription: minimalDescription,
            birthDate: birthDate
        })
    });

    const responseData = await response.json();
    const metadata = {
        status: response.status,
        headers: response.headers
    };
    return {
        data: responseData,
        metadata: metadata
    };
};

const GetApplicantMe = async () => {
    const authToken = sessionStorage.getItem("authToken");
    const GetUrl = `https://localhost:7292/api/Applicant/Me`;
    const response = await fetch(GetUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const responseData = await response.json();
    return responseData;
}
const GetApplicantes = async () => {
    const GetUrl = `https://localhost:7292/api/Applicant?pagedSize=8`;
    const response = await fetch(GetUrl, {
        method: 'GET',
        headers: {
        }
      });
      const responseData = await response.json();
    return responseData;
}
const ApplicantApi = {
    Register: RegisterApplicant,
    Getme: GetApplicantMe,
    GetApplicantes: GetApplicantes
};

export default ApplicantApi;