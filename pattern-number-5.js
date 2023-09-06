let rows = parseInt(prompt("Enter Number of Rows"));

function printNumbersInRow(numbers, currentValue = 0) {
  if (numbers < 0) {
    return null;
  }
  document.write(currentValue + " ");
  currentValue++;
  return printNumbersInRow(numbers - 1, currentValue);
}

function printNumberPattern(rows, currentValue = 0) {
  let totalSum12 = 0;
  if (rows < 1) {
    return null;
  }
  // document.write("Value of Row is = " + rows + typeof rows + "<br>");
  totalSum12 = rows + currentValue;
  printNumbersInRow(totalSum12);
  currentValue++;
  document.write("<br>");
  // document.write("Type of row" + typeof rows);
  return printNumberPattern(rows - 1, currentValue);
}

printNumberPattern(rows);

// OutPut
// 0 1 2 3
// 0 1 2 3
// 0 1 2 3
