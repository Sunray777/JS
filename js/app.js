// Задачи по методам массивов и их решения

// Задача 5

// function getArray(num) {
//   let arr = [1];
//   for (let i = 2; i <= num; i++) {
//     arr.splice(num, 0, i);
//   }
//   console.log(arr);
//   return arr;
// }
// getArray(10);

// Задача 6

// function doubleArray(arr) {
//   value = arr.slice(0, arr.length);
//   value = arr.concat(arr);
//   console.log(value);
//   return value;
// }

// doubleArray([1, 2, 3]);

// Задача 7
// function changeCollection() {
//   let res = [];
//   for (let i = 0; i < arguments.length; i++) {
//     if (Array.isArray(arguments[i])) {
//       let gu = arguments[i].splice(1);
//       res.push(gu);
//       console.log(arguments[i]);
//     }
//   }

//   return res;
// }
// console.log(changeCollection([1, 2, 3], ["a", "b", "c"]));

// Задача 8

// const users = [
//   {
//     _id: "5e36b779dc76fe3db02adc32",
//     balance: "$1,955.65",
//     picture: "http://placehold.it/32x32",
//     age: 33,
//     name: "Berg Zimmerman",
//     gender: "male",
//   },
//   {
//     _id: "5e36b779d117774176f90e0b",
//     balance: "$3,776.14",
//     picture: "http://placehold.it/32x32",
//     age: 37,
//     name: "Deann Winters",
//     gender: "female",
//   },
//   {
//     _id: "5e36b779daf6e455ec54cf45",
//     balance: "$3,424.84",
//     picture: "http://placehold.it/32x32",
//     age: 36,
//     name: "Kari Waters",
//     gender: "female",
//   },
// ];

// function filterUsers(arr, key, value) {
//   const res = [];
//   if (arr && key && value) {
//     for (let i = 0; i < users.length; i++) {}
//     const fNew = users.find((users) => users[key] === value);
//     res.push(fNew);
//         return res;
//   } else {
//     console.log("Not good");
//     return new Error("Error message");
//   }
// }

// filterUsers(users, "age", 36);

// Задача 9

function firstFunc(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function handler1(el) {
  console.log(el);
  return el.length;
}

function nameToUpperCase(el) {
  return el.toUpperCase();
}

const result = firstFunc(["my", "name", "is", "Trinity"], handler1);
const result2 = firstFunc(["my", "name", "is", "Trinity"], nameToUpperCase);

console.log(result);
console.log(result2);
console.log(el);

// console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));

// function handler2(el) {}

// console.log(firstFunc([10, 20, 30], handler2));

// function handler3(el) {}

// console.log(
//   firstFunc(
//     [
//       { age: 45, name: "Jhon" },
//       { age: 20, name: "Aaron" },
//     ],
//     handler3
//   )
// );

// function handler4(el) {}

// console.log(firstFunc(["abs", "123"], handler4));
