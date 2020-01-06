export const loginAction = (userName, password) => {
  return async dispatch => {
    const response = await fetch("http://localhost:5000/authenticate", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authorization: "basic " + btoa(userName + ":" + password)
      },
      Accept: "application/json",
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer" // no-referrer, *client
      // body data type must match "Content-Type" header
    });

    const token = await response.text();
    const isLogged = typeof token !== undefined && token !== "";

    return dispatch({
      type: "LOGIN",
      payload: isLogged,
      token: token
    });
  };
};

export const logoutAction = () => {
  return {
    type: "LOGIN",
    payload: false,
    token: ""
  };
};

export const signUpAction = (user) => {
  return async dispatch => {
    const response = await fetch("http://localhost:5000/signUp", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      Accept: "application/json",
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      // body data type must match "Content-Type" header
      body: JSON.stringify(user)
    });

    const result = await response.text();
    console.log(JSON.parse(result).affectedRows)
    const isSignedUp = (JSON.parse(result).affectedRows === 1);
    return dispatch({
      type: "SIGNUP",
      payload: isSignedUp,
      // token: token
    });
  };
};
