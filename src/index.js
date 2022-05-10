import Template from './template';
import './styles/style.scss';
import createKeyboard from './keyboard';

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
  'To change the language press the "ALT + SHIFT" combination',
);

let lang = localStorage.getItem('lang');
function changeLang() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    if (lang === 'en') {
      localStorage.removeItem('lang', 'en');
      localStorage.setItem('lang', 'ru');
      lang = localStorage.getItem('lang');
    } else {
      localStorage.removeItem('lang', 'ru');
      localStorage.setItem('lang', 'en');
      lang = localStorage.getItem('lang');
    }
  } else {
    localStorage.setItem('lang', 'en');
    lang = localStorage.getItem('lang');
  }
}

let keyboard = createKeyboard(lang);
const inputText = new Template('textarea', 'input', container.element);

function insertKeyboard() {
  container.element.appendChild(keyboard.element);
  const keys = document.querySelectorAll('.key');
  const shiftLeft = document.querySelector('.key_leftshift');
  const shiftRight = document.querySelector('.key_rightshift');
  // const enter = document.querySelector('.key_enter');
  const capsLock = document.querySelector('.CapsLock');
  capsLock.appendChild(new Template('div', 'capsIndicator').element);
  const capsIndicator = document.querySelector('.capsIndicator');
  const tab = document.querySelector('.Tab');
  const altLeft = document.querySelector('.AltLeft');
  const altRight = document.querySelector('.AltRight');
  const controlLeft = document.querySelector('.ControlLeft');
  const controlRight = document.querySelector('.ControlRight');
  const ArrowUp = document.querySelector('.ArrowUp');
  const ArrowDown = document.querySelector('.ArrowDown');
  const ArrowLeft = document.querySelector('.ArrowLeft');
  const ArrowRight = document.querySelector('.ArrowRight');

  for (let i = 0; i < keys.length; i += 1) {
    keys[i].setAttribute('keyname', keys[i].textContent);
    keys[i].setAttribute('upperCaseName', keys[i].textContent.toUpperCase());
  }

  function keyDown(e) {
    for (let i = 0; i < keys.length; i += 1) {
      inputText.element.focus();

      if (
        (e.key !== 'Shift' &&
          e.key !== 'Alt' &&
          e.key !== 'Control' &&
          e.key !== 'AltGraph' &&
          e.key !== 'CapsLock' &&
          e.key === keys[i].getAttribute('keyname')) ||
        e.key === keys[i].getAttribute('upperCaseName')
      ) {
        inputText.element.focus();
        keys[i].classList.add('active');
      }
      if (e.code === 'CapsLock') {
        e.preventDefault();
        capsLock.classList.add('active');
        if (capsIndicator.classList.contains('capsIndicator-active')) {
          capsIndicator.classList.remove('capsIndicator-active');
        } else {
          capsIndicator.classList.add('capsIndicator-active');
        }
      }
      if (e.code === 'Tab') {
        e.preventDefault();
        tab.classList.add('active');
      }
      if (e.code === 'ShiftLeft') {
        shiftLeft.classList.add('active');
      }
      if (e.code === 'ShiftRight') {
        shiftRight.classList.add('active');
      }
      if (e.code === 'AltLeft') {
        e.preventDefault();
        altLeft.classList.add('active');
      }
      if (e.code === 'AltRight') {
        e.preventDefault();
        altRight.classList.add('active');
      }
      if (e.code === 'ControlLeft') {
        e.preventDefault();
        controlLeft.classList.add('active');
      }
      if (e.code === 'ControlRight') {
        e.preventDefault();
        controlRight.classList.add('active');
      }
      if (e.key === 'AltGraph') {
        e.preventDefault();
      }
      if (e.key === 'ArrowUp') {
        ArrowUp.classList.add('active');
      }
      if (e.key === 'ArrowDown') {
        ArrowDown.classList.add('active');
      }
      if (e.key === 'ArrowLeft') {
        ArrowLeft.classList.add('active');
      }
      if (e.key === 'ArrowRight') {
        ArrowRight.classList.add('active');
      }
    }
  }

  function keyUp(e) {
    for (let i = 0; i < keys.length; i += 1) {
      if (
        (e.key !== 'Shift' &&
          e.key !== 'Alt' &&
          e.key !== 'Control' &&
          e.key !== 'AltGraph' &&
          e.key !== 'CapsLock' &&
          e.key === keys[i].getAttribute('keyname')) ||
        e.key === keys[i].getAttribute('upperCaseName')
      ) {
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
      }
      if (e.code === 'CapsLock') {
        e.preventDefault();
        capsLock.classList.remove('active');
        capsLock.classList.add('remove');
      }
      if (e.code === 'Tab') {
        e.preventDefault();
        tab.classList.remove('active');
        tab.classList.add('remove');
        window.addEventListener('keydown', keyDown);
      }
      if (e.code === 'ShiftLeft') {
        shiftLeft.classList.remove('active');
        shiftLeft.classList.add('remove');
      }
      if (e.code === 'ShiftRight') {
        shiftRight.classList.remove('active');
        shiftRight.classList.add('remove');
      }
      if (e.code === 'AltLeft') {
        altLeft.classList.remove('active');
        altLeft.classList.add('remove');
      }
      if (e.code === 'AltRight') {
        altRight.classList.remove('active');
        altRight.classList.add('remove');
      }
      if (e.code === 'ControlLeft') {
        controlLeft.classList.remove('active');
        controlLeft.classList.add('remove');
      }
      if (e.code === 'ControlRight') {
        controlRight.classList.remove('active');
        controlRight.classList.add('remove');
      }
      if (e.key === 'ArrowUp') {
        ArrowUp.classList.remove('active');
        ArrowUp.classList.add('remove');
      }
      if (e.key === 'ArrowDown') {
        ArrowDown.classList.remove('active');
        ArrowDown.classList.add('remove');
      }
      if (e.key === 'ArrowLeft') {
        ArrowLeft.classList.remove('active');
        ArrowLeft.classList.add('remove');
      }
      if (e.key === 'ArrowRight') {
        ArrowRight.classList.remove('active');
        ArrowRight.classList.add('remove');
      }
      setTimeout(() => {
        keys[i].classList.remove('remove');
      }, 600);
    }
  }
  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);
}
insertKeyboard();

window.addEventListener('keydown', (e) => {
  if (e.code === 'Tab') {
    inputText.element.value += '  ';
  }
  if (e.key === 'Shift' && e.altKey === true) {
    changeLang();
    keyboard.element.remove();
    keyboard = createKeyboard(lang);
    insertKeyboard();
  }
});
