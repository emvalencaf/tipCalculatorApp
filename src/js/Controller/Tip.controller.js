export class TipController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    getTipValue(billValue, tipsRadio){

        if(typeof billValue !== "number") billValue = Number(billValue)

        this.isBillValueValid(billValue)
        
        const tipRadio = tipsRadio.find(radio => radio.checked)

        this.isTipPercentValid(tipRadio)

    }

    isBillValueValid(billValue){
        if(!billValue) throw new Error("ERROR: bill value is invalid")
    }

    isTipPercentValid(tipPercentChecked){
        if(!tipPercentChecked) throw new Error("ERROR: you must choose one of the tip percent")
    }
}