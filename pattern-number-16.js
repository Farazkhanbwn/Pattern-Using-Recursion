let rows = parseInt(prompt("Enter Number of Rows"));

function printNumbersInRow(checkNumber, increment = 1) {
  if (checkNumber < increment) {
    return null;
  } else if (checkNumber == increment) {
    document.write("# ");
    return printNumbersInRow(checkNumber, (increment += 1));
  }

  document.write(increment + " ");
  return printNumbersInRow(checkNumber, (increment += 1));
}

function printNumberPattern(rows, checkNumber = 1) {
  if (rows < 1) {
    return null;
  }

  printNumbersInRow(checkNumber);
  document.write("<br>");
  checkNumber++;
  return printNumberPattern(rows - 1, checkNumber);
}

printNumberPattern(rows);

// Output
// #
// 1 #
// 1 2 #
// 1 2 3 #
// 1 2 3 4 #
