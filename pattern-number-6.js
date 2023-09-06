let userInput = parseInt(prompt("Enter Number of Rows"));
function printNumbersInRow(numbers, currentValue = 1) {
  if (numbers < 1) {
    return null;
  }
  document.write(currentValue + " ");
  currentValue++;
  return printNumbersInRow(numbers - 1, currentValue);
}

function printNumberPattern(rows, currentValue = 1) {
  if (rows < currentValue) {
    return null;
  }

  printNumbersInRow(currentValue);
  document.write("<br>");
  return printNumberPattern(rows, currentValue + 1);
}

printNumberPattern(userInput);

// Output
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
