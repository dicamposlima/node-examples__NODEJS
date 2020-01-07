import * as fs from 'fs'
import * as argv from 'yargs'

const args = argv
            .demandOption('filename')
            .alias('f', 'filename')
            .demandOption('content')
            .alias('c', 'content')
            .argv

            console.log(args.filename);

fs.writeFile(args.filename+"", args.content, (error)=>{
    if(error) throw error
    console.log(`Aquivo ${args.filename} foi salvo com sucesso.`);
})