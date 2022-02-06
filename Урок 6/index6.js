// // #1
// let a = 10;
// let b = 3;
// alert(a % b);
// document.write(a % b);

// // #2
// let a = 10;
// let b = 2;
// var rest = a % b;
// if (rest != 0) {
//   alert("Делится с остатком " + rest);
// } else {
//   alert("Делится, результат деления: " + a / b);
// }

// // #3
// alert("st =" + 2 ** 10);

// // #4
// document.write(Math.sqrt(245));

// // #5
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let result = 0;
// for (i = 0; i < arr.length; i++) {
//   c = Math.sqrt((result = result + arr[i] ** 3));
// }
// document.write(c);

// // #6
// let c = Math.sqrt(379);
// document.write(Math.round(c) + "<br>");
// document.write(c.toFixed(2) + "<br>");
// document.write(c.toFixed(3) + "<br>");

// // #7
// let c = Math.sqrt(587);
// let b = Math.floor(c);
// let a = Math.ceil(c);
// alert(a + " " + b);

// // #8
// document.write(Math.max(4, -2, 5, 19, -130, 0, 10) + "<br>");
// document.write(Math.min(4, -2, 5, 19, -130, 0, 10) + "<br>");

// // #9
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// alert(getRandomInt(1, 100));

// // #10
// let arr = [];
// for (i = 0; i < 10; i++) {
//   arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// alert(arr);

// // #11
// let a = -3;
// let b = 5;
// document.write(Math.abs(a - b));

// // #12
// let a = 3;
// let b = 5;
// let c = a - b;
// alert(Math.abs(c));

// let a = 6;
// let b = 1;
// let c = a - b;
// alert(Math.abs(c));

// // #13
// let arr = [12, 15, 20, 25, 59, 79];
// let result = 0;
// for (i = 0; i < arr.length; i++) {
//   result = result + arr[i];
// }
// document.write(result / 6);

// // #14
// let a = 10;
// let b = 1;
// if (a == 0) {
//   alert("Факториал числа 0! = 1");
// } else {
//   for (i = 1; i <= a; i++) {
//     b *= i;
//   }
// }
// alert("Факториал числа " + a + "! = " + b);
