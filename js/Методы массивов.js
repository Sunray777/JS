// МЕТОДЫ МАССИВОВ

const numArr = [2, 32, 1245, 34];

let value;

value = numArr.length;

value = Array.isArray(numArr); // Array.isArray(numArr) это проверка является ли этот атрибут массивом

value = numArr[2]; // так мы получаем элемент массива 1245

numArr[2] = 12; // переопределение индекса 2 (число 1245 изменится на 12)

value = numArr.indexOf(32); // возвращает индекс искомого в скобках элемента массива

// МЕТОД PUSH (Добавляет с конца)
value = numArr.push(84354, 4, 343);

// МЕТОД POP(Удаляет с конца)
value = numArr.pop(); // метод ничего не принимает, удалаяет один элемент массива с конца и возвращает его в переменную value

// МЕТОД unshift (Добавляет с начала и возвращает общую длину)
value = numArr.unshift(84354, 4, 343);

// МЕТОД shift (Удаляет с начала один элемент и возвращает общую длину)
value = numArr.shift();

// МЕТОД slice (Возвращает ту часть массива, которую мы указали, не изменяя при этом массив, в отличие от других методов)
value = numArr.slice(0, 2); // В скобках указываются индексы от и до

// МЕТОД splice (Универсальный метод удаления)
value = numArr.splice(1, 1); // первое число в скобках это стартовый индекс, с которого нужно начать, второе число указывает сколько элементов нужно удалить (начиная со стартового индекса) изменяет массив!!!

value = numArr.splice(1, 2, "one", "reerew"); // вместо двух удалённых элементов массива, добляет два новых (пример)

value = numArr.splice(1, 0, "one", "reerew"); // ничего не удаляет, а добавляет два новых с того индекса который указан в скобках

value = numArr.reverse(); // измеяет массив, переворачивая его наоборот

value = numArr.concat(1, 45456, 33); // как и slice делает копию массива, может объединять массивы, можно передавать значения через запятую, и он их сконкатенирует с массивом

value = numArr.join(); // преобразовывает весь массив в строку в скобочках указывается разделитель между элементами, если его нет по умолчанию им будет запятая.

value = "hello".split(); // преобразовывает строку в массив. Если () возвращает всю строку в виде одного элемента, если ("") каждую букву сделает элементом массива, если (" ") он по этому разделителю разобъет строку на элементы массива

console.log(value, numArr);
