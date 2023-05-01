//-английская клавиатура в нижнем регистре- 

const keyboardEngLowercase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

function initKeyboardEngLowercase() {
    let out = '';
    for (let i = 0; i < keyboardEngLowercase.length; i++) {
        if (i == 25 || i == 40 || i == 52) {
            // сделать перенос блоков 
        }
        out += '<div class="k-key" data-hover="'+keyboardEngLowercase[i]+'">' + keyboardEngLowercase[i] + '</div>'
    }
    
    document.querySelector('.keyboard-area').innerHTML = out;
}


//--русская клавиатура в нижнем регистре--

const keyboardRusLowercase = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Control', 'AltGraph', 'Control', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

function initKeyboardRusLowercase() {
    let out = '';
    for (let i = 0; i < keyboardRusLowercase.length; i++) {
        if (i == 25 || i == 40 || i == 52) {
            //сделать перенос блоков 
        }
        out += '<div class="k-key" data-hover="'+keyboardRusLowercase[i]+'">' + keyboardRusLowercase[i] + '</div>'
    }
    
    document.querySelector('.keyboard-area').innerHTML = out;

}

//--английская клавиатура в верхнем регистре--

const keyboardEngUppercase = keyboardEngLowercase.join(',').toLocaleUpperCase().split(',')

function initKeyboardEngUppercase() {
    let out = '';
    for (let i = 0; i < keyboardEngUppercase.length; i++) {
        if (i == 25 || i == 40 || i == 52) {
            //сделать перенос блоков 
        }
        out += '<div class="k-key" data-hover="'+keyboardEngUppercase[i]+'">' + keyboardEngUppercase[i] + '</div>'
    }
    
    document.querySelector('.keyboard-area').innerHTML = out;
}

//--английская клавиатура в верхнем регистре--

const keyboardRusUppercase = keyboardRusLowercase.join(',').toLocaleUpperCase().split(',')

function initKeyboardRusUppercase() {
    let out = '';
    for (let i = 0; i < keyboardRusUppercase.length; i++) {
        if (i == 25 || i == 40 || i == 52) {
            //сделать перенос блоков 
        }
        out += '<div class="k-key" data-hover="'+keyboardRusUppercase[i]+'">' + keyboardRusUppercase[i] + '</div>'
    }
    
    document.querySelector('.keyboard-area').innerHTML = out;
}


export {initKeyboardEngLowercase, initKeyboardRusLowercase, initKeyboardEngUppercase, initKeyboardRusUppercase}