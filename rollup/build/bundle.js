'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

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
var Animal =
/*#__PURE__*/
function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: "eat",
    value: function eat() {
      alert(this.name + 'Animal eat');
    }
  }]);

  return Animal;
}();

var Dog =
/*#__PURE__*/
function (_Animal) {
  _inherits(Dog, _Animal);

  function Dog(name) {
    var _this;

    _classCallCheck(this, Dog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dog).call(this, name));
    _this.name = name;
    return _this;
  }

  _createClass(Dog, [{
    key: "bark",
    value: function bark() {
      alert(this.name + 'Animal bark');
    }
  }]);

  return Dog;
}(Animal);

var dog = new Dog('Hashiqi');
dog.eat();
dog.bark();
