function catAndMouse(x, y, z) {
  const catA = parseInt(x, 10);
  const catB = parseInt(y, 10);
  const mouse = parseInt(z, 10);
  let resultPosition = '';


  const positionCatA = Math.abs(mouse - catA);
  const positionCatB = Math.abs(mouse - catB);

  if(positionCatA < positionCatB){
    resultPosition = 'Cat A';
  }else if(positionCatA > positionCatB){
    resultPosition = 'Cat B';
  }else{
    resultPosition = 'Mouse C';
  }

  return resultPosition;

}

console.log(catAndMouse(1 ,2 ,3))
console.log(catAndMouse(1 ,3 ,2))
