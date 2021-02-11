function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  let count = arr.length;

  for(let index in arr){
    if(arr[index] > 0){
      positives++;
    }else if(arr[index] < 0){
      negatives++;
    }else{
      zeros++;
    }
  }


  console.log((positives / count).toFixed(6))
  console.log((negatives / count).toFixed(6))
  console.log((zeros / count).toFixed(6))


}

plusMinus([1 ,-2, -7, 9, 1, -8, -5])
