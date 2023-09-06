let rows = parseInt(prompt("Enter Number of Rows"));

function printNumbersInRow(numbers, currentValue = 1) {
  if (numbers < 1) {
    return null;
  }

  document.write(currentValue + " ");
  currentValue++;
  return printNumbersInRow(numbers - 1, currentValue);
}

function printNumberPattern(rows, checkNumber = 2) {
  if (rows < 1) {
    return null;
  }
  let totalSum = rows + checkNumber;
  printNumbersInRow(totalSum);
  document.write("<br>");
  checkNumber++;
  return printNumberPattern(rows - 1, checkNumber);
}

printNumberPattern(rows);

// Output
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
