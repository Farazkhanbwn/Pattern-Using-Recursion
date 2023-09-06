let rows = parseInt(prompt("Enter Number of Rows"));

function printNumbersInRow(numbers, currentValue = 1) {
  if (numbers < 1) {
    return null;
  }
  document.write(currentValue + " ");
  currentValue++;
  return printNumbersInRow(numbers - 1, currentValue);
}

function printNumberPattern(rows, checkNumber = 1) {
  if (checkNumber > rows) {
    return null;
  }

  printNumbersInRow(checkNumber);
  document.write("<br>");
  checkNumber++;
  return printNumberPattern(rows, checkNumber);
}

printNumberPattern(rows);

// Output
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
