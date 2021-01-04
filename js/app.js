let obj = {
product: 'iPhone'
};

obj.currency = 'dollar';
obj.details = {};

obj.details.model = 'XR';
obj['details'].color = 'red';

let value = obj;

console.log(value);