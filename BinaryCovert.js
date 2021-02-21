function main(n) {
  const numberDecimal = parseInt(n, 10);
  const numberBinary = (numberDecimal >>> 0).toString(2);
  const arraysBinary = [...numberBinary];
  let numbersGroupOne = 0;
  let sequence = 0;

  for(let i in arraysBinary){
    if(arraysBinary[i] === '1'){
      sequence += 1;
      if(sequence > numbersGroupOne){
        numbersGroupOne = sequence;
      }
    }else{
      sequence = 0;
    }
  }

  return {numbersGroupOne, numberBinary};

}

console.log(main(125))
console.log(main(524283))
