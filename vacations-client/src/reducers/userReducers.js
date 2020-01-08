const localStorageToken = window.localStorage.getItem("token");
const initState = {
  isLogged: localStorageToken !== null ? true : false,
  liked: []
};
const userReducers = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      window.localStorage.setItem("token", action.payload.token);
      state = { ...state, isLogged: action.payload.isLogged, token: action.payload.token, userName: action.payload.userName, userId: action.payload.userId };
      break;
    case "SIGNUP":
      //TODO: need something here
      break;
    case "LIKE":
      state = { ...state, liked: action.payload.vacation }
      console.log(state);
      break;
    default:
      break;
  }
  return state;
};

export default userReducers;
