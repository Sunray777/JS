// ПЕРЕМЕННЫЕ
let message;
let myMessgae;
myMessgae = 'Сообщение';

"use strict"; // ставится в первой строке, для того, чтобы в код работал по стандарту ES5. Желательно ставить вначале каждого js файла

let myNumber = 10.484;
let myString = 'Привет, я Вася!';
let myBoolean = true; // false
let myNull = null;
let myUndefined = undefined;
let myObject = {
    name: 'Вася',
    age: 25
};

let myAge = 30;
let myNewAge = 18;

myAge = myNewAge; // это переобяъвление переменной
console.log (myNewAge);

var newVar = 'Раньше было так'; // до 2015 года переменные создавались с помощью оператора var. var в отличие от let может вызывать переменную, которая объявлена внутри блока {}


// КОНСТАНТА
const myAge = 30; // тип данных, значение которого не принято менять, хотя можно


/* ТИПЫ ДАННЫХ
udefined - переменная возращает это, если не было объявлено её значение
null 
number
bigint - числа больше 9007199254740991 с n на конце
string
boolean
symbol
object
function 
*/
// Для определения типа данных нужно использовать команду typeof
let userName = 34;
console.log(typeof userName);

// BIGINT
const bigInt = 1234567890123456789012345678901234567890n;


// ЧИСЛА
console.log(40 + myNumber); // сложение
console.log(40 - myNumber); // вычитание
console.log(40 * myNumber); // умножение
console.log(40 / myNumber); // деление
console.log(myNumber ** 2 ); // возведение в степень
myNumber = myNumber + 1; // увеличение переменной на 1
myNumber += 1; // увеличение переменной на 1 аналогично
myNumber ++; // увеличение переменной на 1 аналогично (инкримент)
myNumber = myNumber - 1; // уменьшение переменной на 1
myNumber -= 1; // уменьшение переменной на 1 аналогично
myNumber --; // уменьшение переменной на 1 аналогично (дикримент)
console.log(Math.round(myNumber)); // округление числа
console.log(Math.ceil(myNumber)); // округление числа всегда в большую сторону
console.log(Math.floor(myNumber)); // округление числа всегда в меньшую сторону

let newNumber = 2.463;
console.log(newNumber.toFixed(1)); // уменьшает кол-во знаков после запятой математич. округлением до кол-ва, которое в скобках

// СТРОКИ
'' // - пустая строка
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
console.log('40'+ myNumber); // конкотенация - к строке 50 прибавляется число и получается строка 
console.log(myString + ' Как дела?');
console.log(myString.toLowerCase()); // черерз точку указывается метод, который все буквы сделает маленькими и toUpperCase наоборот

// МАССИВЫ

let names = ['Вася', 'Петя', 'Женя']; // в массиве должны быть однородные данные, у всех элементов свой порядковый номер от 0 
console.log(names[0].toUpperCase()); // вызвали их массива первый элемент массива заглавными буквами

names[0] = 'Таня';
console.log(names[0].toUpperCase());

names.push('Паша'); // в конец массива будет добавлен новый элемент
console.log(names[3]);

// УСЛОВИЯ (BOOLEAN)
if (3 <= 5) { // 3 меньше или равно 5 ? 
    console.log('Да');
}
else {
    console.log('Нет');
}

if (3 != 5 && myNumber > 20) { // Условие будет выполнено, если эти два условия будут выполнены (второе указано после &&)
    console.log('Да');
}
else {
    console.log('Нет');
}

// && это логика "И"
// || это логика "ИЛИ"
// > больше 
// < меньше 
// != не равно !== строгое не равно
// == ранвно === строгое равно
// <= меньше или равно >= больше или равно
// if можно использовать как с else так и без него

// ЦИКЛЫ предназначены для того, чтобы повторять один и тот же участок кода несколько раз
for (let i = 0; i < 10; i++) { // let i это переменная со значением 0, i > 10 это условие, i++ это изменение переменной на 1, после чего цикл опять происходит заново, пока не выдаст значение ложь.
   
    if (i == 5) {
        break; // оператор прирывающий цикл при определнных условиях (if)
            }
        

    if (i == 4) {
        continue; // оператор пропускающий шаг цикла на определнных условиях (if)
            }
    console.log(i);
}

for (var j = 0; j > names.length; j++); {
console.log(names[j]);
}

while цикл (аналогичный вышеописанному for)
let i = 0;
while (i < 10) {
    console.log(i);
    i++; // если эту строку убрать цикл никогда не завершиться
}

ФУНКЦИИ
function sum(x, y) {
console.log(x / y) }; // если результат вычисления необходимо вернуть сюда, а не вывести в консоль, то нужно использовать оператор return вот так: return (x + y);

sum(8, 2); // при вызове функции мы можем передавать данные для x и y вот так.
sum(50, 2);

// ОБЪЕКТЫ

let newObject = {
name: 'Саша',
surname: 'Кашин',
age: 33,
getFullName: function() { // тут мы указываем метод, для возврата имени и фамилии
return this.name + ' ' + this.surname; // если мы находимся внутри объекта, используется this.
}
};

newObject.name = 'Паша'; // тут переопределили имя с Саша на Паша.
console.log(newObject.name); // через точку можно указывать свойства или методы объекта. В методах прописывается ряд действий.
console.log(newObject.getFullName()); // при вызове методов ставятся пустые круглые скобки



// ОПЕРАТОРЫ
let userAge = 30 - 6; // Числа 30 и 6 это операнды, а - это бинарный оператор (так как операндов два)
let userAge = -500; // Число 500 это операнд, а - это унарный оператор (так как операнд один)


// ДРУГОЙ КУРС
alert('Привет мир!');
document.write('Привет мир!'); // document.write выводит текст сразу в браузер

Math.random(); // Math - специальный объект, в котором хранятся различные объекты, связанные с математикой. Команда random возвращает случайное число. С помощью точки мы сообщаем, что нам нужна команда random, которая находится в объекте Math. Название объекта пишется с заглавной буквы.
let myNumber = Math.ceil(Math.random() * 100); // умножаем рандомное число на 100, чтобы получить целые, и потом округляем с помощью ceil

// РЕФАКТОРИНГ (DRY - Don't repeat yourself) улучшение ранее написанного кода, его сокращение, использование циклов, функций, итд.