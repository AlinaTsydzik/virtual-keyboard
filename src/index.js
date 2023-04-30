import KeyboardCreate from './js/KeyboardCreateClass';

const keyboardCreater = new KeyboardCreate();

const mainWrapper = document.createElement('div');
mainWrapper.className = 'main-wrapper';
document.body.append(mainWrapper);

mainWrapper.insertAdjacentHTML('afterbegin', `
<textarea inputmode="text" class="textarea"></textarea>`);

const textarea = document.querySelector('.textarea');

keyboardCreater.keyboardContainer.className = 'keyboard-container';
mainWrapper.append(keyboardCreater.keyboardContainer);

let keyboardMode = localStorage.getItem('mode');
if (!keyboardMode) keyboardMode = 'en';

let capsLockOn = false;

keyboardCreater.createKeyboardBtns(keyboardMode);

function changeLang() {
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
  keyboardCreater.createKeyboardLayout(keyboardMode);
}

document.addEventListener('keydown', (event) => {
  if (event.altKey && event.ctrlKey) {
    changeLang();
  }
});

function changeCapsLock() {
  const capsKey = document.querySelector('.btn-id27');
  if (keyboardMode === 'en') {
    keyboardMode = 'enCaps';
    capsKey.classList.add('active');
    capsLockOn = true;
  } else if (keyboardMode === 'ru') {
    keyboardMode = 'ruCaps';
    capsKey.classList.add('active');
    capsLockOn = true;
  } else if (keyboardMode === 'enCaps') {
    keyboardMode = 'en';
    capsKey.classList.remove('active');
    capsLockOn = false;
  } else if (keyboardMode === 'ruCaps') {
    keyboardMode = 'ru';
    capsKey.classList.remove('active');
    capsLockOn = false;
  }
  keyboardCreater.createKeyboardLayout(keyboardMode);
}

document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    changeCapsLock();
  }
});

function ShiftOn() {
  if (keyboardMode === 'en' || keyboardMode === 'enCaps') {
    keyboardMode = 'enShift';
  } else {
    keyboardMode = 'ruShift';
  }
  keyboardCreater.createKeyboardLayout(keyboardMode);
}

function ShiftOff() {
  if (keyboardMode === 'enShift' && capsLockOn === false) {
    keyboardMode = 'en';
  } else if (keyboardMode === 'ruShift' && capsLockOn === false) {
    keyboardMode = 'ru';
  } else if (keyboardMode === 'enShift' && capsLockOn === true) {
    keyboardMode = 'enCaps';
  } else if (keyboardMode === 'ruShift' && capsLockOn === true) {
    keyboardMode = 'ruCaps';
  }
  keyboardCreater.createKeyboardLayout(keyboardMode);
}

const shiftLRBtns = document.querySelectorAll('.btn-id41, .btn-id53');
shiftLRBtns.forEach((el) => el.addEventListener('mousedown', ShiftOn));
shiftLRBtns.forEach((el) => el.addEventListener('mouseup', ShiftOff));

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    ShiftOn();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    ShiftOff();
  }
});

function animationOn(event) {
  if (event.code === 'CapsLock') return;

  for (let i = 0; i < keyboardCreater.keyCode.length; i += 1) {
    const keyId = document.getElementById(`${keyboardCreater.keyCode[i]}`);
    if (event.code === keyId.id) {
      keyId.classList.add('active');
    }
  }
}
function animationOff(event) {
  if (event.code === 'CapsLock') return;

  for (let i = 0; i < keyboardCreater.keyCode.length; i += 1) {
    const keyId = document.getElementById(`${keyboardCreater.keyCode[i]}`);
    if (event.code === keyId.id) {
      keyId.classList.remove('active');
    }
  }
}
document.addEventListener('keydown', animationOn);
document.addEventListener('keyup', animationOff);

function focusInTextarea() {
  textarea.focus();
}
focusInTextarea();
document.addEventListener('click', focusInTextarea);
document.addEventListener('keydown', focusInTextarea);

function addInTextareaOnclick(event) {
  if (!event.target.classList.contains('btn')) return;

  let currentValue = event.target.textContent;
  if (event.target.classList.contains('btn-id13')) {
    currentValue = '';
    const position = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, position - 1) + textarea.value.slice(position);
    textarea.setSelectionRange(position - 1, position - 1);
  }

  if (event.target.classList.contains('btn-id14')) {
    currentValue = '    ';
  }

  if (event.target.classList.contains('btn-id27')) {
    currentValue = '';
    changeCapsLock();
  }

  if (event.target.classList.contains('btn-id40')) {
    currentValue = '';

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const cursor = `${textarea.value.slice(0, start)}\n`;

    textarea.value = `${textarea.value.slice(0, start)}\n${textarea.value.slice(end, textarea.value.length)}`;
    textarea.focus();
    textarea.setSelectionRange(cursor.length, cursor.length);
  }

  if (event.target.classList.contains('btn-id57')) {
    currentValue = ' ';
  }

  if (event.target.classList.contains('btn-id41')
    || event.target.classList.contains('btn-id53')
    || event.target.classList.contains('btn-id54')
    || event.target.classList.contains('btn-id55')
    || event.target.classList.contains('btn-id56')
    || event.target.classList.contains('btn-id58')
    || event.target.classList.contains('btn-id59')
    || event.target.classList.contains('btn-id63')) {
    currentValue = '';
  }

  textarea.value += `${currentValue}`;
}
document.addEventListener('click', addInTextareaOnclick);

document.onkeydown = (event) => {
  for (let i = 0; i < keyboardCreater.keyCodeSys.length; i += 1) {
    if (event.code === `${keyboardCreater.keyCodeSys[i]}`) return true;
  }
  return false;
};

let keyId = '';
function addCharInTextareaOnPress(event) {
  for (let i = 0; i < keyboardCreater.keyCodeSys.length; i += 1) {
    keyId = document.getElementById(`${keyboardCreater.keyCodeSys[i]}`);
    if (event.code === keyId.id) return;
  }

  if (event.code === 'Tab') {
    textarea.value += '    ';
    return;
  }

  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    textarea.value += '';
    return;
  }

  for (let i = 0; i < keyboardCreater.keyCode.length; i += 1) {
    keyId = document.getElementById(`${keyboardCreater.keyCode[i]}`);
    if (event.code === keyId.id) {
      textarea.value += keyId.textContent;
    }
  }
}
document.addEventListener('keydown', addCharInTextareaOnPress);
