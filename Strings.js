function processData(input) {
  const dataInput = input.split('\n');
  const data = dataInput.map((item) => item.trim());
  const T = parseInt(data[0], 10);

  for(let index = 1; index <=  T; index++){
    const dataString = [...data[index]];
    let odd = [];
    let even = [];
    for(let indexs in dataString){
      if(indexs %  2 !== 0){
        odd.push(dataString[indexs]);
      }else{
        even.push(dataString[indexs]);
      }
    }
    console.log(`${even.join('')}  ${odd.join('')}`);
  }

}

function processData1(input) {
  let inputCopy = input.split('\n').slice(1);
  inputCopy.forEach((str) => {
    let evenStr = '';
    let oddStr = '';
      for(let i = 0; i < str.length; i++) {
          i % 2 ? oddStr += str[i] : evenStr += str[i];
      }
      console.log(`${evenStr} ${oddStr}`);
  });
}

processData('4\nhacker\nrank\nwene\nalves\noliveira')

// console.log(processData('2\nhacker\nrank'))
