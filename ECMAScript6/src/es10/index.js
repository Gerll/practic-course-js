//Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat())

//flatMap
let arrayMap = [1,2,3,4,5];
console.log(arrayMap.flatMap(value => [value, value * 2]));

//trimStart
let hello = '       hello world';
console.log(hello);
console.log(hello.trimStart());

let helloTrimEnd = 'Hello world         ';
console.log(helloTrimEnd);
console.log(helloTrimEnd.trimStart());

try {

} catch {
    error
}
//fromEntries
let entries = [["name","Fritz"],["age","27"]];
console.log(Object.fromEntries(entries));

let mySybl = 'My symbol';
let symbol = Symbol(mySybl);
console.log(symbol.description);