const Account = require("./Account")

module.exports = class User extends Account{
    constructor(fullname, email, account){
        this.fullname = fullname
        this.email = email
        this.account = account
    }
}