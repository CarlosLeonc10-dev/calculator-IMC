import {Modal} from './modal.js'
import {AlertError} from './alert-error.js'
import { notAllNumber,  IMC} from './utils.js';

// variaveis
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event){
    event.preventDefault()

    
    const weight = inputWeight.value 
    const height = inputHeight.value 

    const showAlertError = notAllNumber(weight) || notAllNumber(height)

    if(showAlertError){
        AlertError.open()
        return;
    }

    AlertError.close()
   
    const result = IMC(weight, height)
    
    const mesage = `Seu IMC É ${result}`
    Modal.message.innerText = mesage

    Modal.open()
}

inputWeight.oninput = function(){
    AlertError.close()
}
inputHeight.oninput = function(){
    AlertError.close()
}
