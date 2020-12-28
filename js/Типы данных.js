// Однострочный комментарий

/*
Многострочный комментарий
*/

/**JSDoc комментарии
 * 
 */

 /** Типы данных:
  * 1. Примитивные
  * - Number: 2019, 1.5, Nan, Infinity
  * - String: 'Heelo', "Hello", `Hello`
  * - Boolean: true, false
  * - Null: nuLL
  * - Undefined: undefined
  * - SymboL()
  */

  /**
   * 2. Объекты (Reference type) Передаются по ссылке.
   * - Object: { name: 'Alexander', age: '33' }
   * * Array(Массив) [1, 2, 3] 
   * * Function: function foo() {}
   * * Date: new Date()
   */

   // Переменные
   var
   let
   const //позволяют создать переменную, которая будет давать ошибку, в случае её переопределения

//    Переопределение объектов

const newObj = 
{
    name: Вася,
    age: 34
};

newObj.age = 35;

console.log(newObj);

