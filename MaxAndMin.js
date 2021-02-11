'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

  const minimum = [...arr].sort();
  const maximum = [...arr].sort();

  minimum.pop();
  const valueMinimum = minimum.reduce((prev, next) => prev + next);

  maximum.shift();
  const valueMaximum = maximum.reduce((prev, next) => prev + next);

  console.log(`${valueMinimum} ${valueMaximum}`)

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
