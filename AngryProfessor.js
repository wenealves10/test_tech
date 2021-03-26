function angryProfessor(k, a) {
  const thresholdStudents = parseInt(k, 10);
  const arrayOfTimes = [...a];
  let isClass = false;
  let arrivedEarly = 0;


  arrayOfTimes.forEach(timeStudent => {
    if(timeStudent <= 0){
      arrivedEarly++;
    }
  });

  return arrivedEarly >= thresholdStudents ? 'No' : 'Yes';

}

console.log(angryProfessor(2, [0 ,-1 ,2 ,1]));
