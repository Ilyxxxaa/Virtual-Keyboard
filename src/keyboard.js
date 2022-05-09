import Template from './template';
import keyInfo from './keyInfo';

// class KeyBoard extends Template {
//   constructor(parent) {
//     super(parent, 'div', 'keyboard');
//     keyInfo.forEach((e) => {
//       this.row = new Template(this.element, 'div', 'row');
//       for (let i = 0; i < e.length; i += 1) {
//         this.btn = new Template(this.row.element, 'button', `${e[i].class}`);
//         this.btn.element.textContent = `${e[i].key.en}`;
//       }
//     });
//   }
// }

// const createKeyboard = () => new KeyBoard(document.querySelector('.container'));
const keyboard = new Template('div', 'keyboard', false);
for (let i = 0; i < keyInfo.length; i += 1) {
  let a;
  a = new Template('div', `row${i} row`, keyboard.element);
  for (let j = 0; j < keyInfo[i].length; j += 1) {
    let b;
    b = new Template(
      'div',
      `${keyInfo[i][j].class}`,
      a.element,
      `${keyInfo[i][j].key.en}`,
    );
  }
}
export default keyboard;
