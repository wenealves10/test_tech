function main(decimal) {
  const numberDecimal = parseInt(decimal, 10);
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
console.log(main(125)) // Result is => { numbersGroupOne: 5, numberBinary: '1111101' }
console.log(main(524283)) // { numbersGroupOne: 16, numberBinary: '1111111111111111011' }

// Autor Wene Alves de Oliveira
// GitHub para mais projetos https://github.com/wenealves10
