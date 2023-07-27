const Loan = require("./Loan")
const Tranfer = require("./Tranfer")
const Deposit = require("./deposit")

module.exports = class Account {
    #balance
    constructor(id){
        this.id = id
        depositys = []
        loans = []
        transfers = []
    }
    
    deposity(value){
       this.#balance += value
       const depo = new Deposit(value)
       this.depositys.push(depo)

    }

    loan(value, installments){
        this.#balance += value
        const loan = new Loan(value, installments)
        this.loans.push(loan)
    }

    transfer(userDestiny, value){
        const transfer = new Tranfer( userDestiny, value)
        if(this == userSend){
            this.#balance += value
        }else{
            this.#balance -= value
        }
        transfers.push(transfer)
        
    }
}