let userInput = parseInt(prompt("Enter Number of Rows"));
function printNumbersInRow(numbers, currentValue = 1) {
  if (numbers < 1) {
    return null;
  }
  document.write(currentValue + " ");
  currentValue++;
  return printNumbersInRow(numbers - 1, currentValue);
}

function printNumberPattern(rows, currentValue = 0) {
  if (rows < 1) {
    return null;
  }
  let sum = rows + currentValue;
  printNumbersInRow(sum);
  currentValue++;
  document.write("<br>");
  return printNumberPattern(rows - 1, currentValue);
}

printNumberPattern(userInput);

// Output
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
