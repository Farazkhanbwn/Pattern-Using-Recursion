let userInput = parseInt(prompt("Enter Number of Rows : "));
function printNumberPattern(rows) {
  if (rows < 1) {
    return null;
  }
  printNumbersInRow(rows);
  document.write("<br>");
  return printNumberPattern(rows - 1);
}

function printNumbersInRow(numbers, currentValue = 1) {
  if (numbers < 1) {
    // currentValue = 1;
    // document.write("current value" + currentValue);
    return null;
  }
  document.write(currentValue + " ");
  currentValue++;
  return printNumbersInRow(numbers - 1, currentValue);
}

printNumberPattern(userInput);

// Output
// 12345
// 1234
// 123
// 12
// 1
