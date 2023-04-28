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

keyboardCreater.createKeyboardBtns();

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
