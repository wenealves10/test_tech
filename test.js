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

class Person{
  constructor(initialAge){
    this.age = initialAge < 0 ? 0 : initialAge;
    if(this.age === 0){
      console.log('Age is not valid, setting age to 0.');
    }
  }
  yearPasses(){
    this.age += 1;
  }

  amIOld(){
    if(this.age < 13){
      console.log('You are young.');
    }else if(this.age >= 13 && this.age < 18){
      console.log('You are a teenager.');
    }else{
      console.log('You are old.');
    }
  }

}

function gradingStudents1(grades) {

  let result = 0;
  let resultDivision = 0;
  let minimumResult = 0;

  return grades.map((note) => {

    if(note >= 38 && note < 100){

      resultDivision = note / 5;

      result = (Math.floor(resultDivision) + 1) * 5;

      minimumResult = result - note;

      if(minimumResult < 3){
        result = result;
      }else{
        result = note;
      }

      return result;

    }else if (note >= 0 && note <= 37){
      return note;
    }else if (note >= 100){
      return 100;
    }

  })


}

function gradingStudents2(grades){
  return grades.map((n) => {
      let diff = 5 - (n % 5);
      if(diff < 3 && n >= 38) {
          n += diff;
      }

      return n;
  })
}


function countApplesAndOranges(s, t, a, b, apples, oranges) {

  let pointS = s, pointT = t;
  let pointA = a, pointB = b;
  const arrayApples = [...apples];
  const arrayOranges = [...oranges];
  let fallenApples = [];
  let fallenOranges = [];

  let applesAtHome = 0;
  let orangesAtHome = 0;

  fallenApples = arrayApples.map((distance) => pointA + distance);
  fallenOranges = arrayOranges.map((distance) => pointB + distance);

  for(let apple of fallenApples){
    if(apple >= pointS && apple <= pointT){
      applesAtHome++;
    }
  }

  for(let orange of fallenOranges){
    if(orange >= pointS && orange <= pointT){
      orangesAtHome++;
    }
  }


  return {
    applesAtHome,
    orangesAtHome
  }

}

function kangaroo(x1, v1, x2, v2) {
  if ((x1 < x2) && (v1 < v2)){
    return "NO"
  }
  else {
      if ((v1 != v2) && ((x2 - x1) % (v1 - v2)) == 0)
          return "YES"
      else
          return "NO"
  }
}

function getTotalX(a, b) {
  let validCount = 0;

  for (let x = 1; x <= 100; x++) {
      if (a.every(int => (x % int == 0))) {
          if (b.every(int => (int % x == 0))) {

              validCount++;
          }
      }
  }

  return validCount;
}

function breakingRecords(scores) {

  let scoresArray = [...scores];
  let lowestPoints = scoresArray[0];
  let biggestPoints = scoresArray[0];
  let highestRecordNumbers = 0;
  let recordLowNumbers = 0;

  for(let index in scoresArray){
    if(lowestPoints > scoresArray[index]){
      lowestPoints = scoresArray[index];
      recordLowNumbers++;
    }

    if(biggestPoints < scoresArray[index]){
      biggestPoints = scoresArray[index];
      highestRecordNumbers++;
    }

  }

  return [highestRecordNumbers, recordLowNumbers];

}

function birthday(s, d, m) {

  if(!Array.isArray(s)){
    throw Error('Must be an array');
  }

  const chocolateSquare = [...s];
  const month = parseInt(m, 10);
  const day = parseInt(d, 10);
  let shareAmount = 0;

  if(month > 12){
    throw Error('must be a valid month');
  }

  if(day > 31){
    throw Error('Must be a valid day');
  }

  for(let index =0; index < chocolateSquare.length; index++){
     if(chocolateSquare.slice(index, index + month).reduce((prev, next) => prev + next) === day){
      shareAmount++;
    }

  }


  return shareAmount;

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
  });

  it('Notes should be returned after rounding, as appropriate', () => {
    const expected = [1,2,75,60,36,37,45,70,100,71,100,100,100,0,0];

    const result = gradingStudents1([1,2,74,58,36,37,45,68,98,71,99,123,100,0,0]);

    assert.deepStrictEqual(result, expected);
  });

  it('It must return how many apples and oranges fell in Sam\'s house', () => {
    const expected = {applesAtHome: 1, orangesAtHome: 1};

    const result = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1],[5, -6])

    assert.deepStrictEqual(result, expected);

  });

  it('Must return if the two kangaroos arrive at the same', () => {
    const expected = 'YES';

    const result = kangaroo(2,1,1,2);

    assert.deepStrictEqual(result, expected);

  });

  it('Must return the factors of two matrices', () => {
    const expected = 2;

    const result = getTotalX([2, 6], [24, 36]);

    assert.deepStrictEqual(result, expected);

  });

  it('Record high and low numbers should return', () =>{
    const expected = [2,4];

    const result = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);

    assert.deepStrictEqual(result, expected);

  });

  it('Must return the sum of the segments', () => {
    const expected = 3;

    const result = birthday([5 ,5 ,3 ,2 ,2 ,2 ,1 ,2 ,5 ,3 ,5 ,5 ,4 ,3 ,3 ,5],13,3);

    assert.deepStrictEqual(result, expected);

  })

});
