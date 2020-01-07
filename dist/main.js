"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const argv = require('yargs').demandOption('num').argv;
console.log('n-fatorial');
// console.log(`executando o ScriptProcessorNode a partir do diretorio ${process.cwd()}`)
// process.on('exit', () => {
//     console.log('scrpt está prestes a terminar')
// })
const num = argv.num;
console.log(`0 fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);
//# sourceMappingURL=main.js.map