export class TipController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    clickedPercentRadio(label){

        this.view.renderClickedPercentRadio(label)
        this.clearError("radio")
        if(this.view.inputBill.value && this.view.inputPeople.value) this.inputBill()

    }

    clearClickedPercentRadio(){
        this.view.clearClickedPercentRadio()
        this.clearError("radio")
    }

    inputBill(){

        try {
            let obj = this.checkAllInput()
            
            obj = this.service.calculateTip(...Object.values(obj))

            this.view.renderResult(obj)
        
        } catch (error) {
            this.view.showError(error.message)
        }

    }

    clearError(input){
        this.view.clearError(input)
    }

    checkAllInput(){
        
        if(!this.view.inputBill.value) throw new Error("can't be lower than zero")

        if(!this.view.inputPeople.value) throw new Error("can't be zero")

        const inputRadio = this.view.inputsRadio.find(radio => radio.checked === true)
     
        if(!this.view.inputCustom.value && !inputRadio) throw new Error("must chosen or set a percent")
        
        return {
            bill: Number(this.view.inputBill.value),
            people: Number(this.view.inputPeople.value),
            percent: inputRadio? Number(inputRadio.value) : Number(this.view.inputCustom.value)
        }
    }

    reset(){
        
        this.view.clear()

    }
}