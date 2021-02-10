const { getPeople } = require('./services');

async function main(){
    try {
        const { results } = await getPeople('a');

        const FamilyLars = results.filter(person => person.name.toLowerCase().indexOf('lars') !== -1);
        const names = FamilyLars.map(person => person.name);

        console.log(names);

    } catch (error) {
        console.error('Deu Ruim', error);
    }
}

main();