const logger =(req,res,next)=>{
	console.log('object')
	next()
}

module.exports = logger