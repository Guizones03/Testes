const User = require("./User.js")
const Account = require("./Account.js")
const Loan = require("./Loan.js")

module.exports = class App{
   static #users = []
    static newUser(name, email, account){
        user = new User(name, email, account)
        if(this.#users.some(user => user.email === email)){
            console.log("email já cadastradp")
            return null
        }else{
            console.log("Usuario cadastrado")
            this.#users.push(user)
        }
    }
    static findUser(userEmail){
        return this.#users.find(user => user.email === userEmail)
    }
    static deposit(value){
       new Account.deposit(value)
    }
    static transfer(destiny, value){
        new Account.transfer(destiny, value)
    }
    static loan(value, installments){
        new Account.loan(value, installments)
    }
    static setFes(value){
        Loan.setFess(value)
    }
}