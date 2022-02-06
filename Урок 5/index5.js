// // #1
// let i = 1;
// while (i <= 100) {
//   document.write(i + "<br>");
//   i++;
// }

// // #2
// let i = 11;
// while (i <= 33) {
//   document.write(i + "<br>");
//   i++;
// }

// // #3
// let i = 1;
// while (i < 100) {
//   if (i % 2 == 0) {
//     document.write(i + "<br>");
//   }
//   i++;
// }

// // #4
// let i = 1;
// let result = 0;
// for (i = 1; i < 100; i++) {
//   result = result + i;
// }
// document.write(result);

// // #5
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

// // #6
// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result = result + arr[i];
// }
// document.write(result + "<br>");

// // #7
// let obj = { green: "зеленый", red: "красный", blue: "голубой" };
// for (key in obj) {
//   document.write(key + ", ");
// }
// for (key in obj) {
//   document.write(obj[key] + ", ");
// }
// document.write("<br/>");

// // #8
// let obj = { Коля: "200", Вася: "300", Петя: "400" };
// for (key in obj) {
//   document.write(
//     " " + key + " - заробітна плата" + " " + obj[key] + "доларів" + ","
//   );
// }

// // #9
// let arr = [2, 15, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (i > 3 && i < 10) {
//     document.write(arr[i] + "<br>");
//   }
// }

// // #10
// let arr = [-7, 15, 11, 5, -11, 13, 2, 7, -7];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     result = result + arr[i];
//   }
// }
// document.write(result);

// // #11
// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr.length; i++) {
//   if ((arr[i] = 4)) {
//     document.write("Yes");
//   } else {
//     document.write("No");
//   }
// }

// #12
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   let str = arr[i] + "";
//   if (str[0] == "1" || str[0] == "2" || str[0] == "5") {
//     document.write(arr[i] + ", ");
//   }
// }

// // #13
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   str = str + "-" + arr[i];
// }
// document.write(str);

// // #14
// let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (i = 0; i < days.length; i++) {
//   if (i == 5 || i == 6) {
//     document.write("<strong>" + days[i] +"</strong>" + " ");
//   } else {
//     document.write(days[i] + " ");
//   }
// }

// // #15
// let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// let day = 4;
// for (i = 0; i < days.length; i++) {
//   if (i == day) {
//     document.write("<em>" + days[i] + "</em>" + " ");
//   } else {
//     document.write(days[i] + " ");
//   }
// }

// // #16
// let n = 1000;
// let num = 0;
// while (n > 50) {
//   num++;
//   n = n / 2;
// }
// document.write(n + "  ");
// document.write("<strong>" + num + "</strong>");
