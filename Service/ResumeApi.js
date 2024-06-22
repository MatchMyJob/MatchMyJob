const PostExperienec = async (companyName, jobTitle, jobDescription, startDate,endDate) => {
    let postResult = null;
    const postUrl = `https://localhost:7295/api/Experience`;
    const authToken = sessionStorage.getItem("authToken");
    try {
        const postResponse = await fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                companyName: companyName,
                jobTitle: jobTitle,
                jobDescription: jobDescription,
                startDate: startDate,
                endDate: endDate
            }),
        });

        if (postResponse.ok) {
            postResult = await postResponse.json();
        } else if (postResponse.status === 400) {
            postResult = { status: 'error', message: 'Solicitud incorrecta' };
        } else {
            postResult = { status: 'error', message: 'Error en la solicitud POST' };
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        postResult = { status: 'error', message: 'Error en la solicitud' };
    }

    return postResult;
};
const PostResume = async (description, minimumSalary, image) => {
    let postResult = null;
    const postUrl = `https://localhost:7295/api/Resume`;
    const authToken = sessionStorage.getItem("authToken");
    try {
        const postResponse = await fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                description: description,
                minimumSalary: minimumSalary,
                image: image
            })
        });

        if (postResponse.ok) {
            postResult = await postResponse.json();
        } else if (postResponse.status === 400) {
            postResult = { status: 'error', message: 'Solicitud incorrecta' };
        } else {
            postResult = { status: 'error', message: 'Error en la solicitud POST' };
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        postResult = { status: 'error', message: 'Error en la solicitud' };
    }

    return postResult;
};
const PostSkill = async (skillid) => {
    let postResult = null;
    const postUrl = `https://localhost:7295/api/ResumeSkill`;
    const authToken = sessionStorage.getItem("authToken");
    try {
        const postResponse = await fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                skillId: skillid
            }),
        });

        if (postResponse.ok) {
            postResult = await postResponse.json();
        } else if (postResponse.status === 400) {
            postResult = { status: 'error', message: 'Solicitud incorrecta' };
        } else {
            postResult = { status: 'error', message: 'Error en la solicitud POST' };
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        postResult = { status: 'error', message: 'Error en la solicitud' };
    }

    return postResult;
};
const PostStudy = async (studyTypeId,description,startDate,endDate) => {
    let postResult = null;
    const postUrl = `https://localhost:7295/api/Study`;
    const authToken = sessionStorage.getItem("authToken");
    try {
        const postResponse = await fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                studyTypeId: studyTypeId,
                description: description,
                startDate: startDate,
                endDate: endDate
            }),
        });

        if (postResponse.ok) {
            postResult = await postResponse.json();
        } else if (postResponse.status === 400) {
            postResult = { status: 'error', message: 'Solicitud incorrecta' };
        } else {
            postResult = { status: 'error', message: 'Error en la solicitud POST' };
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        postResult = { status: 'error', message: 'Error en la solicitud' };
    }

    return postResult;
};
const PutExperience = async (id, companyName, jobTitle, jobDescription, startDate, endDate) => {
    let putResult = null;
    const putUrl = `https://localhost:7295/api/Experience/${id}`;
    const authToken = sessionStorage.getItem("authToken");

    try {
        const putResponse = await fetch(putUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                companyName: companyName,
                jobTitle: jobTitle,
                jobDescription: jobDescription,
                startDate: startDate,
                endDate: endDate
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
const PutStudy = async (id,studyTypeId,description,startDate,endDate) => {
    let putResult = null;
    const putUrl = `https://localhost:7295/api/Study/${id}`;
    const authToken = sessionStorage.getItem("authToken");

    try {
        const putResponse = await fetch(putUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                studyTypeId: studyTypeId,
                description: description,
                startDate: startDate,
                endDate: endDate
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
const DeleteExperience = async (id) => {
    let putResult = null;
    const putUrl = `https://localhost:7295/api/Experience/${id}`;
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
const DeleteStudy = async (id) => {
    let putResult = null;
    const putUrl = `https://localhost:7295/api/Study/${id}`;
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
const DeleteSkill = async (id) => {
    let putResult = null;
    const putUrl = `https://localhost:7295/api/ResumeSkill/${id}`;
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
const GetSkills = async () => {
    const authToken = sessionStorage.getItem("authToken");
    const GetUrl = `https://localhost:7295/api/Skill?pagedNumber=0&pagedSize=135`;
    const response = await fetch(GetUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const responseData = await response.json();
    return responseData;
}
const GetResume = async () => {
    const authToken = sessionStorage.getItem("authToken");
    const GetUrl = `https://localhost:7295/api/Resume/5`;
    const response = await fetch(GetUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      const responseData = await response.json();
    return responseData;
}
const ResumeApi = {
    PostExperience: PostExperienec,
    PostResume: PostResume,
    PostSkill: PostSkill,
    PostStudy: PostStudy,
    GetSkills: GetSkills,
    GetResume: GetResume,
    PutExperience: PutExperience,
    PutStudy:PutStudy,
    DeleteExperience: DeleteExperience,
    DeleteStudy: DeleteStudy,
    DeleteSkill: DeleteSkill
};

export default ResumeApi;