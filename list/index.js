#!/usr/bin/env node
const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {

  if (err) {
    console.log(err);
  }


  
//   filenames.forEach((name)=>{
//     fs.lstat(name, (err, filename) => {

//         if (err) {
//             console.log(err);
//           }

//         filename.isDirectory() 
//         ? 
//         console.log('\x1b[33m%s\x1b[0m', name) 
//         : 
//         console.log('\x1b[36m%s\x1b[0m', name)
//     })
//   })
});

// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats)=> {
//             if (err) {
//                 reject(err);
//             }

//             resolve(stats)
//         })
//     })
// }