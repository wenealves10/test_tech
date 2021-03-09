function hurdleRace(k, height) {
  const arrayHeight = [...height];
  const  jumpNaturally = parseInt(k, 10);

  const maximum = Math.max(...arrayHeight);

  if(jumpNaturally < maximum){
    return maximum - jumpNaturally;
  }else{
    return 0;
  }

}

console.log(hurdleRace(4, [1 ,6 ,3 ,5 ,2]))
