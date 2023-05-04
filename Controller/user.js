
const Users = require("../model/user");
const bcrypt = require("bcrypt");

module.exports = class UserService {
    async create(details) {
        const pass = await bcrypt.hash(details.password, 5)
        details['password'] = pass
        const name = details.email.split('@')
        details['name'] = name[0]
        return await Users.query().insert(details);
    }

    async emailChecking(email) {
        const userDetails = await Users.query().findOne({
            email: email
        })
        return userDetails;
    }

    async PassChecking(userInfo, Pass) {
        return await bcrypt.compare(Pass, userInfo.password)
    }
}

