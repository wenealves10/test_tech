function countingValleys(steps, path) {
  const stepsTaken = parseInt(steps, 10);
  const arrayPath  = [...path];
  let currLevel = 0;
  let valleys = 0;

  arrayPath.forEach(element => {
    if(element === 'U'){
      currLevel++;
      currLevel === 0 && valleys++;
    }else{
      currLevel--;
    }
  });


  return valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'))
