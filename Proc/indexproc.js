// proc6
let c = 0;
let s = 0;
function DigitCountSum(k, c, s) {
  while (k != 0) {
    s = s + (k % 10);
    c = c + 1;
    k = Math.floor(k / 10);
  }
  console.log(s);
  console.log(c);
}

for (let i = 0; i < 5; i++) {
  let k = prompt("Введіть число: ");
  DigitCountSum(k, c, s);
}

//  proc7
let temp = 0;
function InvertDigits(k) {
  while (k != 0) {
    temp = temp * 10 + (k % 10);
    k = Math.floor(k / 10);
  }
  k = temp;
  console.log(k);
  temp = 0;
}
for (let i = 0; i < 5; i++) {
  let k = prompt("Введіть число: ");
  InvertDigits(k);
}

// proc8
function AddRightDigit(d, k) {
  k = k + d;
  return k;
}
let k = prompt("Введіть число: ");
let d1 = prompt("Введіть d1= ");
let d2 = prompt("Введіть d2= ");
k = AddRightDigit(d1, k);
console.log(k);
k = AddRightDigit(d2, k);
console.log(k);

// proc9
function AddLeftDigit(d, k) {
  let temp = 10;
  while (Math.floor(k / temp) != 0) {
    temp = temp * 10;
    k = d * temp + k;
  }
  k = k + d;
  return k;
}
let k = prompt("Введіть число: ");
let d1 = prompt("Введіть d1= ");
let d2 = prompt("Введіть d2= ");
k = AddLeftDigit(d1, k);
console.log(k);
k = AddLeftDigit(d2, k);
console.log(k);

// proc10
let a = prompt("Введіть число a= ");
let b = prompt("Введіть число b= ");
let c = prompt("Введіть число c= ");
let d = prompt("Введіть число d= ");
Swap(a, b);
Swap(c, d);
Swap(b, c);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
function Swap(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  return x;
}

// proc11
function Minmax(x, y) {
  if (x > y) {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log(x, y);
    return x + y;
  }
}
let a = prompt("Введіть число a= ");
let b = prompt("Введіть число b= ");
let c = prompt("Введіть число c= ");
let d = prompt("Введіть число d= ");
Minmax(a, b);
Minmax(c, d);
Minmax(a, c);
Minmax(b, d);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
