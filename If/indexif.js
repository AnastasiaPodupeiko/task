// if18
let a = prompt("Введіть число a= ");
let b = prompt("Введіть число b= ");
let c = prompt("Введіть число c=");
if (a == b) {
  alert("Третє");
} else if (b == c) {
  alert("Перше");
} else {
  alert("Друге");
}

// if19
let a = prompt("Введіть 1 число a= ");
let b = prompt("Введіть 2 число b=");
let c = prompt("Введіть 3 число c=");
let d = prompt("Введіть 3 число d=");
if ((a == b) & (b == d)) {
  alert("Третє");
} else if ((b == c) & (c == d)) {
  alert("Перше");
} else if ((a == c) & (c == d)) {
  alert("Друге");
} else {
  alert("Четверте");
}

// if20
let a = prompt("Введіть координату А= ");
let b = prompt("Введіть координату B= ");
let c = prompt("Введіть координату C= ");
if (Math.abs(a - b) < Math.abs(a - c)) {
  alert(
    "Ближче точка B." +
      " " +
      "Вони знаходяться на відстані" +
      " " +
      Math.abs(a - b)
  );
} else {
  alert(
    "Ближче точка C." +
      " " +
      "Вони знаходяться на відстані" +
      " " +
      Math.abs(a - c)
  );
}

// if21
let x = prompt("Введіть координату x= ");
let y = prompt("Введіть координату y= ");
if ((x == 0) & (y == 0)) {
  alert("0");
} else if ((x == 0) & (y !== 0)) {
  alert("1");
} else if ((x !== 0) & (y == 0)) {
  alert("2");
} else {
  alert("3");
}

// if22
let x = prompt("Введіть координату x= ");
let y = prompt("Введіть координату y= ");
if ((x > 0) & (y > 0)) {
  document.write("I чверть");
} else if ((x < 0) & (y > 0)) {
  document.write("II чверть");
} else if ((x < 0) & (y < 0)) {
  document.write("III чверть");
} else {
  document.write("IV чверть");
}

// if23
let x1 = prompt("Введіть координату x першої сторони прямокутника, x1= ");
let y1 = prompt("Введіть координату y першої сторони прямокутника, x2= ");
let x2 = prompt("Введіть координату x другої сторони прямокутника, x3= ");
let y2 = prompt("Введіть координату y другої сторони прямокутника, x4= ");
let x3 = prompt("Введіть координату x третьої сторони прямокутника, x5= ");
let y3 = prompt("Введіть координату y третьої сторони прямокутника, x6= ");
let x4 = 0;
let y4 = 0;
if (x1 == x2) {
  alert((x4 = x3));
} else if (x1 == x3) {
  alert((x4 = x2));
} else if (x1 == x3) {
  alert((x4 = x2));
}
if (y1 == y2) {
  alert((y4 = y3));
} else if (y1 == y3) {
  alert((y4 = y2));
} else if (y1 == y3) {
  alert((y4 = y2));
}
alert("Координати 4 точки" + " " + x4 + " " + y4);

// if24
let x = prompt("Введіть x");
if (x > 0) {
  console.log("", 2 * Math.sin(x));
} else {
  console.log(6 - x);
}

// if25
let x = prompt("Введіть x");
if (x > 2 || x < -2) {
  document.write(2 * x);
} else {
  document.write(-3 * x);
}

// if26
let x = prompt("Введіть x");
if (x <= 0) {
  document.write(-x);
} else if ((x > 0) & (x < 2)) {
  document.write(x ** 2);
} else {
  document.write(4);
}

// if27
let x = prompt("Введіть x");
if (x <= 0) {
  console.log(0);
} else if (Math.trunc(x) % 2 == 0) {
  console.log(1);
} else {
  console.log(-1);
}

// if28
let x = prompt("Введіть рік");
if (x % 100 == 0) {
  if (x % 400 == 0) {
    console.log("366");
  } else {
    console.log("365");
  }
} else if (x % 4 == 0) {
  console.log("366");
} else {
  console.log("365");
}

// if29
let x = prompt("Введіть число");

if (x == 0) {
  console.log("Гуль");
} else if (x > 0) {
  console.log("Додатнє");
} else {
  console.log("Відємне");
}
if (x % 2 == 0) {
  console.log("парне");
} else {
  console.log("непарне");
}
console.log("число");

// if30
let x = prompt("Введіть число");

if (x == 0) {
  console.log("Ноль");
} else if (x % 2 == 0) {
  console.log("Парне");
} else {
  console.log("Непарне");
}
if (x > 99) {
  console.log("трьохзначне");
} else if ((x <= 99) & (x > 9)) {
  console.log("двозначне");
} else {
  console.log("однозначне");
}
console.log("число");
