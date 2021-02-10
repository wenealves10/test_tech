'use strict';

// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;
// const port = 8000;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);
//   // console.log(cluster)
//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died ${code}, ${signal}`);
//     cluster.fork();
//   });
// } else if (cluster.isWorker) {
  
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(port, () => {
//   });

//   console.log(`Worker ${process.pid} started`);
// }

// const cluster = require('cluster');
// const http = require('http');

// if (cluster.isMaster) {

//   // Keep track of http requests
//   let numReqs = 0;
//   setInterval(() => {
//     console.log(`numReqs = ${numReqs}`);
//   }, 1000);

//   // Count requests
//   function messageHandler(msg) {
//     if (msg.cmd && msg.cmd === 'notifyRequest') {
//       numReqs += 1;
//     }
//   }

//   // Start workers and listen for messages containing notifyRequest
//   const numCPUs = require('os').cpus().length;
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   for (const id in cluster.workers) {
//     cluster.workers[id].on('message', messageHandler);
//   }

// } else {

//   // Worker processes have a http server.
//   http.Server((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');

//     // Notify master about the request
//     process.send({ cmd: 'notifyRequest' });
//   }).listen(8000);
// }



// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('fork', (worker) => {
//     console.log('worker is dead:', worker.isDead());
//   });

//   cluster.on('exit', (worker, code, signal) => {
//     console.log('worker is dead:', worker.isDead());
//     // cluster.fork();
//   });
// } else {
//   // Workers can share any TCP connection. In this case, it is an HTTP server.
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end(`Current process\n ${process.pid}`);
//     // process.kill(process.pid);
//   }).listen(8000);
// }

// const cluster = require('cluster');

// if (cluster.isMaster) {
//   console.log('I am master');
//   cluster.fork();
//   cluster.fork();
// } else if (cluster.isWorker) {
//   console.log(`I am worker #${cluster.worker.id}`);
// }

/////////////////////////////////////////////// WORKERS AND CLUSTER ///////////////////////////////////////////////////////


// global.x = 10;

// setTimeout(() => {
//   debugger;
//   console.log('world');
// }, 1000);
// console.log('hello');

////////////////////////////////////////////////// DEBUBS NODEJS //////////////////////////////////////////////////////////


// const code = 5;
// console.error('error #%d', code);
// console.error('error', code);
// console.info('node JS')
// const count = 5;
// console.log('count: %d', count);
// console.log('count:', count);
// console.time('100-elements');
// for (let i = 0; i < 100; i++) {}
// console.timeEnd('100-elements');
// console.time('process');
// const value = 'helo';
// console.timeLog('process', value);
// // doExpensiveProcess2(value);
// console.timeEnd('process');
// console.table([{name:"Wene Alves",year:18},{name:"Wene Alves",year:18}])
// console.warn('hello world');
// console.trace('Show me');
// console.profile('MyLabel');
// console.profileEnd('MyLabel');
// console.timeStamp('label')

// AINDA TEM MAIS 

//////////////////////////////////////////////// CONSOLE.LOG //////////////////////////////////////////////////////////////
// const crypto = require('crypto');

// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha256', secret)
//                    .update('I love cupcakes')
//                    .digest('hex');
// console.log(hash);
// const crypto = require('crypto');

// const algorithm = 'aes-192-cbc';
// const password = 'wenealves';

// // First, we'll generate the key. The key length is dependent on the algorithm.
// // In this case for aes192, it is 24 bytes (192 bits).
// crypto.scrypt(password, 'salt', 24, (err, key) => {
//     console.log(key);
//   if (err) throw err;
//   // Then, we'll generate a random initialization vector
//   crypto.randomFill(new Uint8Array(16), (err, iv) => {
//     console.log(iv);
//     if (err) throw err;

//     // Once we have the key and iv, we can create and use the cipher...
//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     console.log(cipher);
//     let encrypted = '';
//     cipher.setEncoding('hex');

//     cipher.on('data', (chunk) => encrypted += chunk);
//     cipher.on('end', () => console.log(encrypted));

//     cipher.write('some clear text data');
//     cipher.end();
//   });
// });

// const crypto = require('crypto');
// const fs = require('fs');
// const { pipeline } = require('stream');

// const algorithm = 'aes-192-cbc';
// const password = 'wenealves';

// // First, we'll generate the key. The key length is dependent on the algorithm.
// // In this case for aes192, it is 24 bytes (192 bits).
// crypto.scrypt(password, 'salt', 24, (err, key) => {
//   if (err) throw err;
//   // Then, we'll generate a random initialization vector
//   crypto.randomFill(new Uint8Array(16), (err, iv) => {
//     if (err) throw err;

//     const cipher = crypto.createCipheriv(algorithm, key, iv);

//     const input = fs.createReadStream('test.js');
//     const output = fs.createWriteStream('test.enc');

//     pipeline(input, cipher, output, (err) => {
//       if (err) throw err;
//     });
//   });
// });

// const crypto = require('crypto');

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';

// // First, we'll generate the key. The key length is dependent on the algorithm.
// // In this case for aes192, it is 24 bytes (192 bits).
// crypto.scrypt(password, 'salt', 24, (err, key) => {
//   console.log(key);
//   if (err) throw err;
//   // Then, we'll generate a random initialization vector
//   crypto.randomFill(new Uint8Array(16), (err, iv) => {
//     console.log(iv);
//     if (err) throw err;

//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     console.log(cipher);
//     let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
//     console.log(encrypted);
//     encrypted += cipher.final('hex');
//     console.log(encrypted);
//   });
// });

// const crypto = require('crypto');

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
// // Key length is dependent on the algorithm. In this case for aes192, it is
// // 24 bytes (192 bits).
// // Use the async `crypto.scrypt()` instead.
// const key = crypto.scryptSync(password, 'salt', 24);
// // The IV is usually passed along with the ciphertext.
// const iv = Buffer.alloc(16, 0); // Initialization vector.

// const decipher = crypto.createDecipheriv(algorithm, key, iv);
// let chunk ='';
// let decrypted = '';
// decipher.on('readable', () => {
//   while (null !== (chunk = decipher.read())) {
//     decrypted += chunk.toString('utf8');
//   }
// });
// decipher.on('end', () => {
//   console.log(decrypted);
//   // Prints: some clear text data
// });

// // Encrypted with same algorithm, key and iv.
// const encrypted =
//   'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
// decipher.write(encrypted, 'hex');
// decipher.end()

// const crypto = require('crypto');
// const fs = require('fs');

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
// // Use the async `crypto.scrypt()` instead.
// const key = crypto.scryptSync(password, 'salt', 24);
// // The IV is usually passed along with the ciphertext.
// const iv = Buffer.alloc(16, 0); // Initialization vector.

// const decipher = crypto.createDecipheriv(algorithm, key, iv);

// const input = fs.createReadStream('test.enc');
// const output = fs.createWriteStream('test.js');

// input.pipe(decipher).pipe(output);

// const crypto = require('crypto');

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
// // Use the async `crypto.scrypt()` instead.
// const key = crypto.scryptSync(password, 'salt', 24);
// // The IV is usually passed along with the ciphertext.
// const iv = Buffer.alloc(16, 0); // Initialization vector.

// const decipher = crypto.createDecipheriv(algorithm, key, iv);

// // Encrypted using same algorithm, key and iv.
// const encrypted =
//   'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
// let decrypted = decipher.update(encrypted, 'hex', 'utf8');
// decrypted += decipher.final('utf8');
// console.log(decrypted);
// // Prints: some clear text data
////////////////////////////////////////////////////////Crypto////////////////////////////////////////////////////////////

// const dns = require('dns');

// dns.lookup('agenciawebtech.com.br', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });

// const dns = require('dns');

// dns.resolve4('google.com', (err, addresses) => {
//   if (err) throw err;

//   console.log(`addresses: ${JSON.stringify(addresses)}`);

//   addresses.forEach((a) => {
//     dns.reverse(a, (err, hostnames) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//     });
//   });
// });
// const { Resolver } = require('dns');
// const resolver = new Resolver();
// resolver.setServers(['4.4.4.4']);

// // This request will use the server at 4.4.4.4, independent of global settings.
// // resolver.resolve4('example.org', (err, addresses) => {
// //   if(err) throw err;
// //   console.log(addresses);
// // });


// function obterUsuario(){
//     return new Promise(function resolvePromise(resolve, reject){
//         setTimeout(function(){
//             return resolve({
//                 id: 10,
//                 nome: 'Wene Alves',
//                 dataNasc: new Date(),
//             })
//         },1000)
//     })
// }

// function obterTelefone(idUsuario){
//     return new Promise(function resolvePromise(resolve, reject){
//         setTimeout(function () {
//             return resolve({
//                 telefone: '8825554554',
//                 ddd: 99
//             })
//         },1000)
//     })
// }

// const util = require('util');
// const obterEnderecoAsync = util.promisify(obterEndereco);

// function obterEndereco(idUsuario, callback){
//     setTimeout(function () {
//         return callback(null, {
//             rua: 'Rua Tancredo Neves',
//             numero: 1230
//         })
//     },1000)
// }

// main()
// async function main(){
//     try {
//         console.time('tempo-promise')
//         const usuario = await obterUsuario();
//         // const telefone = await obterTelefone(usuario.id)
//         // const endereco = await obterEnderecoAsync(usuario.id)

//         const resultado = await Promise.all([
//             obterEnderecoAsync(usuario.id),
//             obterTelefone(usuario.id)
//         ])

//         const telefone = resultado[1]
//         const endereco = resultado[0]

//         console.log(`
//             ID: ${usuario.id}
//             Nome: ${usuario.nome}
//             Data de Nascimento: ${usuario.dataNasc}
//             Telefone: (${telefone.ddd}) ${telefone.telefone}
//             Endereço: ${endereco.rua}, N° ${endereco.numero}
//         `)
//         console.timeEnd('tempo-promise')

//     } catch (error) {
//         console.error('DEU RUIM', error)
//     }
// }

// const usuario = obterUsuario();

// usuario
//     .then(function (usuario){
//         return obterTelefone(usuario.id)
//                .then(function (telefone){
//                    return {
//                        usuario: {
//                            nome: usuario.nome,
//                            id: usuario.id,
//                            dataNasc: usuario.dataNasc
//                        },
//                        telefone: telefone
//                    }
//                })
//     })
//     .then(function (resultado) {
//         return obterEnderecoAsync(resultado.usuario.id)
//                .then(function (endereco){
//                    return {
//                        usuario: resultado.usuario,
//                        telefone: resultado.telefone,
//                        endereco: endereco
//                    }
//                })
//     })
//     .then(function (resultado){
//         console.log(`
//             ID: ${resultado.usuario.id}
//             Nome: ${resultado.usuario.nome}
//             Data de Nascimento: ${resultado.usuario.dataNasc}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//             Endereço: ${resultado.endereco.rua}, N° ${resultado.endereco.numero}
//         `)
//     })
//     .catch(function (error){
//         console.error('DEU RUIM', error)
//     })


// usuario
//     .then(function (usuario){
        
//         return obterTelefone(usuario.id)
//                 .then(function (telefone){
//                    return obterEnderecoAsync(usuario.id)
//                           .then(function (endereco){
//                               return {
//                                 usuario: usuario,
//                                 telefone: telefone,
//                                 endereco: endereco
//                             }
//                           })
//                 })
    
//     }).then(function (resultado){
//        console.log(`
//             id: ${resultado.usuario.id}
//             Nome: ${resultado.usuario.nome}
//             Data de Nascimento: ${resultado.usuario.dataNasc}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//             Endereço: ${resultado.endereco.rua}, N° ${resultado.endereco.numero}
//        `)
//     })
//     .catch(function (error){
//     console.error('Deu ruim', error);
//     })



// obterUsuario(function resolveUsuario(error, usuario){
//     if(error){
//         console.error('Deu ruim', error);
//         return;
//     }
//     obterTelefone(usuario.id, function resolveTelefone(error1, telefone){
//     if(error1){
//         console.error('Deu ruim', error1);
//         return;
//     }
    
//     obterEndereco(usuario.id, function resolveEndereco(error2, endereco){
//         if(error2){
//             console.error('Deu ruim', error2);
//             return;
//         }
//         console.log(`
//             Nome: ${usuario.nome}
//             Nascimento: ${usuario.dataNasc}
//             Endereço: ${endereco.rua}, ${endereco.numero}
//             Telefone: (${telefone.ddd}) ${telefone.telefone}
//         `)
//     })
// })

// })

/////////////////////////////////////////////////// EventsEmitter no Node.js /////////////////////////////////////////////////////////////

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter{

// }

// const myEmitter = new MyEmitter();

// const newEvent = 'user:click';

// myEmitter.on(newEvent, function(click){
//     console.log('User Click in Button', click);
// });

// // let count = 0;

// // setInterval(() => {
// //     myEmitter.emit(newEvent, 'Button Close '+ (count++))
// // },1500);


// const stdin = process.openStdin();
// process.stdout.write('Digita qualquer coisa: ');
// function main(){
//     return new Promise(function (resolve, reject){
//         stdin.addListener('data', function (value){
//             resolve(value);
//         });
//     });
// }

// main().then(function (value){
//     console.log(`Você digitou ${value.toString().trim()}`);
// }).catch(function (error){
//     console.error('Deu Ruim', error);
// })

//////////////////////////////////////////////////// For Forin ForOf /////////////////////////////////////////////////

const services = require('./services');

async function main(){
    try {
        const { results } = await services.getPeople('a');
        
        const names = [];
        console.time('for');
        for(let i =0; i<= results.length -1; i++){
            const person = results[i];
            names.push(person.name);
        }
        console.timeEnd('for');

        const namesForIn = [];
        console.time('forIn');
        for(let i in results){
            const person = results[i];
            namesForIn.push(person.name);
        }
        console.timeEnd('forIn');

        const namesForOf = [];
        console.time('forOf');
        for(let person of results){
            namesForOf.push(person.name);
        }
        console.timeEnd('forOf');

        const namesForEach = [];
        console.time('forEach');
        results.forEach(person => {
            namesForEach.push(person.name);
        });
        console.timeEnd('forEach');

        console.time('Map');
        const namesMap = results.map((person) => person.name);
        console.timeEnd('Map');

    } catch (error) {
        console.error('Deu Ruim', error)
    }
}

main()