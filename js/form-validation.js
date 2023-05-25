const inputs = document.querySelectorAll('.val');

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    let inputValue = input.value;
    let resultReg = '';
    let newValue = '';
    if (input.classList.contains('val-telegram')) {
      const regVal = /[a-z0-9\.\-\_]+/gis;
      let regArr = inputValue.matchAll(regVal);

      for (let elem of regArr) {
        resultReg += String(elem);
      }

      newValue = '@' + resultReg;
      if (newValue.length < 4) {
        input.classList.add('novalid');
      } else {
        input.classList.remove('novalid');
      }
    }

    if (input.classList.contains('val-name')) {
      const regVal = /[a-zа-я\s\-]+/gis;
      const regName = /([a-zа-я])+/g;
      let regArr = inputValue.matchAll(regVal);
      for (let elem of regArr) {
        resultReg += String(elem);
      }
      newValue = resultReg;

      if (newValue.length >= 3 && regName.test(newValue)) {
        input.classList.remove('novalid');
      } else {
        input.classList.add('novalid');
      }
    }

    if (input.classList.contains('val-email')) {
      let regEmail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
      let regVal = /[-.\w@]/g;
      let regArr = inputValue.matchAll(regVal);
      for (let elem of regArr) {
        resultReg += String(elem);
      }
      newValue = resultReg;
      if (newValue.length >= 3 && regEmail.test(newValue)) {
        input.classList.remove('novalid');
      } else {
        input.classList.add('novalid');
      }
    }

    if (input.classList.contains('val-tel')) {
      let regTel;

      const select = document.querySelector('.modal__input-select-item input:checked');
      const selectValue = select.value;
      let regVal = /[0-9]+/g;
      let regArr = inputValue.matchAll(regVal);
      for (let elem of regArr) {
        resultReg += String(elem);
      }

      let resultRegArr = resultReg.split('');

      if (selectValue == 'ru') {
        regTel = /^\+?[78]\s\(\d{3}\)\s\d{3}-\d{2}-\d{0,3}$/g;
        input.setAttribute('maxlength', '18');
        for (let i = 0; i < resultRegArr.length; i++) {
          if (i === 0) {
            resultRegArr.splice(i, 0, '+');
          }
          if (i == 2) {
            resultRegArr.splice(i, 0, ' (');
          }
          if (i == 6) {
            resultRegArr.splice(i, 0, ') ');
          }
          if (i == 10 || i == 13) {
            resultRegArr.splice(i, 0, '-');
          }
          resultReg = resultRegArr.join('');
          newValue = resultReg;

          if (newValue.length >= 18 && regTel.test(newValue)) {
            input.classList.remove('novalid');
          } else {
            input.classList.add('novalid');
          }
        }
      }

      if (selectValue == 'ukr') {
        regTel = /^\+?3\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/g;
        input.setAttribute('maxlength', '19');

        for (let i = 0; i < resultRegArr.length; i++) {
          if (i === 0) {
            resultRegArr.splice(i, 2, '+38');
          }
          if (i == 1) {
            resultRegArr.splice(i, 0, ' (');
          }
          if (i == 5) {
            resultRegArr.splice(i, 0, ') ');
          }
          if (i == 9 || i == 12) {
            resultRegArr.splice(i, 0, '-');
          }
        }
        resultReg = resultRegArr.join('');
        newValue = resultReg;

        if (newValue.length >= 19 && regTel.test(newValue)) {
          input.classList.remove('novalid');
        } else {
          input.classList.add('novalid');
        }
      }

      if (selectValue == 'tur') {
        regTel = /^\+?90\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/g;
        input.setAttribute('maxlength', '19');
        for (let i = 0; i < resultRegArr.length; i++) {
          if (i === 0) {
            resultRegArr.splice(i, 0, '+');
          }
          if (i == 3) {
            resultRegArr.splice(i, 0, ' (');
          }
          if (i == 7) {
            resultRegArr.splice(i, 0, ') ');
          }
          if (i == 11 || i == 14) {
            resultRegArr.splice(i, 0, '-');
          }
        }
        resultReg = resultRegArr.join('');
        newValue = resultReg;

        if (newValue.length >= 19 && regTel.test(newValue)) {
          input.classList.remove('novalid');
        } else {
          input.classList.add('novalid');
        }
      }
    }

    input.value = newValue;
  });
});

//validation phone

let input = document.querySelector('#phone');
let errorMsg = document.querySelector('#error-msg');

let errorMap = [
  'Не правильно введен Номер',
  'Неверный код страны',
  'Короткий номер',
  'Длинный номер',
  'Не правильно введен Номер',
];

const iti = window.intlTelInput(input, {
  initialCountry: 'tr',
  utilsScript: './utils.js',
  preferredCountries: ["tr", "ua", "ru"]
});

var reset = function () {
  input.classList.remove('novalid');
  errorMsg.innerHTML = '';
};

// on blur: validate
input.addEventListener('blur', function () {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      input.classList.remove('novalid');
      errorMsg.classList.remove('novalid');
    } else {
      input.classList.add('novalid');
      errorMsg.classList.add('novalid');

      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
    }
  }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);
