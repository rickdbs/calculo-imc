import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'


const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/**
 3 maneiras de criar e atribuir função a um evento

form.onsubmit = () => {}

form.onsubmit = handleSubmit

function handleSubmit() {

}

 */

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber){
        AlertError.open()
        return;
    }

    AlertError.close()


    const result = calculateIMC(weight, height)
    displayResultMessage(result)

}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

/*
inputWeight && inputHeight.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event){
    if(event.key != ''){
        AlertError.close()
    }
}
*/



