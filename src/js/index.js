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

console.log(tipView)

function inputEvent(e){
    if(e.currentTarget === tipView.inputBill) return tipController.inputBill()
}

//Eventos DOM
tipView.inputBill.addEventListener("input", inputEvent)
tipView.calculatorContainer.querySelector(".container-percent-radio").addEventListener("click",(e)=>{
    const label = e.target.nodeName === "LABEL"? e.target : e.target.parentElement
    
    tipController.clickedPercentRadio(label)
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