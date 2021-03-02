function migratoryBirds(arr) {
  const arraysTypesBirds = [...arr];
  let frequentID = [];

  arraysTypesBirds.forEach(item => {
    if (item > 5) {
      throw Error('maximum is 5');
    }
  });

  for (let i = 0; i < arraysTypesBirds.length; i++) {
    let maximum = 0;
    for (let j = i; j < arraysTypesBirds.length; j++) {
      if (arraysTypesBirds[i] === arraysTypesBirds[j]) {
        maximum++;
      }
    }
    if (frequentID.find(([element, ]) => element === arraysTypesBirds[i])) {
      continue;
    }

    frequentID.push([arraysTypesBirds[i], maximum])
  }

  return frequentID

}


function migratoryBirds2(arr) {
  const freqObject = arr.reduce((acc, value) => {
    if (acc[value]) {
      acc[value]++
    } else {
      acc[value] = 1
    }
    return acc
  }, {})
  console.log('Freq', freqObject)
  const highest = Math.max(...Object.values(freqObject))
  console.log('Highest', highest)
  const types = Object.keys(freqObject)
  console.log('Types', types)
  let mostCommon = []
  types.forEach(type => {
    if (freqObject[type] === highest) mostCommon.push(type)
  })
  return Math.min(...mostCommon)
}

function migratoryBirds3(arr) {
  let spotted = new Array(5).fill(0);

  for (let bird of arr) ++spotted[bird - 1];

  return spotted.indexOf(Math.max(...spotted)) + 1;
}

console.log('migration:1',migratoryBirds([1, 2, 3, 4, 5, 4, 3, 3, 2, 1, 3, 4, 4, 2, 2]))
console.log('migration:2',migratoryBirds2([1, 2, 3, 4, 5, 4, 3, 3, 2, 1, 3, 4, 4, 2, 2]))
console.log('migration:3',migratoryBirds3([1, 2, 3, 4, 5, 4, 3, 3, 2, 1, 3, 4, 4, 2, 2]))
