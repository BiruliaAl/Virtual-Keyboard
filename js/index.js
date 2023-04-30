
import {wrapper, textArea, keyboardArea, tittle} from './createWrapper.js'
// import {keyboardEngLowercase} from './pressKeyboard.js'

const keyboardEngLowercase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

// document.addEventListener('keydown', (event) => {
//     keyboardEngLowercase.push(event.key)
//     console.log(keyboardEngLowercase)
// })

function initKeyboardEngLowercase() {
    let out = '';
    for (let i = 0; i < keyboardEngLowercase.length; i++) {
        out += '<div class="k-key">' + keyboardEngLowercase[i] + '</div>'
    }
    document.querySelector('.keyboard-area').innerHTML = out;
}
initKeyboardEngLowercase() 
