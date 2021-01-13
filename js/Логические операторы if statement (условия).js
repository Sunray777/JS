let value;

value = 2 == 2;
value = 2 == '2'; // нестрогое равевнство между числом и строкой будет true, со строгим равенством будет false
value = 2 != '2'; // также с неравенством
value = 2 !== '2'; // и со строгим неравенством
value = 'a' > 'A'; // будет тру так как а маленькая имеет больший юникод, чем А большая
value = 'A'.charCodeAt(); // чтобы посмотреть вес символа (какой юникод) или строки можно использовать этот метод

// УСЛОВИЯ if else

if (условие) // в круглых скобках пишется любой валидный код
{//тут пишется код, который выполнится, если условие правдиво
} else {
    // тут пишется код, который выполнится если if будет false 
}

value = null;

if (value === 10) {
    console.log('value: 10');
} 
else {
    console.log('else');
}

if (value) { //так проверяем есть ли значение у этой переменной
console.log('some actions', value);
} else {console.log('else', value);}
// если значение переменной value дует 0, null, '', NaN, undefined будет выполняться else.

// когда мы хотим проверить что значения нету, используем следующие логические операторы

value = null;
if (!value ) { // восклицательный знак означает не, нет
    console log('пусто');
}
console.log(value);


value = []; //даже пустой массив всегда true

if (value.length) { //метод length проверяет есть ли что-то в массиве
    console.log(value);
} else {
    console.log('array is empty');
}

if (Array.isArray(value)) { // так можно проверить массив ли это
    console.log(value);
} else {console.log('it is not array');}

let user = {
    name: 'Alex'
};

// как проверить есть ли такое-то поле внутри объекта
if (user.name) {
    console.log(user.name);
} else {console.log('нет');}

// или так

if (user.hasOwnProperty('name')) { // можно использовать такой метод на наличие ключа, но он не проверяет на наличие значения.
    console.log(user.name);
} else {console.log('нет');}

// И и ИЛИ &&-и ||-или
// ИЛИ возвращает первый попавшийся true или последний false (если true не встретилось)
// И возвращает первый попавшийся false или последний true (если false не встретилось)

value = 1 || 0 || 2; //вернётся 1, так как оператор останавливается на true, т.е. возвращает первый true или последний false

let age = 10;
if (age < 16 || age > 65) { // если возраст меньше 16 или больше 65 то
    console.log('some action');
}
console.log(value);

// Оператор ИЛИ помимо условий часто используется для определения значения переменной

let serverNick = 'Alex'; 
let nickname = serverNick || 'default nick'; // если с сервера приходит ник, то он его запишет, если нет, то выдаст default nick


// ОПЕРАТОР И  (всегда останавливается на лжи)

value = 1 && 0 && 3;
console.log(value); // вернёт 0 так как он false

let productPrice = 10;

if (productPrice >= 5 && productPrice <= 20) { // два условия обязательны для выполнения
    console.log('беру');
    console.log(value);
}

value = 10;
if (value < 10) {
    console.log('value < 10', value);
} else if (value >= 10) {//если нужно проверить ещё одно условие и выполнить какую-то другую команду для этого условия, их может быть много, но рекомендуют не больше трёх
console.log('value >=10', value);} 
else {
    console.log('else');

let value;

value = 2 == 2;
value = 2 == '2'; // нестрогое равевнство между числом и строкой будет true, со строгим равенством будет false
value = 2 != '2'; // также с неравенством
value = 2 !== '2'; // и со строгим неравенством
value = 'a' > 'A'; // будет тру так как а маленькая имеет больший юникод, чем А большая
value = 'A'.charCodeAt(); // чтобы посмотреть вес символа (какой юникод) или строки можно использовать этот метод

// УСЛОВИЯ if else

if (условие) // в круглых скобках пишется любой валидный код
{//тут пишется код, который выполнится, если условие правдиво
} else {
    // тут пишется код, который выполнится если if будет false 
}

value = null;

if (value === 10) {
    console.log('value: 10');
} 
else {
    console.log('else');
}

if (value) { //так проверяем есть ли значение у этой переменной
console.log('some actions', value);
} else {console.log('else', value);}
// если значение переменной value дует 0, null, '', NaN, undefined будет выполняться else.

// когда мы хотим проверить что значения нету, используем следующие логические операторы

value = null;
if (!value ) { // восклицательный знак означает не, нет
    console log('пусто');
}
console.log(value);


value = []; //даже пустой массив всегда true

if (value.length) { //метод length проверяет есть ли что-то в массиве
    console.log(value);
} else {
    console.log('array is empty');
}

if (Array.isArray(value)) { // так можно проверить массив ли это
    console.log(value);
} else {console.log('it is not array');}

let user = {
    name: 'Alex'
};

// как проверить есть ли такое-то поле внутри объекта
if (user.name) {
    console.log(user.name);
} else {console.log('нет');}

// или так

if (user.hasOwnProperty('name')) { // можно использовать такой метод на наличие ключа, но он не проверяет на наличие значения.
    console.log(user.name);
} else {console.log('нет');}

// И и ИЛИ &&-и ||-или
// ИЛИ возвращает первый попавшийся true или последний false (если true не встретилось)
// И возвращает первый попавшийся false или последний true (если false не встретилось)

value = 1 || 0 || 2; //вернётся 1, так как оператор останавливается на true, т.е. возвращает первый true или последний false

let age = 10;
if (age < 16 || age > 65) { // если возраст меньше 16 или больше 65 то
    console.log('some action');
}
console.log(value);

// Оператор ИЛИ помимо условий часто используется для определения значения переменной

let serverNick = 'Alex'; 
let nickname = serverNick || 'default nick'; // если с сервера приходит ник, то он его запишет, если нет, то выдаст default nick


// ОПЕРАТОР И  (всегда останавливается на лжи)

value = 1 && 0 && 3;
console.log(value); // вернёт 0 так как он false

let productPrice = 10;

if (productPrice >= 5 && productPrice <= 20) { // два условия обязательны для выполнения
    console.log('беру');
    console.log(value);
}

value = 10;
if (value < 10) {
    console.log('value < 10', value);
} else if (value >= 10) {//если нужно проверить ещё одно условие и выполнить какую-то другую команду для этого условия, их может быть много, но рекомендуют не больше трёх
console.log('value >=10', value);} 
else {
    console.log('else');
