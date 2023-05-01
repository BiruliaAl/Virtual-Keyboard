
import {wrapper, textArea, keyboardArea, tittle} from './createWrapper.js'

import {initKeyboardEngLowercase, initKeyboardRusLowercase, initKeyboardEngUppercase, initKeyboardRusUppercase} from './pressKeyboard.js'

initKeyboardEngLowercase(); 

let textAreaMessege;
const keyboard = document.querySelectorAll('.k-key');
const keyboardClick = document.querySelectorAll('.keyboard-area');


document.addEventListener('keypress', (event) => {
    keyboard.forEach((element) => {
        if (element.dataset.hover == event.key) {
            textAreaMessege = [];
            textAreaMessege.push(event.key);
            textArea.innerHTML += textAreaMessege;
        }
    })
})

document.addEventListener('keydown', (event) => {
    if (event.code == "Backspace") {
        textArea.innerHTML = textArea.innerHTML.slice(0, textArea.innerHTML.length - 1);
    }
    if (event.altKey) {
        initKeyboardRusLowercase();
    }
    if (event.ctrlKey) {
        initKeyboardEngLowercase();
    }
    keyboard.forEach((element) => {
        if (element.dataset.hover == event.key) {
            element.classList.add('k-key_hover'); 
        }
        if (event.code == "ArrowUp") {
            keyboard[59].classList.add('k-key_hover'); 
        }
        if (event.code == "ArrowLeft") {
            keyboard[58].classList.add('k-key_hover'); 
        }
        if (event.code == "ArrowRight") {
            keyboard[60].classList.add('k-key_hover'); 
        }
        if (event.code == "ArrowDown") {
            keyboard[61].classList.add('k-key_hover'); 
        }
    })   
})

document.addEventListener('keyup', (event) => {
    keyboard.forEach((element) => {
        if(element.classList.contains('k-key_hover')) {
            element.classList.remove('k-key_hover');
        }
    })
})

// keyboardClick.forEach ((item), () => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('k-key_hover');
//     })
// })








