// function* helloWorldGeneratorFunction(){
//     yield 'hello'
//     yield 'world'
//     return '!'
// }

// var helloWorldGenerator = helloWorldGeneratorFunction()

// console.log(helloWorldGenerator.next())


// function* helloWorldGeneratorFunction(){
//     var hello = yield 'hello'
//     console.log(hello)
//     var world = yield 'world'
//     console.log(world)
//     return '!'
// }

// var helloWorldGenerator = helloWorldGeneratorFunction()

// console.log(helloWorldGenerator.next(1))

// console.log(helloWorldGenerator.next(2))
// console.log(helloWorldGenerator.next(3))


// Array 与 String
function* Genfunc(){
    yield [1,2]
    yield* [3,4]
    yield "56"
    yield* "78"
}

var gen = Genfunc()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

function* GenFunc1(){
    yield arguments;
    yield* arguments
}
var gen1 = GenFunc1(2,3,4,5)
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)
console.log(gen1.next().value)

/**
 * 
 * yield 与 yield* 的区别在于： yield 只是返回右值， 而yield*则将函数委托（delegte)到另一个生成器（Generator））
 * 或可迭代的对象（如字符串，数组和类数组arguments, 以及ES6中的Map， Set等），但不能迭代对象；
 */