import Template from './template';
import './styles/style.scss';
import keyboard from './keyboard';

const container = new Template('div', 'container', document.body);
const descr = new Template(
  'div',
  'descr',
  container.element,
  'Virtual Keyboard',
);

const descrMake = new Template(
  'div',
  'descr__make',
  descr.element,
  'maked on Windows',
);
const descrLang = new Template(
  'div',
  'descr__lang',
  descr.element,
  'To change the language press the "ALT + CTRL" combination',
);
console.log(keyboard.element);
// container.element.appendChild(keyboard.element);
