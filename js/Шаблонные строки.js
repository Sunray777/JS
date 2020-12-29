const firstName = 'Alex';
const lastName = 'Aga';
const age = 30;


let str;

// Устаревший вариант
str = '<ul>' +
      '<li>Имя: ' + firstName + '</li>' +
      '<li>Фамилия: ' + lastName + '</li>' + 
      '<li>Возраст: ' + age + '</li>' +
      '</ul>';
// console.log (str);

// Новый вариант работы с шаблонами строк по стандарту ES 6 
str = `
<ul>
<li>Имя: ${ firstName }</li>
<li>Фамилия: ${ lastName }</li>
<li>Возраст: ${ age }</li>
<li>Рэндомное число: ${ Math.random() }</li>
<li>Вычисления: ${ 5 + 5 }</li>
</ul>
`;

// Добавляем этот шаблон в наш DOM (body)
document.body.innerHTML = str;