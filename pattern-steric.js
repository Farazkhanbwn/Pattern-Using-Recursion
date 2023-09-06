// Pattern Print
let userInput = parseInt(prompt("Enter Number of rows"));

function printAsterisksInRow(asterisks) {
  if (asterisks < 1) {
    return null;
  }
  document.write("*");
  return printAsterisksInRow(asterisks - 1);
}

function printAsteriskPatternWithSum(n, totalSum = 0) {
  let currentSum = n;
  if (n < 1) {
    console.log("The value of totalSum is = " + totalSum);
    return null;
  }
  currentSum += totalSum;
  printAsterisksInRow(currentSum);
  document.write("<br>");
  totalSum++;
  return printAsteriskPatternWithSum(n - 1, totalSum);
}

printAsteriskPatternWithSum(userInput);

// output
// *****
// *****
// *****
// *****
// *****
