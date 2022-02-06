// // #1
// let str = "js";
// alert(str.toUpperCase());

// // #2
// let str = "JS";
// alert(str.toLowerCase());

// // #3
// let str = "я учу javascript!";
// alert(str.length);

// // #4
// let str = "я учу javascript!";
// alert(str.substring(2, 5) + "  " + str.substring(6, 16));
// alert(str.slice(2, 5) + "  " + str.slice(6, 16));

// // #5
// let str = "я учу javascript!";
// alert(str.indexOf("учу"));

// // #6
// let str = "я учу javascript!";
// let n = 7;
// if (str.length > n) {
//   let result = str.slice(0, n + 1);
//   alert(result + "...");
// } else {
//   result = str;
//   alert(result);
// }

// // #7
// let str = "Я-учу-javascript!";
// str = str.replace(/-/gi, "!");
// alert(str);

// // #8
// let str = "я учу javascript!";
// let arr = str.split(" ");
// alert(arr);

// // #9
// let str = "я учу javascript!";
// let arr = str.split("");
// alert(arr);

// // #10
// let date = "2025-12-31";
// let date2 = date.split("-");
// alert(date2[2] + "-" + date2[1] + "-" + date2[0]);

// // #11
// let arr = ["я", "учу", "javascript", "!"];
// let str = arr.join("+");
// alert(str);

// // #12
// let str = "я учу javascript!";
// let str2 = str.slice(0, 1).toUpperCase() + str.slice(1);
// document.write(str2);

// #13
let str = "я учу javascript!";
let str2 = str.split("  ");
let arr = str2;
for (let i = 0; i < arr.length; i++) {
  if (arr[0] != arr[i]) {
    arr[i] = arr[i].toUpperCase();
  }
}
let result = arr.join("  ");
alert(result);

// // #14
// let str = "var_test_text";
// let str2 = str.split("_");
// let arr = str2;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[0] != arr[i]) {
//     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//   }
// }
// let result = arr.join("");
// document.write(result);
