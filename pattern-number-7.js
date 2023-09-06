let rows = parseInt(prompt("Enter Number of Rows"));

function printNumbersInRow(numbers, currentValue = 0) {
  if (numbers < 0) {
    return null;
  }
  document.write(currentValue + " ");
  currentValue++;
  return printNumbersInRow(numbers - 1, currentValue);
}

function printNumberPattern(rows) {
  if (rows < 0) {
    return null;
  }

  printNumbersInRow(rows);
  document.write("<br>");
  return printNumberPattern(rows - 1);
}

printNumberPattern(rows);

// Output
// 0 1 2 3 4 5
// 0 1 2 3 4
// 0 1 2 3
// 0 1 2
// 0 1
// 0
