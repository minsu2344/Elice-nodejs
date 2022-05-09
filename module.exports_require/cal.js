function add(a, b) {
  return a+b;
}

const sub = (a, b) => {
  return a-b;
}

const mul = (a, b) => {
  return a*b;
}

  // module.exports.add1 = add;
  // module.exports.sub2 = sub;
  // module.exports.mul3 = mul;

  module.exports = {
    add1: add,
    sub2: sub,
    mul3: mul
  }