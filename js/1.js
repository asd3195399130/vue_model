// function compareArrays(arr1, arr2) {
//   return (
//     arr1.length === arr2.length &&
//     arr1.every((item, index) => item === arr2[index])
//   );
// }

// const arr1 = [1, 2, 3, 2, 1];
// const arr2 = [1, 2, 3, 1, 2];

// if (compareArrays(arr1, arr2)) {
//   console.log("两个数组相等");
// } else {
//   console.log("两个数组不相等");
// }

// let a = {
//   name: "zs",
//   age: 18,
//   sex: "男",
// };
// console.log(a);

// let arr = [0, 1, 2, 3, 4, 5, 6];
// let str = arr.join("");
// console.log(str);
// console.log(Array.isArray(str));
for (const i = 0; i < 5; i++) {
  //   console.log(i);
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
