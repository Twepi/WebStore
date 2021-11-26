

const arr = [true, false, true, true];

let x = true;

arr.forEach((v, _) => {x = x & v; console.log(x)});

console.log(x);