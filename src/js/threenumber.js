
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const span = document.getElementById('threenumber-result');

function findMax() {
  if (num1.value && num2.value && num3.value) {
    const values = [Number(num1.value), Number(num2.value), Number(num3.value)];
    if (values[0] === values[1] && values[1] === values[2]) {
      span.textContent = 'числа рівні';
    } else {
      const maxValue = Math.max(...values);
      span.textContent = maxValue;
    }
  } else {
    span.textContent = '(число)';
  }
}

num1.addEventListener('input', findMax);
num2.addEventListener('input', findMax);
num3.addEventListener('input', findMax);
