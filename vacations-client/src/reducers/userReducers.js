const initState = {
    isLogged: false
}
const userReducers = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            state = { ...state, isLogged: true }
            break;
        default:
            break;
    }
    return state
}
export default userReducers;