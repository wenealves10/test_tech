function dayOfProgrammer(year) {
  const isALeapYear = year;
  let february = 28;
  let dayProgrammer = '';
  if(isALeapYear < 1700 || isALeapYear > 2700){
    return;
  }

  if(isALeapYear >= 1919){
    if(isALeapYear % 400 === 0 || (isALeapYear % 4 === 0 && isALeapYear % 100 !== 0)){
      february = 29;
    }
  }else if (isALeapYear === 1918){
    february = 15;
  }else{
    if(isALeapYear % 4 === 0){
      february = 29;
    }
  }

  dayProgrammer = 256 - (february + 31 + 31 + 30 + 31 + 30 + 31 + 31);

  return `${dayProgrammer > 10 ? dayProgrammer: '0'+dayProgrammer}.09.${isALeapYear}`;

}

console.log(dayOfProgrammer(1918));
