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

module.exports.getVacations = getVacations;