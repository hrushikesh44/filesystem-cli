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

  program
    .name('add-data');

program.command('add-data')
    .description('add data to a file')
    .argument('<file>', 'add data to a file')
    .argument('<data>', 'data to add')
    .action((file, data) => {
      const data1 = data;
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const finalData = data1.concat(data)
          fs.writeFile(file, finalData, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`data added to ${file}`);
              console.log(finalData);
            }
          });
        }
      });
});

  program.parse();