// import util1 from "./1.js"
// import {
//     fn1,
//     fn2
// } from "./2.js"
// console.log(util1);
// fn1();
// fn2();
// [1, 2, 3].map(item => item + 1);

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


class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        alert(this.name + 'Animal eat');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    bark() {
        alert(this.name + 'Animal bark');
    }
}

var dog = new Dog('Hashiqi');
dog.eat();
dog.bark();