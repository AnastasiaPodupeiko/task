// // #1
// let arr = [];
// let str = "x";
// for (i = 0; i < 15; i++) {
//   arr.push(str);
//   str = str + "x";
//   document.write(arr + "<br>");
// }

// // #2
// let arr = [];
// let str = "";
// for (i = 1; i < 15; i++) {
//   for (j = 0; j < i; j++) {
//     str = str + i;
//     arr.push(str);
//   }
//   document.write(arr + "<br>");
// }

// // #3
// function arrayFill(value, length) {
//   let arr = [];
//   for (i = 0; i < length; i++) {
//     arr.push(value);
//   }
//   return arr;
// }
// document.write(arrayFill("xy", 15));

// // #4
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function func(arr) {
//   sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > 10) {
//       return i + 1;
//     }
//   }
// }
// document.write(func(arr));

// // #5
// let arr = [1, 3, 5, 6, 7, 9];
// let result = [];
// for (i = arr.length - 1; i >= 0; i--) {
//   result.push(arr[i]);
// }
// document.write(result);

// // #6
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// alert(sum);

// // #7
// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[i].length; j++) {
//     for (k = 0; k < arr[i][j].length; k++) {
//       sum += arr[i][j][k];
//     }
//   }
// }
// alert(sum);

let arr = [];
for (i = 1; i < 10; i++) {
  let str = "";
  for (j = 0; j < i; j++) {
    str += i;
  }
  arr.push(str);
  document.write(arr + "<br>\n");
}
