const localStorageToken = window.localStorage.getItem("token");
const initState = {
  isLogged: localStorageToken !== null ? true : false
};
const userReducers = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      window.localStorage.setItem("token", action.token);
      state = { ...state, isLogged: action.payload };
      break;
    default:
      break;
  }
  return state;
};
export default userReducers;
