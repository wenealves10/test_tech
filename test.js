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


function solve(meal_cost, tip_percent, tax_percent) {
  const foodTip = meal_cost * tip_percent / 100;
  const foodTax = meal_cost * tax_percent / 100;

  const valueTotal = Math.round(meal_cost + foodTax + foodTip);

  return valueTotal;

}


function birthdayCakeCandles(candles) {

  let candleTallest = 0;
  let candleCount = 0;

  for(let index in candles){
    if(candles[index] > candleTallest){
      candleTallest = candles[index];
    }
  }

  for(let index in candles){
    if(candles[index] === candleTallest){
      candleCount++;
    }
  }

  return candleCount;

}


function main(n) {
  const N = n;

  if(N % 2 !== 0){
    return 'Weird';
  }
  else if(N >= 2 && N < 5){
    return 'Not Weird';
  }
  else if(N >= 6 && N <= 20){
    return 'Weird';
  }else{
    return 'Not Weird'
  }

}


function timeConversion(s) {
  const AMPM = s.slice(-2);

  let timeArr = s.slice(0, -2).split(":");

  if(AMPM === 'AM' && timeArr[0] === '12'){
    timeArr[0] = '00';
  }else if (AMPM === "PM") {
    timeArr[0] = (timeArr[0] % 12) + 12
  }

  return timeArr.join(":");

}


describe('HackerRank Challenges', () =>{
  it('must return the sum of the matrix diagonals and the difference between them', () =>{
    const expected = 15;

    const result = diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
      ]);
    assert.deepStrictEqual(result, expected);

  });

  it('Must return the maximum and minimum of this array of integers', () => {
    const expected = '2093989309 2548418794';

    const result = miniMaxSum([396285104, 573261094, 759641832, 819230764, 364801279]);

    assert.deepStrictEqual(result, expected);

  });

  it('The proportion of positive, negative and zero numbers must be returned', () => {
    const expected = { positives: '0.428571', negatives: '0.571429', zeros: '0.000000' };

    const result = plusMinus([1 ,-2, -7, 9, 1, -8, -5]);

    assert.deepEqual(result, expected);

  });

  it('The total value of the food must be returned with a tip and taxes', () =>{
    const expected = 15;

    const result = solve(12.00, 20, 8);

    assert.deepStrictEqual(result, result);

  });

  it('Return the tallest candle on the cake', () =>{
    const expected = 5;

    const result = birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);

    assert.deepStrictEqual(result, expected);

  });

  it('Returns whether the number is odd or even', () =>{
    const expected = 'Weird';

    const result = main(20);

    assert.deepStrictEqual(result, expected);

  });

  it('Return to the time formatted in military time (24 hours)', () => {
    const expected = '19:05:45';

    const result = timeConversion('07:05:45PM');

    assert.deepStrictEqual(result, expected);

  })


});
