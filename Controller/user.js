
const Users = require("../model/user");

module.exports = class UserService {
    async create(details) {
        return await Users.query().insert(details);
    }
}

