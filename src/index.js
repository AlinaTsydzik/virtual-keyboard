const keyCode = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Backslash',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'AltLeft',
  'CommandLeft',
  'Space',
  'CommandRight',
  'AltRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
];

const keyValueObj = {
  en: {
    Backquote: '`',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: '←',
    Tab: 'Tab',
    KeyQ: 'q',
    KeyW: 'w',
    KeyE: 'e',
    KeyR: 'r',
    KeyT: 't',
    KeyY: 'y',
    KeyU: 'u',
    KeyI: 'i',
    KeyO: 'o',
    KeyP: 'p',
    BracketLeft: '[',
    BracketRight: ']',
    CapsLock: 'CapsLock',
    KeyA: 'a',
    KeyS: 's',
    KeyD: 'd',
    KeyF: 'f',
    KeyG: 'g',
    KeyH: 'h',
    KeyJ: 'j',
    KeyK: 'k',
    KeyL: 'l',
    Semicolon: ';',
    Quote: '\'',
    Backslash: '\\',
    Enter: '↵',
    ShiftLeft: 'Shift',
    KeyZ: 'z',
    KeyX: 'x',
    KeyC: 'c',
    KeyV: 'v',
    KeyB: 'b',
    KeyN: 'n',
    KeyM: 'm',
    Comma: ',',
    Period: '.',
    Slash: '/',
    ArrowUp: '▲',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    AltLeft: 'Alt',
    CommandLeft: 'Cmd',
    Space: '',
    CommandRight: 'Cmd',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
  },
  enCaps: {
    Backquote: '`',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'Q',
    KeyW: 'W',
    KeyE: 'E',
    KeyR: 'R',
    KeyT: 'T',
    KeyY: 'Y',
    KeyU: 'U',
    KeyI: 'I',
    KeyO: 'O',
    KeyP: 'P',
    BracketLeft: '[',
    BracketRight: ']',
    CapsLock: 'CapsLock',
    KeyA: 'A',
    KeyS: 'S',
    KeyD: 'D',
    KeyF: 'F',
    KeyG: 'G',
    KeyH: 'H',
    KeyJ: 'J',
    KeyK: 'K',
    KeyL: 'L',
    Semicolon: ';',
    Quote: '\'',
    Backslash: '\\',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'Z',
    KeyX: 'X',
    KeyC: 'C',
    KeyV: 'V',
    KeyB: 'B',
    KeyN: 'N',
    KeyM: 'M',
    Comma: ',',
    Period: '.',
    Slash: '/',
    ArrowUp: '▲',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    AltLeft: 'Alt',
    CommandLeft: 'Cmd',
    Space: '',
    CommandRight: 'Cmd',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
  },

  enShift: {
    Backquote: '~',
    Digit1: '!',
    Digit2: '@',
    Digit3: '#',
    Digit4: '$',
    Digit5: '%',
    Digit6: '^',
    Digit7: '&',
    Digit8: '*',
    Digit9: '(',
    Digit0: ')',
    Minus: '_',
    Equal: '+',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'Q',
    KeyW: 'W',
    KeyE: 'E',
    KeyR: 'R',
    KeyT: 'T',
    KeyY: 'Y',
    KeyU: 'U',
    KeyI: 'I',
    KeyO: 'O',
    KeyP: 'P',
    BracketLeft: '{',
    BracketRight: '}',
    CapsLock: 'CapsLock',
    KeyA: 'A',
    KeyS: 'S',
    KeyD: 'D',
    KeyF: 'F',
    KeyG: 'G',
    KeyH: 'H',
    KeyJ: 'J',
    KeyK: 'K',
    KeyL: 'L',
    Semicolon: ':',
    Quote: '"',
    Backslash: '|',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'Z',
    KeyX: 'X',
    KeyC: 'C',
    KeyV: 'V',
    KeyB: 'B',
    KeyN: 'N',
    KeyM: 'M',
    Comma: '<',
    Period: '>',
    Slash: '?',
    ArrowUp: '▲',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    AltLeft: 'Alt',
    CommandLeft: 'Cmd',
    Space: '',
    CommandRight: 'Cmd',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
  },

  ru: {
    Backquote: ']',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'й',
    KeyW: 'ц',
    KeyE: 'у',
    KeyR: 'к',
    KeyT: 'е',
    KeyY: 'н',
    KeyU: 'г',
    KeyI: 'ш',
    KeyO: 'щ',
    KeyP: 'з',
    BracketLeft: 'х',
    BracketRight: 'ъ',
    CapsLock: 'CapsLock',
    KeyA: 'ф',
    KeyS: 'ы',
    KeyD: 'в',
    KeyF: 'а',
    KeyG: 'п',
    KeyH: 'р',
    KeyJ: 'о',
    KeyK: 'л',
    KeyL: 'д',
    Semicolon: 'ж',
    Quote: 'э',
    Backslash: 'ё',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'я',
    KeyX: 'ч',
    KeyC: 'с',
    KeyV: 'м',
    KeyB: 'и',
    KeyN: 'т',
    KeyM: 'ь',
    Comma: 'б',
    Period: 'ю',
    Slash: '/',
    ArrowUp: '▲',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    AltLeft: 'Alt',
    CommandLeft: 'Cmd',
    Space: '',
    CommandRight: 'Cmd',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
  },

  ruCaps: {
    Backquote: ']',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'Й',
    KeyW: 'Ц',
    KeyE: 'У',
    KeyR: 'К',
    KeyT: 'Е',
    KeyY: 'Н',
    KeyU: 'Г',
    KeyI: 'Ш',
    KeyO: 'Щ',
    KeyP: 'З',
    BracketLeft: 'Х',
    BracketRight: 'Ъ',
    CapsLock: 'CapsLock',
    KeyA: 'Ф',
    KeyS: 'Ы',
    KeyD: 'В',
    KeyF: 'А',
    KeyG: 'П',
    KeyH: 'Р',
    KeyJ: 'О',
    KeyK: 'Л',
    KeyL: 'Д',
    Semicolon: 'Ж',
    Quote: 'Э',
    Backslash: 'Ё',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'Я',
    KeyX: 'Ч',
    KeyC: 'С',
    KeyV: 'М',
    KeyB: 'И',
    KeyN: 'Т',
    KeyM: 'Ь',
    Comma: 'Б',
    Period: 'Ю',
    Slash: '/',
    ArrowUp: '▲',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    AltLeft: 'Alt',
    CommandLeft: 'Cmd',
    Space: '',
    CommandRight: 'Cmd',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
  },

  ruShift: {
    Backquote: '[',
    Digit1: '!',
    Digit2: '"',
    Digit3: '№',
    Digit4: '%',
    Digit5: ':',
    Digit6: ',',
    Digit7: '.',
    Digit8: '*',
    Digit9: '(',
    Digit0: ')',
    Minus: '_',
    Equal: '+',
    Backspace: 'Backspace',
    Tab: 'Tab',
    KeyQ: 'Й',
    KeyW: 'Ц',
    KeyE: 'У',
    KeyR: 'К',
    KeyT: 'Е',
    KeyY: 'Н',
    KeyU: 'Г',
    KeyI: 'Ш',
    KeyO: 'Щ',
    KeyP: 'З',
    BracketLeft: 'Х',
    BracketRight: 'Ъ',
    CapsLock: 'CapsLock',
    KeyA: 'Ф',
    KeyS: 'Ы',
    KeyD: 'В',
    KeyF: 'А',
    KeyG: 'П',
    KeyH: 'Р',
    KeyJ: 'О',
    KeyK: 'Л',
    KeyL: 'Д',
    Semicolon: 'Ж',
    Quote: 'Э',
    Backslash: 'Ё',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    KeyZ: 'Я',
    KeyX: 'Ч',
    KeyC: 'С',
    KeyV: 'М',
    KeyB: 'И',
    KeyN: 'Т',
    KeyM: 'Ь',
    Comma: 'Б',
    Period: 'Ю',
    Slash: '?',
    ArrowUp: '▲',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    AltLeft: 'Alt',
    CommandLeft: 'Cmd',
    Space: '',
    CommandRight: 'Cmd',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
  },
};

const mainWrapper = document.createElement('div');
mainWrapper.className = 'main-wrapper';
document.body.append(mainWrapper);

mainWrapper.insertAdjacentHTML('afterbegin', `
<textarea inputmode="text" class="textarea"></textarea>`);

const textarea = document.querySelector('.textarea');
const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard-container';
mainWrapper.append(keyboardContainer);

let keyboardMode = 'en';

function createKeyboardLayout() {
  const keyValue = document.querySelectorAll('.btn');
  keyValue.forEach((e) => { e.textContent = keyValueObj[keyboardMode][e.dataset.key]; });
}

function createKeyboardBtns() {
  for (let i = 0; i < keyCode.length; i += 1) {
    keyboardContainer.insertAdjacentHTML('beforeend', `
        <button id="${keyCode[i]}" class="btn  btn-id${i}" data-key="${keyCode[i]}"></button>`);
  }
  createKeyboardLayout();
}
createKeyboardBtns();

function changeKeyboardLang() {
  if (keyboardMode === 'en') {
    keyboardMode = 'ru';
    localStorage.setItem('mode', 'ru');
  } else if (keyboardMode === 'ru') {
    keyboardMode = 'en';
    localStorage.setItem('mode', 'en');
  } else if (keyboardMode === 'enCaps') {
    keyboardMode = 'ruCaps';
    localStorage.setItem('mode', 'ru');
  } else if (keyboardMode === 'ruCaps') {
    keyboardMode = 'enCaps';
    localStorage.setItem('mode', 'en');
  }
  createKeyboardLayout();
}

document.addEventListener('keydown', (event) => {
  if (event.metaKey && event.altKey) {
    changeKeyboardLang();
  }
});
