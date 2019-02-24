/** 作用域 */
function f1() {
  var n = 999;
}
f1();
// 外面读取不到里面的值，除非去掉声明 n 的 var，使之成为一个全局变量
// console.log(n);

// ------

// 根据链式作用域，子对象会一级一级地向上找所有父对象的变量。
// 所以 f3 总能访问到 f2 的变量。那么这个时候我们将 f3 返回出来，不就可以在外面访问到 f2 的值了吗。
function f2() {
  let n = 888;

  function f3() {
    console.log(n);
  }
  return f3;
}
const result = f2();
result();
