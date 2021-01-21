// Задачи по методам массивов и их решения

// Задача 1

// function getArray(num) {
//   let arr = [1];
//   for (let i = 2; i <= num; i++) {
//     arr.splice(num, 0, i);
//   }
//   console.log(arr);
//   return arr;
// }
// getArray(10);

// Задача 2

// function doubleArray(arr) {
//   value = arr.slice(0, arr.length);
//   value = arr.concat(arr);
//   console.log(value);
//   return value;
// }

// doubleArray([1, 2, 3]);

// Задача 3
function changeCollection() {
  if (Array.isArray(arguments) === true) {
    value = arguments.shift();   
    console.log(value);     
  }
}
  (changeCollection([1, 2, 3], [a, b, c])


