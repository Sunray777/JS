<<<<<<< HEAD
let a = 1;
let b = 0;

// if (a > 0) {
//     b = a;
// } else {
//     b = b + 1;
// }

// Тернальный оператор (используется для простых вычислений, для более сложных используется if else)

// выражение ? если ture : если false;

/* Это не лучший вариант */ a > 0 ? b = a : b += 1; // если а больше нуля, то b = a, иначе b = b + 1

/* Вот этот ок */ b = a > 0 ? a : b + 1; // b = если а больше нуля, то b = a, иначе b = b + 1;

// выражение ? если ture : если false выражение ? если ture : если false;

b = a > 0 ? 2 : a < 0 ? 3 : 0; // если а больше нуля b = 2, иначе если а меньше нуля b = 3, иначе b = 0;

console.log(b);

// Switch case

let color = 'orange';

switch(color) {
case 'yellow': 
console.log('Color is yellow');
break; // после каждого кейса надо ставить брейк, чтобы остановить его выполнение
case 'red': 
console.log('Color is red');
break;
default: // дэфолтный кейс ставится в конце, если ни одно из условий кейсов не совпадает
    console.log('Default'); 
} // в скобках указывается переменная, в фигурных скобках указываются кейсы - когда есть чёткие варианты выбора.

// если у кейсов одинаковые функции, код, то можно их склеивать, чтобы не дублировать код

switch(color) {
    case 'yellow': 
    case 'red':
    console.log('Color is yellow' || 'Color is red');
    break;
    default: 
=======
<<<<<<< HEAD
let a = 1;
let b = 0;

// if (a > 0) {
//     b = a;
// } else {
//     b = b + 1;
// }

// Тернальный оператор (используется для простых вычислений, для более сложных используется if else)

// выражение ? если ture : если false;

/* Это не лучший вариант */ a > 0 ? b = a : b += 1; // если а больше нуля, то b = a, иначе b = b + 1

/* Вот этот ок */ b = a > 0 ? a : b + 1; // b = если а больше нуля, то b = a, иначе b = b + 1;

// выражение ? если ture : если false выражение ? если ture : если false;

b = a > 0 ? 2 : a < 0 ? 3 : 0; // если а больше нуля b = 2, иначе если а меньше нуля b = 3, иначе b = 0;

console.log(b);

// Switch case

let color = 'orange';

switch(color) {
case 'yellow': 
console.log('Color is yellow');
break; // после каждого кейса надо ставить брейк, чтобы остановить его выполнение
case 'red': 
console.log('Color is red');
break;
default: // дэфолтный кейс ставится в конце, если ни одно из условий кейсов не совпадает
    console.log('Default'); 
} // в скобках указывается переменная, в фигурных скобках указываются кейсы - когда есть чёткие варианты выбора.

// если у кейсов одинаковые функции, код, то можно их склеивать, чтобы не дублировать код

switch(color) {
    case 'yellow': 
    case 'red':
    console.log('Color is yellow' || 'Color is red');
    break;
    default: 
=======
let a = 1;
let b = 0;

// if (a > 0) {
//     b = a;
// } else {
//     b = b + 1;
// }

// Тернальный оператор (используется для простых вычислений, для более сложных используется if else)

// выражение ? если ture : если false;

/* Это не лучший вариант */ a > 0 ? b = a : b += 1; // если а больше нуля, то b = a, иначе b = b + 1

/* Вот этот ок */ b = a > 0 ? a : b + 1; // b = если а больше нуля, то b = a, иначе b = b + 1;

// выражение ? если ture : если false выражение ? если ture : если false;

b = a > 0 ? 2 : a < 0 ? 3 : 0; // если а больше нуля b = 2, иначе если а меньше нуля b = 3, иначе b = 0;

console.log(b);

// Switch case

let color = 'orange';

switch(color) {
case 'yellow': 
console.log('Color is yellow');
break; // после каждого кейса надо ставить брейк, чтобы остановить его выполнение
case 'red': 
console.log('Color is red');
break;
default: // дэфолтный кейс ставится в конце, если ни одно из условий кейсов не совпадает
    console.log('Default'); 
} // в скобках указывается переменная, в фигурных скобках указываются кейсы - когда есть чёткие варианты выбора.

// если у кейсов одинаковые функции, код, то можно их склеивать, чтобы не дублировать код

switch(color) {
    case 'yellow': 
    case 'red':
    console.log('Color is yellow' || 'Color is red');
    break;
    default: 
>>>>>>> f189c20440ca70aefe2162642ef92d3bc840b736
>>>>>>> 432861202396d5a48a8c9c42b3c8a22aa2778fab
    console.log('Default');}