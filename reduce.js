const { getPeople } = require('./services');

Array.prototype.MyReduce = function(callback, valueInitial){

  let valueFinal = typeof valueInitial !== undefined ? valueInitial : this[0];

  for(let index = 0; index < this.length - 1; index++){
    valueFinal = callback(valueFinal, this[index], index, this);
  }
  return valueFinal;
}


async function main(){
  try {
    const { results } = await getPeople('a');

    const weight = results.map(person => parseFloat(person.height, 10));

    const total = weight.reduce((prev, next) => prev + next);

    const words = [
      ['You', 'Love', 'Apple', 'Mother', 'Father', 'Sister', 'Brother'],
      ['We', 'Hate', 'Windows', 'Mother', 'Father', 'Sister', 'Brother'],
      ['They', 'Like', 'Amazon', 'Mother', 'Father', 'Sister', 'Brother'],
      ['I', 'Admire', 'Tesla', 'Mother', 'Father', 'Sister', 'Brother'],
    ]

    const line = words.reduce((prev, next) =>{
      return prev.concat(next)
    }, []).join(', ');

    console.log('Pesos: ', weight);
    console.log('total:', total);
    console.log('Linha de Palavras:', line);

  } catch (error) {
    console.error('Deu Ruim', error);
  }
}

main();
