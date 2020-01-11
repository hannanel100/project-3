const fetchData = async (url, options) => {
  const { method, headers, body } = options;
  console.log(options)
  const response = await fetch(url, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers,
    Accept: "application/json",
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body
  });

  return response;
}


export const loginAction = (userName, password) => {
  return async dispatch => {
    const URL = "http://localhost:5000/authenticate";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "basic " + btoa(userName + ":" + password)
      },
      body: ''
    }
    const response = await fetchData(URL, options);


    const data = await response.json();
    const token = data.token;
    const userId = data.userId;
    console.log(data)
    const isLogged = typeof token !== undefined && token !== "";

    return dispatch({
      type: "LOGIN",
      payload: {
        isLogged,
        token,
        userName,
        userId
      }
    });
  };
};

export const logoutAction = () => {
  return {
    type: "LOGIN",
    payload: false,
    token: "",
    userName: '',
    userId: ''
  };
};

export const signUpAction = (user) => {
  return async dispatch => {
    const URL = "http://localhost:5000/signUp";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }
    const response = await fetchData(URL, options);
    const result = await response.text();
    const isSignedUp = (JSON.parse(result).affectedRows === 1);
    return dispatch({
      type: "SIGNUP",
      payload: isSignedUp,
    });
  };
};

export const likeAction = (userId, vacation) => {
  return async dispatch => {
    const URL = "http://localhost:5000/vacations/like";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        vacation
      })
    }
    const response = await fetchData(URL, options);
    return dispatch({
      type: "LIKE",
      payload: {
        userId,
        vacation
      }
    })
  }
}
export const unLikeAction = (userId, vacation) => {
  return async dispatch => {
    const URL = `http://localhost:5000/vacations/unLike/${vacation}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        vacation
      })
    }

    const response = await fetchData(URL, options);
    return dispatch({
      type: "UNLIKE",
      payload: {
        userId,
        vacation
      }
    })
  }
}