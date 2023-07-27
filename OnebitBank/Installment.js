module.exports = class Installment{
  constructor(value){
        this.value = value
        this.number = 0
        situation = 0
  }

  pay(){
    this.situation = 1
  }
 

}