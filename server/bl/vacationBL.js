const dalFunc = require('../dal');
const dal = dalFunc();
const TABLE = 'vacations';

function getVacations(callback) {
    const query = "SELECT * FROM vacations";
    dal.readAll(query, (e, allcars) => {
        if (e) {
            callback(e);
        } else {
            callback(null, allcars);
        }
    })
}

function likeVacation(userId, vacation, callback) {
    const query = 'INSERT INTO user_vacation (user_id, vacation_id) VALUES (' +
        userId + ', ' +
        vacation + ')';
    dal.addOne(query, (e, data) => {
        if (e) {
            callback(e);
        } else {
            callback(null, data);
        }
    })
}
module.exports.getVacations = getVacations;
module.exports.likeVacation = likeVacation;