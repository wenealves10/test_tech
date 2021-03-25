function utopianTree(n) {
  const growthCycles = parseInt(n, 10);
  let height = 2;

  if(growthCycles <= 0)  return 1;
  for(let index = 2; index <=  growthCycles; index++){
    if(index % 2 === 0){
      height += 1;
    }else{
      height += height;
    }
  }

  return height;

}

console.log(utopianTree(3))
