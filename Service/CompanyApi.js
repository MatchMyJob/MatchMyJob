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
const CompanyApi = {
    GetCompany: GetCompany
};

export default CompanyApi;