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
    console.log(chocolateSquare.slice(index, index + month).reduce((prev, next) => prev + next))
     if(chocolateSquare.slice(index, index + month).reduce((prev, next) => prev + next) === day){
      shareAmount++;
    }

  }


  console.log(shareAmount)

}

function solve(s, d, m) {
  let result = 0;

  for (let i = 0, l = s.length; i < l; i++) {
      if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {

          result++;
      }
  }

  return result;
}

birthday([5 ,5 ,3 ,2 ,2 ,2 ,1 ,2 ,5 ,3 ,5 ,5 ,4 ,3 ,3 ,5],13,3)
console.log(solve([5 ,5 ,3 ,2 ,2 ,2 ,1 ,2 ,5 ,3 ,5 ,5 ,4 ,3 ,3 ,5],13,3))


