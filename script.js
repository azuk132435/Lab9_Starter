let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Console Log
document.getElementById('log').addEventListener('click', () => {
  console.log('Console Log Demo');
});

// Console Error
document.getElementById('error').addEventListener('click', () => {
  console.error('Console Error Demo');
});

// Console Count
document.getElementById('count').addEventListener('click', () => {
  console.count('Console Count Demo');
});

// Console Warn
document.getElementById('warn').addEventListener('click', () => {
  console.warn('Console Warn Demo');
});

// Console Assert
document.getElementById('assert').addEventListener('click', () => {
  console.assert(false, 'Console Assert Demo');
});

// Console Clear
document.getElementById('clear').addEventListener('click', () => {
  console.clear();
});

// Console Dir
document.getElementById('dir').addEventListener('click', () => {
  console.dir(document.body);
});

// Console dirxml
document.getElementById('dirxml').addEventListener('click', () => {
  console.dirxml(document);
});

// Console Group Start
document.getElementById('groupStart').addEventListener('click', () => {
  console.group('Console Group');
  console.log('Inside Group');
});

// Console Group End
document.getElementById('groupEnd').addEventListener('click', () => {
  console.groupEnd();
});

// Console Table
document.getElementById('table').addEventListener('click', () => {
  console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
});

// Start Timer
document.getElementById('startTimer').addEventListener('click', () => {
  console.time('Timer');
});

// End Timer
document.getElementById('endTimer').addEventListener('click', () => {
  console.timeEnd('Timer');
});

// Console Trace
document.getElementById('trace').addEventListener('click', () => {
  console.trace('Console Trace Demo');
});

// Trigger a Global Error
document.getElementById('globalError').addEventListener('click', () => {
  setTimeout(() => { throw new Error('Global Error Triggered'); }, 0);
});

// Try/Catch example
try {
  let result = potentiallyFailingFunction();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('Execution complete');
}

function potentiallyFailingFunction() {
  if (Math.random() > 0.5) {
    throw new Error('Random error');
  }
  return 'Success';
}

// Custom Error
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

try {
  throw new CustomError('This is a custom error');
} catch (error) {
  console.error(error.name + ': ' + error.message);
}

// Global error handler
window.onerror = function (message, source, lineno, colno, error) {
  console.log('Global Error Caught:', message);
  return true; // Prevents the default browser error handler
};
