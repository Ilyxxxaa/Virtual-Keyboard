import Template from './template';
import keyInfo from './keyInfo';

function createKeyboard(lang) {
  const abc = lang;
  const keyboard = new Template('div', 'keyboard', false);
  for (let i = 0; i < keyInfo.length; i += 1) {
    // const a;
    const a = new Template('div', `row${i} row`, keyboard.element);
    for (let j = 0; j < keyInfo[i].length; j += 1) {
      // const b;
      const b = new Template(
        'div',
        `${keyInfo[i][j].class}`,
        a.element,
        `${keyInfo[i][j].key[abc]}`,
      );
    }
  }
  return keyboard;
}

export default createKeyboard;
