
import {wrapper, textArea, keyboardArea, tittle} from './createWrapper.js'

import {initKeyboardEngLowercase, initKeyboardRusLowercase, initKeyboardEngUppercase, initKeyboardRusUppercase} from './pressKeyboard.js'

initKeyboardEngLowercase(); 

let textAreaMessege;
const keyboard = document.querySelectorAll('.k-key');

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
    console.dir(event)
    if (event.code == "Backspace") {
        // textArea.innerHTML
        textArea.innerHTML = textArea.innerHTML.slice(0, textArea.innerHTML.length - 1);
    }
    if (event.shiftKey && event.altKey) {
        initKeyboardRusLowercase();
    }
    if (event.shiftKey && event.ctrlKey) {
        initKeyboardEngLowercase();
    }
    keyboard.forEach((element) => {
        if(element.classList.contains('k-key_hover')) {
            element.classList.remove('k-key_hover');
        }
        if (element.dataset.hover == event.key) {
            element.classList.add('k-key_hover');
        }
    })   
})









