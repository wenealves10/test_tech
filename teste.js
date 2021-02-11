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

// plusMinus([1 ,-2, -7, 9, 1, -8, -5])

function Starts(n){
  for(let i =1; i <= n; i++){
    console.log('#'.repeat(i).padStart(n));
  }
}

// Starts(1)


function miniMaxSum(arr) {

  const minimum = [...arr].sort();
  const maximum = [...arr].sort();

  minimum.pop();
  const valueMinimum = minimum.reduce((prev, next) => prev + next);

  maximum.shift();
  const valueMaximum = maximum.reduce((prev, next) => prev + next);

  console.log(`${valueMinimum} ${valueMaximum}`)

}

miniMaxSum([396285104, 573261094, 759641832, 819230764, 364801279])
