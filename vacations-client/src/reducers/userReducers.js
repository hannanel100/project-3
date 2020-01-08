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
      let newLiked = state.liked;
      newLiked.push(action.payload.vacation)
      state = { ...state, liked: newLiked }
      console.log(state);
      break;
    case "UNLIKE":
      newLiked = state.liked;
      const userId = action.payload.userId;
      const vacation = action.payload.vacation;
      newLiked.filter((item) => item == vacation);
      state = { ...state, newLiked };
      break;
    default:
      break;
  }
  return state;
};

export default userReducers;
