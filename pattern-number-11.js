let rows = parseInt(prompt("Enter Number of Rows"));

function printNumbersInRow(numbers, checkNumber) {
  if (numbers < 0) {
    return null;
  }

  document.write(checkNumber + " ");
  return printNumbersInRow(numbers - 1, checkNumber);
}

function printNumberPattern(rows, checkNumber = 1) {
  if (rows < 1) {
    return null;
  }
  let totalSum = rows - 1 + checkNumber;
  printNumbersInRow(totalSum, checkNumber);
  document.write("<br>");
  checkNumber++;
  return printNumberPattern(rows - 1, checkNumber);
}

printNumberPattern(rows);

// Output
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
