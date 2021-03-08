function pickingNumbers(a) {
  const arrayA = [...a];
  let sum = true;
  let maxCount = 0;
  arrayA.forEach(element => {
      maxCount = Math.max(maxCount,
          arrayA.reduce((current, next) => {
            console.log(`Valor de Current é ${current} quando ${(next === element || next === element + 1)}`);
            console.log('Sum:',sum)
            return current += (next === element || next === element + 1)
          }, 0));
  })
  return maxCount;
}



console.log(pickingNumbers([4 ,6 ,5 ,3 ,3 ,1]));

