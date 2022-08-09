export class TipView{
    constructor(calculatorContainer, resultContainer){
        this.calculatorContainer = calculatorContainer
        this.resultContainer = resultContainer


        this.inputBill = this.calculatorContainer.querySelector("#input-bill")
        this.inputPeople = this.calculatorContainer.querySelector("#input-people")
        this.inputsRadio = [...this.calculatorContainer.querySelectorAll('input[name="radio-percent"]')]
        this.inputCustom = this.calculatorContainer.querySelector("#percent-custom")

        this.tipPerPerson = this.resultContainer.querySelector("#tip-per-person")
        this.totalTip = this.resultContainer.querySelector("#total-tip")
    }
    
    renderResult(obj){
        this.tipPerPerson.textContent = `${obj.perPerson.toLocaleString("en-US",{style:"currency", currency:"USD"})}`
        this.totalTip.textContent = `${obj.total.toLocaleString("en-US", {style:"currency", currency:"USD"})}`
    }

    renderClickedPercentRadio(radio){

        this.inputsRadio.forEach(inputRadio => {
            inputRadio.parentElement.classList.remove("active")
        })

        if(radio === this.inputCustom) {
            this.inputsRadio.find(inputRadio => inputRadio.checked).checked = false
        }
        
        return radio.classList.add("active")
    }
}
