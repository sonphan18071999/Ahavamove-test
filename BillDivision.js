const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputBill(length) {
  let count = 0;
  let matrix = [];
  console.log("Please input your test case");
  rl.on("line", (line) => {
    matrix.push(line.split(" "));
    count++;
    if (count == length && checkQualifiedInput(matrix)) {
      calculateBill(matrix);
    }
  });
}

function checkQualifiedInput(matrix) {
  let nk = matrix[0];
  let bill = matrix[1];
  if (
    +nk[0] < +nk[1] ||
    nk[0] < 2 ||
    +nk[0] > Math.pow(10, 5) ||
    nk[1] < 0 ||
    bill[nk[1]] < 0 ||
    +bill[nk[1]] > Math.pow(10, 4)
  ) {
    console.log("Input is not qualified!!");
    rl.close();
    return false;
  }
  return true;
}

function calculateDevidedPay(nk, bill) {
  let devidedPay = 0;
  let sum = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i != nk[1]) {
      sum += +bill[i];
    }
  }
  devidedPay = sum / 2;
  return devidedPay;
}

function calculateBill(matrix) {
  let nk = matrix[0];
  let bill = matrix[1];
  let annaPaid = matrix[2];
  let balance = annaPaid - calculateDevidedPay(nk, bill);
  if (balance === 0) {
    console.log("Bon Appetit");
  } else {
    console.log(balance);
  }
}

function main() {
  inputBill(3);
}

main();
