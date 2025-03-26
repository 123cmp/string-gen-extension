const lengthInput = document.getElementById('len');
const emainInput = document.getElementById('email');
const generatedInput = document.getElementById('generated');
const toCheckInput = document.getElementById('text-to-check');
const sizeBox = document.getElementById('size');
const EMAIL_POSTFIX = '@gmail.com';

const updateGeneratedString = () => {
  let value = parseInt(lengthInput.value);
  const enoughToFitEmail = value > EMAIL_POSTFIX.length;
  if (emainInput.checked && enoughToFitEmail) {
    value = value - EMAIL_POSTFIX.length;
  }

  let generatedString = 'a'.repeat(value);
  if (emainInput.checked && enoughToFitEmail) {
    generatedString += EMAIL_POSTFIX;
  }

  generatedInput.value = generatedString;
}


const checkString = () => {
  sizeBox.innerHTML = toCheckInput.value.length;
}

lengthInput.addEventListener('change', updateGeneratedString);
lengthInput.addEventListener('keyup', updateGeneratedString);
emainInput.addEventListener('change', updateGeneratedString);
toCheckInput.addEventListener('change', checkString);
toCheckInput.addEventListener('keyup', checkString);