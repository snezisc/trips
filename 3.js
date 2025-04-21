function getAllKeys(obj) {
    let keys = [];
    
    // Используем цикл for...in для перебора всех свойств объекта
    for (let key in obj) {
        keys.push(key);
    }
    
    return keys;
}

// Пример использования
const exampleObject = Object.create({ prototypeKey: 'value' });
exampleObject.ownKey = 'ownValue';

const allKeys = getAllKeys(exampleObject);
console.log(allKeys); // ['ownKey', 'prototypeKey']
