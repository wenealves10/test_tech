function range(...numbers){
  const len = numbers.length;
  const arrayNew = [];
  if(len === 1){
    for(let index = 1; index <= numbers[0]; index++){
      arrayNew.push(index);
    }
  }if (len === 2){
    if(numbers[0] < numbers[1]){
      for(let index = numbers[0]; index <= numbers[1]; index++){
        arrayNew.push(index);
      }
    }else{
      for(let index = numbers[0]; index >=  numbers[1]; index--){
        arrayNew.push(index);
      }
    }
  }
  if(len === 3){
    if(numbers[1] > 0){
      for(let index = numbers[0]; index <= numbers[1]; index += numbers[2]){
        arrayNew.push(index);
      }
    }else{
      for(let index = numbers[0]; index >= numbers[1]; index -= numbers[2]){
        arrayNew.push(index);
      }
    }
  }

  return arrayNew;
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


function range2(a, b, s = 1){
  const n1 = b === undefined ? 1 : a;
  const n2 = b === undefined ? a : b;
  const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s);
  const arrayNew = [];

  for(let index = n1; n1 <= n2 ? index <= n2 : index >= n2; index += step){
    arrayNew.push(index);
  }

  return arrayNew;
}
console.log("---------------------------------------------------------------------------------------")
console.log(range2(5))
console.log(range2(6, 11))
console.log(range2(10, 19, 2))
console.log(range2(6, 2))
console.log(range2(8, -3, 4))

