let rows = parseInt(prompt("Enter Number of Rows"));

function printNumbersInRow(numbers, product, currentValue = 1) {
  if (numbers < 1) {
    return null;
  }

  let totalProduct = product * currentValue;
  document.write(totalProduct + " ");
  currentValue++;
  return printNumbersInRow(numbers - 1, product, currentValue);
}

function printNumberPattern(rows, product = 1, checkNumber = 0) {
  if (rows < 1) {
    return null;
  }
  let totalSum = rows + checkNumber;
  printNumbersInRow(totalSum, product);
  document.write("<br>");
  product++;
  checkNumber++;
  return printNumberPattern(rows - 1, product, checkNumber);
}

printNumberPattern(rows);

// Output
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25
