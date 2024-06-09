const PostLogin = async (email, password) => {
  let postResult = null;
  const postUrl = `https://localhost:7096/api/v1/User/login`;
  
  try {
      const postResponse = await fetch(postUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: email,
              password: password
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

const LoginApi = {
  Post: PostLogin
};

export default LoginApi;
