const GetCompany = async () => {
    const authToken = sessionStorage.getItem("authToken");
    const GetUrl = `https://localhost:7292/api/Company?pagedNumber=1&pagedSize=7`;
    const response = await fetch(GetUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const responseData = await response.json();
    return responseData;
}
const RegisterCompany = async (cityId, cuit, phone,businessName, address, businessSector, website,minimalDescription, workerQuantity,description,founded, logo,frontPage) => {
  const postUrl = `https://localhost:7292/api/Company`;
  const authToken = sessionStorage.getItem("authToken");
  const response = await fetch(postUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({
          cityId: cityId,
          cuit: cuit,
          phone: phone,
          businessName:businessName,
          address: address,
          businessSector: businessSector,
          website: website,
          minimalDescription: minimalDescription,
          description: description,
          workerQuantity: workerQuantity,
          logo: logo,
          frontPage: frontPage,
          founded: founded

      })
  });

  const responseData = await response.json();
  const metadata = {
      status: response.status,
      headers: response.headers
  };
  if (!response.ok) {
    const responseData = await response.json(); // Intenta obtener datos de error del servidor
    console.error('Error en la solicitud:', responseData);
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return {
      data: responseData,
      metadata: metadata
  };
};

const GetMeCompany = async () => {
  const authToken = sessionStorage.getItem("authToken");
  const GetUrl = `https://localhost:7292/api/Company/Me`;
  const response = await fetch(GetUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    const responseData = await response.json();
  return responseData;
}
const CompanyApi = {
    GetCompany: GetCompany,
    GetMeCompany: GetMeCompany,
    RegisterCompany: RegisterCompany
};

export default CompanyApi;