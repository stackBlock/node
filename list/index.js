#!/usr/bin/env node
const fs = require("fs");
// const util = require("util");
const chalk = require('chalk')
const log = console.log;
const path = require('path')

// method #2
// const lstat = util.promisify(fs.lstat);

// method #3
const { lstat } = fs.promises;

const input = process.argv[2] || process.cwd()
console.log(input)

fs.readdir(input, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map(filename => {
    return lstat(path.join(input, filename));
  });

  const allStats = await Promise.all(statPromises);
  // console.log(allStats);
  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    stats.isDirectory()
    ? log(chalk.blue.underline.bold(filenames[index]))
    : log(chalk.yellow.underline.bold(filenames[index]));    

    // console.log(index, filenames[index], stats.isFile());
  }

  // filenames.forEach(name => {
  //   fs.lstat(name, (err, filename) => {
  //     if (err) {
  //       console.log(err);
  //     }

      // filename.isDirectory()
      //   ? console.log("\x1b[33m%s\x1b[0m", name)
      //   : console.log("\x1b[36m%s\x1b[0m", name);
  //   });
  // });
});

// method #1
// const lstat = filename => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(stats);
//     });
//   });
// };

// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));
 
// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
 
// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);
 

 
// // Use RGB colors in terminal emulators that support it.
// log(chalk.keyword('orange')('Yay for orange colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));