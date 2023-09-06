let userInput = parseInt(prompt("Enter Number of Rows = "));
function asteriskPattern(rows) {
  if (rows < 1) {
    return null;
  }
  printAsterisksInRow(rows);
  document.write("<br>");
  return asteriskPattern(rows - 1);
}

function printAsterisksInRow(asterisks) {
  if (asterisks < 1) {
    return null;
  }
  document.write("*");
  return printAsterisksInRow(asterisks - 1);
}

asteriskPattern(userInput);

// Output

// *****
// ****
// ***
// **
// *
