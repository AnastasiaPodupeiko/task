// for12
let n = prompt("Введіть число N");
let r = 1;
for (let i = 0; i < n; i++) {
  r = r * (1 + 0.1 * i);
}
console.log(r);

// for13
let n = prompt("Введіть число N");
let r = 0;
let k = -1;
for (let i = 0; i < n; i++) {
  k = k * -1;
  r = r + k * (1 + 0.1 * i);
  console.log(r);
}
console.log(r);

// for14
let n = prompt("Введіть число N");
let r = 0;
for (let i = 0; i < n; i++) {
  r = r + (2 * i - 1);
}
console.log(r);

// for15
let a = prompt("Введіть число a");
let n = prompt("Введіть число n");
let r = 1;
for (let i = 0; i < n; i++) {
  r = r * a;
}
console.log(r);

// for16
let a = prompt("Введіть число a");
let n = prompt("Введіть число n");
let r = 1;
for (let i = 0; i < n; i++) {
  r = r * a;
  console.log(r);
}

// for17
let a = prompt("Введіть число a");
let n = prompt("Введіть число n");
let r = 1;
let s = 1;
for (let i = 0; i < n; i++) {
  r = r * a;
  s = s + r;
}
console.log(s);

// for18
let a = prompt("Введіть число a");
let n = prompt("Введіть число n");
let r = 1;
let s = 1;
for (let i = 0; i < n; i++) {
  r = r * a * -1;
  s = s + r;
  console.log(s);
}
console.log(s);

// for19
let n = prompt("Введіть число N");
let r = 1;
for (let i = 0; i < n; i++) {
  r = r * (i + 1);
}
console.log(r);

// for20
let n = prompt("Введіть число N");
let r = 1;
let k = 0;
for (let i = 0; i < n; i++) {
  r = r * (i + 1);

  k = k + r;
}
console.log(k);

// for21
let n = prompt("Введіть число N");
let r = 1;
let fak = 1;
for (let i = 1; i < n; i++) {
  fak = fak * i;
  r = r + 1 / fak;
}
console.log(r);

// for22
let x = prompt("Введіть число x");
let n = prompt("Введіть число n");
let r = 1;
let fak = 1;
let s = 1;
for (let i = 1; i < n + 1; i++) {
  fak = fak * i;
  r = r * x;
  s = s + r / fak;
}
console.log(s);
