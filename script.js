const result = document.getElementById('result');

function appendValue(val) {
  result.value += val;
}

function clearAll() {
  result.value = '';
}

function removeLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }
}

// Bonus: Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    removeLast();
  } else if (key.toLowerCase() === 'c') {
    clearAll();
  }
});
