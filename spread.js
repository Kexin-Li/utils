// set属性
Object.defineProperty(Object.prototype, 'a', {
  set(value) {
    console.log('set called!');
  }
});

const obj = { a: 10 };
console.log('测试set属性：');
console.log({ ...obj });
console.log(Object.assign({}, obj));

// 不可枚举属性
const car = {
  color: 'blue'
};

Object.defineProperty(car, 'type', {
  value: 'coupe',
  enumerable: false
});

console.log('测试不可枚举属性：');
console.log({ ...car });
console.log(Object.assign({}, car));

// 继承过来的属性
const car2 = Object.create(car, {
  type: {
    value: 'coupe',
    enumerable: true
  }
});

console.log('测试继承过来的属性：');
console.log({ ...car2 });
console.log(Object.assign({}, car2));
