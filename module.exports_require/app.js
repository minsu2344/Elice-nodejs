const cal = require('./cal');
const func = require('./func');
// 한 번 사용 후 삭제(보관 x)
// 함수형으로 받으면 보관 가능

// console.log(cal.add1(5, 3));
// console.log(cal.sub2(5, 3));
// console.log(cal.mul3(5, 3));

console.log(func);
// 같은 기능 여러번 중복적용
// for(let i=0; i<10; i++) {
//   console.log(func); // 10번 호출해도 안 바뀜
// }

for(let i=0; i<10; i++) {
  console.log(func());
}


// 함수 내부 숫자 초기화
// const func = require('./func');

// const a = func();
// console.log(a()); // 1
// console.log(a()); // 2

// // number 초기화
// const b = func();
// console.log(b()); // 1
// console.log(b()); // 2