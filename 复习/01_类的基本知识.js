// 1. 创建一个Person类
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	speack() {
		console.log(`我的名字是${this.name}, 年龄是${this.age}`)
	}
}
// 2. 创建两个Person的实例对象
const p1 = new Person('小红', 8)
const p2 = new Person('小明', 10)
console.log(p1)
console.log(p2)
p1.speack()
p2.speack()
// 3. 改变Person类的原型上方法this的指向
p1.speack.call({ a: 1, b: 2 })
// 4. 创建一个Student类，继承于Person类
class Student extends Person {
	// 可以不写构造函数直接使用父类的属性，但是一旦写了构造函数，就必须使用super
	constructor(name, age, grade) {
		super(name, age)
		this.grade = grade
	}
	// 重写父类的speack方法
	speack() {
		console.log(`我的名字是${this.name}, 年龄是${this.age}, 年级是${this.grade}`)
	}
}
// 5. 创建一个Student的实例对象
const s = new Student('小继承', 15, '高一')
s.speack()

// 6. 类中可以直接写赋值语句
class Car {
	constructor(name, price) {
		this.name = name
		this.price = price
	}
	// 如下代码的含义：给Car的实例对象添加一个属性，名为a，值为1
	a = 1
	// 相当于给类本身加属性
	static b = 2
}

console.log(new Car('宝马', 128))
console.log(Car.b)

/**
 * 总结：
 * 1. 类中的构造器不是必须写的，要对实例进行一些初始化的操作，如添加指定属性才写
 * 2. 如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的
 * 3. 类总所定义的方法，都是放在了类的原型对象上，供实例去使用
 */
