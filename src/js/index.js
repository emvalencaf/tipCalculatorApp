import { TipView } from "./View/Tip.view.js";
import { TipService } from "./Service/Tip.service.js"; 
import { TipController } from "./Controller/Tip.controller.js";

//DOM
const containerCalculator = document.querySelector(".tip-calculator-container")
const containerResult = document.querySelector(".result-container")

//módulos
const tipService = new TipService()
const tipView = new TipView(containerCalculator, containerResult)
const tipController = new TipController(tipView, tipService)


function inputEvent(){
    tipController.inputBill()
}

function getLabel(element){
    if(element.nodeName === "LABEL") return element

    if(element.nodeName === "INPUT" && element.name === "radio-percent") return element.parentElement

    return null
}

//Eventos DOM
    //Calcular os valores com o evento input
    tipView.inputBill.addEventListener("input", inputEvent)
    tipView.inputPeople.addEventListener("input", inputEvent)
    tipView.inputCustom.addEventListener("input", inputEvent)

    //Apagar mensagens de error
    tipView.inputBill.addEventListener("focus", () => tipController.clearError("inputBill"))
    tipView.inputPeople.addEventListener("focus", () => tipController.clearError("inputPeople"))
    tipView.inputCustom.addEventListener("focus", () => tipController.clearError("radio"))

    //Colocar a classe active no label (parentElement) do input:radio
    tipView.calculatorContainer.querySelector(".container-percent-radio").addEventListener("click",(e)=>{
        
        const label = getLabel(e.target)
    
        if(label) return tipController.clickedPercentRadio(label)

        if(e.target === tipView.inputCustom) return tipController.clearClickedPercentRadio()
    })

    //Reset button
    tipView.resultContainer.querySelector("button").addEventListener("click", e =>{

        tipController.reset()
    })

/*
const formBill = document.querySelector("#formBill")

formBill.addEventListener("submit", e =>{

    e.preventDefault()

    const billValue = formBill.querySelector("#billValue").value

    console.log(billValue)

    const inputRadios = [...formBill.querySelectorAll('input[type="radio"]')]
    
    const checked = inputRadios.find(radio => radio.checked)

    console.log(checked)

    const tipValue = calculateTipValue(billValue, checked.value)

    console.log(tipValue)
})

function calculateTipValue(billValue, tipPercent){

    if(typeof tipPercent !== "number") tipPercent = Number(tipPercent)

    if(typeof billValue !== "number") billValue = Number(billValue)

    return billValue * (tipPercent / 100)
}*/