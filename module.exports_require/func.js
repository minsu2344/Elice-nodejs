// let number = 0;

// module.exports = number += 1;

// 모듈을 함수형으로 만들어 함수로써 호출
let number = 0;

module.exports = () => {
  return number += 1;
}


// 함수 내부 숫자 초기화
// module.exports = () => {
//   let number = 0;

//   function clos() {
//       return number += 1;
//   }

//   return clos;
// }