// ПРЕОБРАЗОВАНИЕ ТИПОВ

let value;

// Number to string (варианты)
value = String(10);
value = String(10+40);
value = (40).toString();

// BooLean to string (варианты)
value = String(true);
value = String(false);

// Array to string (варианты)
value = String([1, 2, 3]);

// Object to string (варианты)
value = String({Name = 'Коля', Age = 25});

// Неявная конкотенация
value = 30 + '' // При сложении со сторокой любого типа, он преобразуется в строку
value = 30 - '4'; // При любых других операторах, строка будет пытаться преобразовываться в число, если это не возможно, будет Nan
value = true + 10; // true преобразовывается в 1, false и Null в 0

// ... to number
value = Number('24'); // будет 24
value = Number(false); // будет 0
value = Number(null); // будет 0
value = Number("false"); // будет Nan
value = Number([1, 2, 3]); // будет Nan

value - parseInt('2003dfwefwwf'); // служит для выделения целых чисел, выделит 2003
value - parseFloat('2.3dfwefwwf'); // служит для выделения дробных чисел, выделит 2.3

// ... to boolean
value = Boolean('hello'); // любая не пустая строка, в том числе с одним только пробелом будет считаться true

value = Boolean(''); // любая пустая строка будет считаться false

value = Boolean(-100); // любое число кроме 0 будет считаться true

value = Boolean(null); // false

value = Boolean(undefined); // false

value = Boolean({}); // Пустой объект это true

value = Boolean([]); // Пустой массив это true


console.log(value);
console.log(typeof value);
