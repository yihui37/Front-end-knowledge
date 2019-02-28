// JS构造函数
// function MathHandler(x, y) {
//     this.x = x
//     this.y = y
// }
// MathHandler.prototype.add = function () { // 原型扩展
//     return this.x + this.y
// }
// var m = new MathHandler(1, 2) // 构造函数实例化
// console.log(m.add())

// class MathHandler {
//     constructor(x, y) { // 实例化时立即执行
//         this.x = x
//         this.y = y
//     }

//     add() {
//         return this.x + this.y
//     }
// }

// const m = new MathHandler(1, 2) // 实例化
// console.log(m.add())

function Animal() {
    this.eat = function () {
        alert('Animal eat');

    }
}

function Dog() {
    this.bark = function () {
        alert('Animal bark');

    }
}

Dog.prototype = new Animal();

var hashiqi = new Dog();
hashiqi.eat();
hashiqi.bark();