let rows = parseInt(prompt("Enter Number of Rows"));
let number = parseInt(prompt("Enter Number to start"));

function printNumbersInRow(numbers, displayNumber = number) {
  if (numbers < 1) {
    return null;
  }

  document.write(displayNumber + " ");
  displayNumber++;
  return printNumbersInRow(numbers - 1, displayNumber);
}

function printNumberPattern(rows, checkNumber = 0) {
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
// 5 6 7 8 9
// 5 6 7 8 9
// 5 6 7 8 9
// 5 6 7 8 9
// 5 6 7 8 9
