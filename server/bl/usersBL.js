
const dalFunc = require("../dal");
const dal = dalFunc();
function getUser(userName, password, callback) {
  const query =
    'SELECT * FROM users WHERE user_name LIKE "' +
    userName +
    '" AND password LIKE "' +
    password + '"';
  dal.readOne(query, (e, userData) => {
    if (e) {
      callback(e);
    } else {
      callback(null, userData[0]);
    }
  });
}
function addUser(user, callback) {
  const query =
    'INSERT INTO users(first_name, last_name, user_name, password) VALUES ("' +
    user.firstName + '", "' +
    user.lastName + '", "' +
    user.userName + '", "' +
    user.password + '")';
  dal.addOne(query, (e, results) => {
    if (e) {
      callback(e);
    } else {
      callback(null, results);
    }
  });
}
module.exports.getUser = getUser;
module.exports.addUser = addUser;
