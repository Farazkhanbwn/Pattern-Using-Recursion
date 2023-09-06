let rows = parseInt(prompt("Enter Number of Rows"));
let lettter = prompt("Enter the letter to Print");

function printNumbersInRow(numbers) {
  if (numbers < 1) {
    return null;
  }

  document.write(lettter.toUpperCase() + " ");
  return printNumbersInRow(numbers - 1);
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
// A A A
// A A A
// A A A
