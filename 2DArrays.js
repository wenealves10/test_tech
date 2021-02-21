function main(n) {
  let arr = [];
  for(let arr_i = 0; arr_i < 6; arr_i++){
     arr[arr_i] = n.split(' ');
     arr[arr_i] = arr[arr_i].map(Number);
  }

  let total = -63;
  for (let i=0; i < arr.length-2; i++) {
      for (let j=0, curSum = 0; j < arr[i].length-2; j++) {
          curSum = arr[i][j] +
                   arr[i][j+1] +
                   arr[i][j+2] +
                   arr[i+1][j+1] +
                   arr[i+2][j] +
                   arr[i+2][j+1] +
                   arr[i+2][j+2];
          if (curSum > total) total = curSum;
      }
  }
  console.log(total);
}

main(`1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`)
