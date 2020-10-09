const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
	// if(req.url==="/"){
	// 	fs.readFile(path.join(__dirname,'/public','index.html'),(err,content)=>{
	// 		if(err) throw err;
	// 		res.writeHead(200,{'content-Type':'text/html'})
	// 	res.end(content)
	// 	})
	// }

	// if(req.url ==='/about'){
	// 	fs.readFile(path.join(__dirname,'/public','about.html'),(err,content)=>{
	// 		if(err) throw err;
	// 		res.writeHead(200,{'content-Type':'text/html'})
	// 		res.end(content)
	// 	})
	// }

	// if(req.url === '/api'){
	// 	const user =[
	// 		{
	// 			name:'sanjay Rd',
	// 			age:44
	// 		},
	// 		{
	// 			name:'Bibek Raj',
	// 			age:29
	// 		}
	// 	]
	// res.writeHead(200,{'content-Type':'application/json'})
	// 	res.end(JSON.stringify(user))
	// }

	const filepath = path.join(__dirname,'public',req.url==='/'?'index.html':req.url)

	console.log(filepath)
	// extension of a file
	let extname = path.extname(filepath)

	// content/tpe
	let contentType = 'text/html'

	switch(extname){
		case '.js':
			contentType='text/javascript';
			break;
		case '.css':
			contentType='text/css';
			break;
		case '.json':
			contentType='application/json';
			break;
		case '.png':
			contentType='image/png';
			break;
		case '.jpg':
			contentType='image/jpg';
			break
	}

	fs.readFile(filepath,(err,content)=>{
		if(err){
			if(err.code = 'ENOENT'){
				// page not found
				fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
					res.writeHead(200,{'content-Type':'text/html'})
					res.end(content,'utf8')
				})
			}else{
				// some server error
				res.writeHead(500)
				res.end(`Server Error : ${err.code}`)
			}
		}else{
			// success
			res.writeHead(200,{'content-Type':contentType})
			res.end(content,'utf8')
		}
	})

})

const PORT =  process.env.PORT ||5000

server.listen(PORT,()=>console.log(`Server running on port ${PORT}`))