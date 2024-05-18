const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);
  
console.log(myMap);
// Set and get
myMap.set('key2', 'another string key');
console.log(myMap.get('key2'));