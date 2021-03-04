function getMoneySpent(keyboards, drives, b) {
  const arrayKeyboards = [...keyboards];
  const arrayDrives = [...drives];
  const budget = parseFloat(b, 10);
  let totalMaximum = 0;

  for(let index = 0; index < arrayKeyboards.length; index++){
    for(let indx = index; indx < arrayDrives.length; indx++){
      let sum = arrayKeyboards[index] + arrayDrives[indx];
      if(sum <= budget && sum > totalMaximum){
        totalMaximum = sum;
      }else{
        totalMaximum = -1;
      }
    }
  }

  return totalMaximum;
}

function getMoneySpent2(keyboards, drives, b) {
  return keyboards.reduce((acc, curr) =>
    Math.max(acc, ...drives.map(usb => usb + curr).filter(ku => b >= ku)), -1);
}

const getMoneySpent3 = (keyboards, drives, budget) => {
  return keyboards.reduce((prev, next) =>
  Math.max(prev, ...drives.map(item => item + next).filter(total => budget >= total)), -1);
}

// console.log(Math.max(14, 0,0,0,0,-1))

console.log(getMoneySpent([4],[5],5));
console.log(getMoneySpent2([4],[5],5));
console.log(getMoneySpent3([4],[5],5));
