const fs = require('fs');
const path = require('path');

// console.log(path.basename(__filename))
// fs.mkdir(path.join(__dirname,'/myfolder'),{},(err)=>{
// 	if(err) throw err;
// 	console.log('Folder Created')
// })


// Syncorounous method
// fs.mkdirSync(path.join(__dirname,'/myfolder'),{},console.log('Folder Created'))

// write fiel
// fs.writeFile(path.join(__dirname,'/myfolder','hello.txt'),'hello world',(err)=>{
// 	if(err) throw err;
// 	console.log('File Created')
// 	fs.appendFile(path.join(__dirname,'/myfolder','hello.txt'),'I love you',err=>{
// 	if(err) throw err;
// 	console.log('file Created')
// })
// })

// Read file
// fs.readFile(path.join(__dirname,'/myfolder','hello.txt'),'utf8',(err,data)=>{
// 	if(err) throw err;
// 	console.log(data)
// })

fs.rename(path.join(__dirname,'/myfolder','hello.txt'),path.join(__dirname,'/myfolder','hello1.txt'),(err)=>{
	if(err) throw err;
	console.log('file rename')
})
