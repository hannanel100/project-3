export const loginAction = (userName, password) => {
    console.log("loginAction " + userName + password)
    return {
        type: "LOGIN",
        payload: true

    }
}
