const sum = (a, b, c) => a + b + c

console.log(sum(1, 2, 3))

const sum2 = a => b => c => a + b + c

console.log('函数的柯里化：', sum2(1)(2)(3))
