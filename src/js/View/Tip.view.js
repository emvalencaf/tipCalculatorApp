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
        this.resetButton = this.resultContainer.querySelector("button")
    }
    
    renderResult(obj){
        this.tipPerPerson.textContent = `${obj.perPerson.toLocaleString("en-US",{style:"currency", currency:"USD"})}`
        this.totalTip.textContent = `${obj.total.toLocaleString("en-US", {style:"currency", currency:"USD"})}`

        if(this.resetButton.disabled) this.resetButton.disabled = false
    }

    renderClickedPercentRadio(label){

        this.inputsRadio.forEach(inputRadio => {

            if(!inputRadio.checked) inputRadio.parentElement.classList.remove("active")

        })

        if(!label) return

        if(label.nodeName === "LABEL") label.classList.add("active")
    }

    clearClickedPercentRadio(){
        this.inputsRadio.forEach(inputRadio =>{
            inputRadio.checked = false
            inputRadio.parentElement.classList.remove("active")
        })
    }

    clear(){
        
        this.inputCustom.value = ""
        this.inputPeople.value = ""
        this.inputsRadio.forEach(input => input.checked = false)
        this.renderClickedPercentRadio()
        this.inputBill.value = ""
        this.clearError()

        this.tipPerPerson.textContent = "$0.00"
        this.totalTip.textContent = "$0.00"
        this.resetButton.disabled = true

    }

    showError(msg){
        if(!this.inputBill.value) {
            this.inputBill.blur()
            return this.calculatorContainer.querySelectorAll('[data-error="inputBill"]').forEach(error => error.classList.add("error-active"))
        }

        if(!this.inputPeople.value) {
            return this.calculatorContainer.querySelectorAll('[data-error="inputPeople"]').forEach(error => error.classList.add("error-active"))
        }

        const radio = this.inputsRadio.find(inputRadio => inputRadio.checked === true)

        if(!radio && !this.inputCustom.value) return this.calculatorContainer.querySelectorAll('[data-error="radio"]').forEach(error => error.classList.add("error-active"))
    }

    clearError(input){
        if(!input) return this.calculatorContainer.querySelectorAll(`[data-error]`).forEach(error => error.classList.remove("error-active"))

        this.calculatorContainer.querySelectorAll(`[data-error="${input}"]`).forEach(error => error.classList.remove("error-active"))
    }
}
