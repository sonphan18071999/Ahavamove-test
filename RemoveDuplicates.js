const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question(
    "Please input string with length >1 and <300? ",
    function (randomString) {
      console.log(`\nYour input is : ${randomString}`);
      if (randomString.length < 1 || randomString.length > 300) {
        console.log("\nInput not quallified");
        rl.close();
      }
      removeDuplicate(randomString);
      rl.close();
    }
  );
}

function removeDuplicate(randomString) {
  let purrifedString = randomString[0];

  for (let i = 0; i < randomString.length; i++) {
    for (let y = 0; y < purrifedString.length; y++) {
      if (purrifedString[y] === randomString[i]) {
        break;
      }

      if (y === purrifedString.length - 1) {
        purrifedString += randomString[i];
      }
    }
  }
  console.log(`\nThe result is : ${purrifedString}`);
}

rl.on("close", function () {
  console.log(`\nThank you`);
  process.exit(0);
});

main();
