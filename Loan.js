module.exports = class Loan{
   static #fess
    constructor(value, numberOfInstallments ){
        this.value = value
        this.installments = numberOfInstallments
        this.data = new Data()
    }

    static getFess(){
        return this.#fess
    }
    static setFess(value){
        this.#fess = value
    }

}