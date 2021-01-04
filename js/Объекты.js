const user = {
    firstName: 'Alex',
    age: 33,
    isAdmin: true,
    email: 'est@dfef.com',
    'user-adress': {
        city: 'Moscow'
    },
    skills: ['html', 'css', 'js']
};

let value;

let prop = 'skills';

value = user.firstName; // 1 вариант получения свойства firstName объекта user

value = user['isAdmin']; // 2 вариант получения свойства объекта

value = user['user-adress']; // если ключ через дефис, то 1-й вариант не сработает, но 2 сработает

value = user['user-adress'].city;
value = user['user-adress']['city']; // варианты распознания свойств вложенных ключей

value = user[prop][0]; // подставляется переменная первое значение массива skills из переменной prop

user.firstName = 'Alexander'; // переопределение свойства firstName объекта user

user.info = 'Some info'; // если мы обратимся к свойтсву, которого нет в объекте user - в объекте user будет создан ключ инфо, со значением после равно (в данном случае 'Some info')

user['user-adress'].city = 'St.Petersburg'; // перезапись значения вложенного объекта

user['user-adress'].country = 'Russia'; // создания нового свойства ключа вложенного объекта

// если мы пытаемся создать новое свойство в несуществующий объект, то получим ошибку

// ДЗ

let obj = {
    product: 'iPhone'
    };
    
    obj.currency = 'dollar';
    obj.details = {};
    
    obj.details.model = 'XR';
    obj['details'].color = 'red';// создаём новые подобъекты и их свойства разными способами
    
    let value = obj;
    
    console.log(value);
