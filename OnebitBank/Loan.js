const Installment = require("./Installment")

module.exports = class Loan{
   static #fess
    constructor(value, numberOfInstallments ){
        this.value = value
        this.installments = numberOfInstallments
        this.data = new Data()
        this.parcelas = []
        
        const valueOfParcela = (value/numberOfInstallments)+ this.#fess
        const i = 0
        
        if(i<+ numberOfInstallments){
            const installment = new Installment(valueOfParcela)
            installment.number = i
            i++
            this.parcelas.push(installment)

        }
       
    }

    static getFess(){
        return this.#fess
    }
    static setFess(value){
        this.#fess = value
    }

}