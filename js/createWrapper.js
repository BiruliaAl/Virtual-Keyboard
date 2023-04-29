// export default class CreateElement {
//     constructor(name, className) {
//         this.name = name;
//         this.className = className;
//         this.parent = document.body;
//     }

//     render() {
//         const element = document.createElement( `${this.name}`);
//         element.classList.add(`${this.className}`);
//         this.parent.append(element);
//     }
//     }



let wrapper = document.createElement('div');
wrapper.classList.add ('keyboard');
document.body.append(wrapper);

let tittle = document.createElement('h3');
tittle.classList.add ('text');
tittle.textContent = 'операционная система Windows, переключение раскладки shift + alt';
wrapper.append(tittle);

let textArea = document.createElement('div');
textArea.classList.add ('keyboard');
textArea.classList.add ('text-area');
wrapper.append(textArea);

let keyboardArea = document.createElement('div');
keyboardArea.classList.add ('keyboard');
wrapper.append(keyboardArea);

export {wrapper, textArea, keyboardArea, tittle}