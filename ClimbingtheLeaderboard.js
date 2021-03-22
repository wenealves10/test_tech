function climbingLeaderboard(scores, alice) {
  console.log(scores, alice);

  const aliceArray = [...alice];
  let positions = [];
  let distScore = [...new Set(scores)];
  let indexLength = distScore.length - 1;
  aliceArray.forEach(element => {
    while (indexLength >= 0){
      if(element >= distScore[indexLength]){
        i--;
      }else{
        positions.push(indexLength + 2);
        break;
      }
    }

    if(indexLength < 0) positions.push(1)
  });

  return positions;


}


function climbingLeaderboard2(scores, alice) {

  console.log(scores, alice);

  let positions = [];
  let distScore = [...new Set(scores)];
  let aliceIndex = 0;
  let i = distScore.length - 1;
  alice.forEach(element => {

      while (i >= 0) {
          if (element >= distScore[i]) {
              i--;
          } else {
              positions.push(i + 2);
              break;
          }
      }
      if (i < 0) positions.push(1);

  });

  return positions;
}
