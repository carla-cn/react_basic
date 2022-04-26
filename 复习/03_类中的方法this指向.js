class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	speak() {
		console.log(this)
	}
}

const p1 = new Person('熊收快递费', 18)
p1.speak()
const demo = p1.speak
demo()
