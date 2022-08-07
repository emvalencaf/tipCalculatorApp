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
}