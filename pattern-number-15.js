let rows = parseInt(prompt("Enter Number of Rows"));

function printNumbersInRow(numbers, checkNumber, increment = 1) {
  if (numbers < 1) {
    return null;
  } else if (checkNumber == increment) {
    document.write("# ");
    increment++;
    return printNumbersInRow(numbers - 1, checkNumber, increment);
  }

  document.write(increment + " ");
  increment++;
  return printNumbersInRow(numbers - 1, checkNumber, increment);
}

function printNumberPattern(rows, checkNumber = 1) {
  if (rows < 1) {
    return null;
  }
  let totalSum = rows + checkNumber - 1;
  printNumbersInRow(totalSum, checkNumber);
  document.write("<br>");
  checkNumber++;
  return printNumberPattern(rows - 1, checkNumber);
}

printNumberPattern(rows);

// Output
// # 2 3 4 5
// 1 # 3 4 5
// 1 2 # 4 5
// 1 2 3 # 5
// 1 2 3 4 #
