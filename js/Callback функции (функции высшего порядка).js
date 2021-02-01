// CALLBACK функции.
// Метод map - возвращает новый новый массив состоящий из результата вызова функции колбэка, которая была передана в качестве параметра и возвращает новый массив состоящий из результата вызова нашей функции. Это нужно для сокращения количества кода

// Есть массив
const arr = ["Denis", "Mark", "Alexander", "Elena"];
// [5, 4, 4, 4] надо получить такой массив с кол-вом символов каждого элемента массива, и отдельно все имена заглавными буквами, для этого делаем следующее:

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}
console.log(newArr);

let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
  newArr2.push(arr[i].toUpperCase());
}
console.log(newArr2);
// А можно сделать то же самое череp функцию высшего порядка Callback функцию

const names = ["Denis", "Mark", "Alexander", "Elena"];

function mapArray(arr, fn) {
  const res = []; // Результирующий массив
  for (
    let i = 0;
    i < arr.length;
    i++ // функция будет проходиться по этому переданному массиву
  )
    res.push(fn(arr[i])); // но на каждой итерации она будет пушить в результирующий массив результат вызова переданной функции
}
return res; // возвращаем результирующий массив

// Я буду передавать функцию, которая будет принимать один элемент массива, что-то с ним делать, и возвращать измененный результат

function nameLength(el) {
  // она будет принимать один элемент массива
  console.log(el);
  return el.length; // получаем длинну элементов массива
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);
console.log(result); // получается, что для каждой задачи есть отдельная функция обработчик

mapArray(names, nameLength);

// ПРИМЕР

function greeting(firstname) {
  // из этой функции
  return function (lastname) {
    // мы возвращаем эту функцию
    return `Hello, ${firstName} ${lastName}`;
  };
}

const testGreeting = greeting("Denis"); // и таким образом можем ей воспользоваться
const fullName = testGreeting("Petrov"); // и таким образом можем ей воспользоваться
console.log(fullName);

// Ещё вариант, как мы можем воспользоваться этой функцией

const fullName = greeting("Denis")("Petrov"); // Сначала вызываем превую функцию, она возвращает вторую функцию, мы её сразу же вызываем(Петров) и она возвращает уже Hello, имя, фамилия. Либо можем разбить на два вызова
console.log(fullName);

// ПРИМЕР 2
function qestion(job) {
  if (job === "developer") {
    return function (name) {
      return `${name}, что такое JS?`;
    };
  } else if (job === "teacher") {
    return function (name) {
      return `${name}, какой предмет вы ведёте?`;
    };
  }
}

const developerQestion = question("developer");
console.log(developerQestion("Denis"));
const developerQestion = question("teacher");
console.log(developerQestion("Denis"));

// Эту функцию можно существенно упростить, для этого создаём словарь, где ключём будет название работы, а значением будет вопрос

function qestion(job) {
  const jobDictionary = {
    developer: "что такое JS?",
    teacher: "какой предмет вы ведёте?",
  };
  // и вставляем вместо ифов это
  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}

const developerQestion = question("developer");
console.log(developerQestion("Denis"));
const developerQestion = question("teacher");
console.log(developerQestion("Denis"));
