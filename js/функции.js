// Function Declaration (доступны в любом месте кода, даже до её объявления)

function sayHello() {
  console.log("Hello");
} // sayHello - имя функции, в круглых скобках будут передаваться параметры функци, которые она будет принимать, в фигурных скобках - тело функции, там отражается вся логика работы функции.

// Функции должны быть лаконичными и чистыми(должна работать только с входными параметрами, не должна изменять глобальные переменные, массивы и др. надо копировать, так как функция может их изменить.

sayHello(); // Функцию можно множество раз вызывать, единожды прописав логику. Что очень удобно

// ВХОДНЫЕ ПАРАМЕТРЫ для функций
function sayHello(firstName, lastName) {
  // Для того, чтобы принять аргументы, нужно объявить параметры, которые будет принимать эта функция. Они указываются в круглых скобках

  // Для того, чтобы передать в функцию аргументы надо указать в том же порядке при объявлении переменной, иначе они будут undefined
  sayHello("Alex", "Agafonov");
  console.log(firstName, lastName);
}
// для того, чтобы указать, что должна вернуть функция (показать результат), нужно написать
return `Hello ${firstName} ${lastName}`;
// всё что после return не будет выполняться дальше
let res = sayHello("Alex", "Agafonov"); // только после указания return в переменную res будет возрващён результат.

console.log(res);

function sayHello(firstName = "Alex", lastName = "Agafonov") {}
// Можно указывать значения аргументов прямо в функции в круглых скобках, если значения не были переданы другим способом

// Вот так выглядит функция

function sayHello(firstName = "Alex", lastName = "Agafonov") {
  console.log(firstName, lastName);
  console.log("Hello");
  return `Hello ${firstName} ${lastName}`;
}

let res = sayHello("Alexaner", "Agafonov");
console.log(res);

// ОБЛАСТЬ ВИДИМОСТИ функции
// Глобальная область видимости

let x = 10;
function foo() {
  let x = 20; // если мы обращаемся к какой-либо переменной, не объявленной в рамках функции, сначала она ищется в теле функции{}, потом в агрументах функции() и если там и там её нет, она пойдёт в глобальное пространство.

  console.log(x);
}

foo();

console.log(x);

// ВНИМАНИЕ!!! Функция не должна переопределять или работать с аргументами и переменными, объявленными вне её (в глобальном пространстве) это плохая практика.

// Если переменная объявляется внутри функции, она считается локальной и действует только внутри функции

// Объявленные в аргументах() параметры являются как бы обявлением переменной внутри функции и действуют тоже только внутри её. Передаваемые объекты не должны изменяться, а если меняются, то до этого должны быть скопированы в функцию, затем изменяться и возвращаться с помощью return

const user = {
  name: "Alex",
  age: 30,
};

function getObj(obj) {
  console.log(obj);
  obj.name = "Alexander";
}

getObj(user); // вызываем функцию getObj и передаём туда объект user

// FUNCTION EXPRESSION фунционал такой же, как у DECLARATION, только объявляется по-другому. Мы её объявляем, записывая в переменную

const square = function (x) {
  return x * x;
}; // мы не можем вызывать эту функцию до её объявления

// САМОВЫЗЫВАЮЩАЯСЯ ФУНКЦИЯ
(function (msg) {
  console.log(msg);
})("Hello");

// в такие функции часто заворачивается основной код

// Итерируемая коллекция ARGUMENTS / псевдомассив - объект, который можно перебирать циклами
function foo() {
  console.log(arguments); // arguments это все аргументы, которые были переданы в функцию

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
foo(11, "some string", [1, 2, 3]);

// Пример функции из задачи

function guessTheNumber(num) {
  if (num <= 10 && num >= 0) {
    res = Math.ceil(Math.random() * num) + 1;
    console.log(res);
    return res;
  } else if (num !== "number") {
    return new Error("Please provide a valid number");
  } else {
    return new Error("Please provide a number in range 0-10");
  }
}
let x = guessTheNumber(12);
console.log(x); // Error "Please provide a number in range 0-10"

x = guessTheNumber(10);
console.log(x); // Random number 0-10

x = guessTheNumber("Hello");
console.log(x); // Error "Please provide a valid number"
