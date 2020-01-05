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
