function breakingRecords(scores) {

  let scoresArray = [...scores];
  let lowestPoints = scoresArray[0];
  let biggestPoints = scoresArray[0];
  let highestRecordNumbers = 0;
  let recordLowNumbers = 0;



  for(let index in scoresArray){
    console.log(`antes do if lower: ${lowestPoints} e biggest: ${biggestPoints} index current: ${index} `);
    console.log(`Lower ${lowestPoints} > ${scoresArray[index]} ${lowestPoints > scoresArray[index]} Biggest ${biggestPoints} < ${scoresArray[index]} ${biggestPoints < scoresArray[index]}`);
    console.log(`---------------------------------------${index}----------------------------------------`);
    if(lowestPoints > scoresArray[index]){
      lowestPoints = scoresArray[index];
      console.log('LowerPoints', lowestPoints);
      recordLowNumbers++;
      console.log('RecordLowNumbers', recordLowNumbers);
    }
    if(biggestPoints < scoresArray[index]){
      biggestPoints = scoresArray[index];
      console.log('biggestPoints', biggestPoints);
      highestRecordNumbers++;
      console.log('highest Points', highestRecordNumbers);
    }
    console.log(`---------------------------------FIM ${index}------------------------------------------`);
    console.log(`\n`)


  }

  return [highestRecordNumbers, recordLowNumbers];

}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
