function divisibleSumPairs(n, k, ar) {
  const lengthArray = n;
  const numberInteger = k;
  const arrayInteger = [...ar];
  let sumPairs = 0;

  for(let i = 0; i < lengthArray; i++){
    for(let j = 1; j < lengthArray; j++){
      if(i < j && (arrayInteger[i] + arrayInteger[j]) % numberInteger === 0){
        sumPairs++;
      }
    }
  }

  return sumPairs

}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
