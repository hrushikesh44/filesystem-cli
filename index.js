const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('count')
  .description('CLI to count words in a file')
  .version('0.8.0');

program.command('count')
  .description('count words in a file')
  .argument('<file>', 'count a file')
  .action((file) => {
    fs.readFile(file, 'utf8', (err,data) =>{
        if(err){
            console.log(err)
        }else{
            const lines = data.split('\n').length;
            console.log(`there are ${lines} words in this ${file}`)
        }
    })
  });

program.command('add')
  .description('add text in a file')
  .argument('<text>', 'add to a file')
  .action((file) => {
    fs.writeFile("text", )
  });


  program.parse();