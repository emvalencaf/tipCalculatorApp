export class TipController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    clickedPercentRadio(radio){
        this.view.renderClickedPercentRadio(radio)
    }

    inputBill(){

        let obj = this.checkAllInput()
        
        if(!obj) return console.log("error")

        obj = this.service.calculateTip(...Object.values(obj))

        this.view.renderResult(obj)
        
    }

    checkAllInput(){
        if(!this.view.inputBill.value) return null

        if(!this.view.inputPeople.value) return null

        const inputRadio = this.view.inputsRadio.find(radio => radio.checked === true)

        if(!inputRadio) return null
        
        if(!this.view.inputCustom.value && !inputRadio) return null
        
        console.log("sucesso")
        return {
            bill: this.view.inputBill.value,
            people: this.view.inputPeople.value,
            percent: inputRadio? inputRadio.value : this.view.inputCustom.value
        }
    }
}