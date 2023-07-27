const Account = require("./Account.js")
const App = require("./App.js")
const User = require("./User.js")

const conta1 = new Account(12)
const Guilherme = new App.newUser("Guilherme de souza","souzaguitc@gmail.com", conta1)
console.log(Guilherme)