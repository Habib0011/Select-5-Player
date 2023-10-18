function InputID(inputId){
    const perPlayerInputField = document.getElementById(inputId)
    const perPlayerInputFieldString = perPlayerInputField.value
    const perPlayerBudget = parseFloat(perPlayerInputFieldString)

    if(isNaN(perPlayerBudget)){
        alert('please provide a number')
        
    }
    else{
        return perPlayerBudget
    }
    
}
function perPlayerCalculation(){
    const perPlayerInputField = document.getElementById('per-player-input')
    const ids = document.querySelectorAll('.item')
    const idsLength = ids.length
    const perPlayerInputFieldString = perPlayerInputField.value
    const perPlayerBudget = parseFloat(perPlayerInputFieldString)
    if(isNaN(perPlayerBudget)){
        alert('please provide a number')
        
    }
    const multiply = perPlayerBudget * idsLength;
    const showMulti = document.getElementById('new-value');
    showMulti.innerText = multiply;
    return multiply
}

function calculation(){
    const manager = InputID('manager-id')
    const coach = InputID('coach-id')
    const playerMulti = perPlayerCalculation()
    const total = manager + coach + playerMulti ;
    const setID = document.getElementById('total-Cm')
    setID.innerText = total;
}
