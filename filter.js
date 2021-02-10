const { getPeople } = require('./services');


Array.prototype.MyFilter = function (callback){
    const list = [];
    for(index in this){
        const item = this[index];
        const result = callback(item, index, this);

        if(!result) continue;
        list.push(item);
    }

    return list;
}


async function main(){
    try {
        const { results } = await getPeople('a');

        console.time('filter');
        const FamilyLars1 = results.filter(person => person.name.toLowerCase().indexOf('lars') !== -1);
        console.timeEnd('filter');

        console.time('MyFilter');
        const FamilyLars2 = results.MyFilter((person) => person.name.toLowerCase().indexOf('lars') !== -1)
        console.timeEnd('MyFilter');

        // const names = FamilyLars.map(person => person.name);

        

    } catch (error) {
        console.error('Deu Ruim', error);
    }
}

main();