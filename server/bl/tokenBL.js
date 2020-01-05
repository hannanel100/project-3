const atob = require("atob");
function splitCredentials(str) {
  if (str) {
    const authHeader = str.split(" ");
    if (authHeader[0] === "basic") {
      return {
        user: atob(authHeader[1]).split(":")[0],
        pass: atob(authHeader[1]).split(":")[1]
      };
    } else if (authHeader[0] === "bearer") {
      return authHeader[1];
    }
  }
}

module.exports.splitCredentials = splitCredentials;
