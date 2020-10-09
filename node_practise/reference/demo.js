const path = require('path')


// get the file name
// using basename we can get the file name 
// console.log(__filename) using this conmand we can get the whole dir and file name eg:G:\node_practise\reference\demo.js
// console.log(__dirname) using this command we can get the dir name of the file eg:
//  G:\node_practise\reference

// get the file name
console.log(path.basename(__filename))

// get the directory name
console.log(path.dirname(__filename))

// get the extension of the filename
console.log(path.extname(__filename))

// create path object
console.log(path.parse(__filename))


// concatenate paths
console.log(path.join(__dirname,'name','sanjay.html'))