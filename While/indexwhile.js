// while 16
let p = prompt("Введіть відцоток %=");
let k = 1;
let d = 10;
let s = 10;

while (s <= 200) {
  d = d + d * (p / 100);
  s = s + d;
  console.log(d);
  console.log(s);
}
console.log(d);

// while 17
let n = prompt("Введіть n= ");
while (n > 0) {
  console.log(n % 10);
  n = Math.floor(n / 10);
}

// while 18
let n = prompt("Введіть n= ");
let s = 0;
let numb = 0;
let k = 0;
while (n > 0) {
  k = Math.floor(n % 10);

  s = s + k;
  n = Math.floor(n / 10);
  numb++;
}
console.log(numb, s);

// while 19
let n = prompt("Введіть n= ");
let r = 0;

while (n > 0) {
  r = r * 10 + (n % 10);
  n = Math.floor(n / 10);
}
console.log(r);

// while 20
let n = prompt("Введіть n= ");
let check = 0;

while ((n > 0) & (check == 0)) {
  if (n % 10 == 2) {
    check = 1;
  }
  n = Math.floor(n / 10);
}
if (check == 1) {
  console.log("True");
} else {
  console.log("False");
}

// while 21
let n = prompt("Введіть n= ");
let check = 0;

while (n > 0) {
  if (n % 2 == 0) {
    check = 1;
  }
  n = Math.floor(n / 10);
}
if (check == 1) {
  console.log("парне");
} else {
  console.log("непарне");
}

// while 22
let n = prompt("Введіть n= ");
let k = 2;
while ((k < n - 1) & (n % k != 0)) {
  k++;
}
if (n % k != 0) {
  console.log("True");
} else {
  console.log("False");
}

// while 23
let a = parseInt(prompt("Введіть a= "));
let b = parseInt(prompt("Введіть b= "));
let s = 0;
while ((a != 0) & (b != 0)) {
  if (a > b) {
    a = a % b;
  } else {
    b = b % a;
  }
  s = s + a + b;
}
console.log(s);

// while 24
let n = parseInt(prompt("Введіть n= "));
let k1 = 1;
let k2 = 1;
let k = 0;
while (k < n) {
  k = k1 + k2;
  k2 = k1;
  k1 = k;
}
if (k == n || n == 1) {
  console.log("True");
} else {
  console.log("False");
}

// while 24
let n = parseInt(prompt("Введіть n= "));
let k1 = 1;
let k2 = 1;
let k = 0;
while (k < n + 1) {
  k = k1 + k2;
  k2 = k1;
  k1 = k;
}
console.log(k);

// while 25
let n = parseInt(prompt("Введіть n= "));
let k1 = 1;
let k2 = 1;
let k = 0;
while (k < n) {
  k = k1 + k2;
  k2 = k1;
  k1 = k;
}
console.log(k);
console.log(k + k2);
