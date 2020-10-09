const url = require('url');

const myUrl = new URL('http://localhost:8080/default.htm?year=2017&month=february');

// get url
console.log(myUrl.href)
console.log(myUrl.toString())

// get host
console.log(myUrl.host)

// get host name
console.log(myUrl.hostname)

// pathname
console.log(myUrl.pathname)

// seralized query
console.log(myUrl.search)

// params Object
console.log(myUrl.searchParams)

// add params
myUrl.searchParams.append('aba','123');
console.log(myUrl.searchParams)

myUrl.searchParams.forEach((name,value)=>console.log(`${name}: ${value}`))
