const assert = require('assert');

function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  let count = arr.length;

  for(let index in arr){
    if(arr[index] > 0){
      positives++;
    }else if(arr[index] < 0){
      negatives++;
    }else{
      zeros++;
    }
  }


  return {
    positives:(positives / count).toFixed(6),
    negatives:(negatives / count).toFixed(6),
    zeros:(zeros / count).toFixed(6),
  }


}


function Starts(n){
  for(let i =1; i <= n; i++){
    console.log('#'.repeat(i).padStart(n));
  }
}

// Starts(1)


function miniMaxSum(arr) {

  const minimum = [...arr].sort();
  const maximum = [...arr].sort();

  minimum.pop();
  const valueMinimum = minimum.reduce((prev, next) => prev + next);

  maximum.shift();
  const valueMaximum = maximum.reduce((prev, next) => prev + next);

  return (`${valueMinimum} ${valueMaximum}`)

}


function diagonalDifference(arr) {
  let left = 0;
  let right = 0;
  let index = 0;
  let count = arr.length;

  for(let i =0; i < count; i++){
      left += arr[i][i];
  }


  for(let i = count -1; i >= 0; i--){
      right += arr[index][i];
      index++
  }


  return Math.abs(left - right)
}


describe('HackerRank Challenges', () =>{
  it('must return the sum of the matrix diagonals and the difference between them', () =>{
    const expected = 15;

    const result = diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
      ]);
    assert.strictEqual(result, expected);

  });

  it('Must return the maximum and minimum of this array of integers', () => {
    const expected = '2093989309 2548418794';

    const result = miniMaxSum([396285104, 573261094, 759641832, 819230764, 364801279]);

    assert.strictEqual(result, expected);

  })

  it('The proportion of positive, negative and zero numbers must be returned', () => {
    const expected = { positives: '0.428571', negatives: '0.571429', zeros: '0.000000' };

    const result = plusMinus([1 ,-2, -7, 9, 1, -8, -5]);

    assert.deepEqual(result, expected);

  })
});
