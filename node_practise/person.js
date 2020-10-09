class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	greeting(){
		console.log(`your name is ${this.name} and your age is ${this.age}`)
	}
}

module.exports = Person