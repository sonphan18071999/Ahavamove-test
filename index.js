const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function inputBill(length) {
  let count = 0;
  let matrix = [];
  rl.on("line", (line) => {
    matrix.push(line.split(" "));
    count++;
    if (count == length) {
      calculateBill();
      return matrix;
    }
  });
}

async function main() {
  await inputBill(3);
}

function calculateBill() {
  console.log("hhihi");
  rl.close();
}

main();
