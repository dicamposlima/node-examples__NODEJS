"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const argv = require("yargs");
const args = argv
    .demandOption('filename')
    .alias('f', 'filename')
    .demandOption('content')
    .alias('c', 'content')
    .argv;
console.log(args.filename);
fs.writeFile(args.filename + "", args.content, (error) => {
    if (error)
        throw error;
    console.log(`Aquivo ${args.filename} foi salvo com sucesso.`);
});
//# sourceMappingURL=save-file.js.map