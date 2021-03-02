function sockMerchant(n, ar) {
  const socks = parseInt(n, 10);
  const arraySocks = [...ar].sort();
  let pairs = 0;

  const freqObject = arraySocks.reduce((acc, value) => {
    if (acc[value]) {
      acc[value]++
    } else {
      acc[value] = 1
    }
    return acc
  }, {});


  const types = Object.values(freqObject);

  types.forEach(item => {
    if(item > 1){
      for(let index = 1; index <= item; index++){
        if(index % 2 === 0){
          pairs++;
        }
      }
    }
  })


  return pairs;

}

console.log(sockMerchant(7, [1,2,1,2,1,3,2]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));





function sockMerchant1(n, ar) {
  var res = 0;
      ar.sort();
      for(let i=0; i<n;i++){
          if(ar[i] == ar[i+1]){
              i++;
              res++;
        }
      }
    return res;
}

console.log(sockMerchant1(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant1(7, [1,2,1,2,1,3,2]));
