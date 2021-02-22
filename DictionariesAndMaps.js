function processData(input) {
  const numbersPhones = [];
  const queryNames = [];
  let inputCopy = input.split('\n').slice(1)

   inputCopy.forEach(item => {
    if(item.split(' ').length > 1){
      numbersPhones.push(item.split(' '));
    }else{
      queryNames.push(item);
    }
  });

  const phoneBooks = new Map(numbersPhones);

  for(let index in queryNames){
    if(phoneBooks.has(queryNames[index])){
      console.log(`${queryNames[index]}=${phoneBooks.get(queryNames[index])}`);
    }else{
      console.log("Not found");
    }
  }

}

processData(`3\nmateus 99912222\npedro 11122222\njoão 12299933\npedro\nedward\nmateus\nwene`);

// RESULT //
/*
  pedro=11122222
  Not found
  mateus=99912222
  Not found
 */

// Autor Wene Alves de Oliveira
// GitHub para mais projetos https://github.com/wenealves10


function processData1(input) {

  var tempArray = input.split("\n");
  var entriesLength = tempArray.splice(0, 1);
  var queries = tempArray.splice(entriesLength);

  for (var i = 0; i < entriesLength; i++) {
    tempArray[i] = tempArray[i].split(" ");
  }

  var phoneBookMap = new Map(tempArray);

  for (var i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {
      console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
    } else {
      console.log("Not found");
    }
  }
}

processData1(`3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry`)
