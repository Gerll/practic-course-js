function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country);
}

//es6
function newFunction2 (name = 'Oscar', age = 32, country = "MX"){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23','CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Neque porro quisquam est qui dolorem ipsum \n"+"quia dolor sit amet, consectetur, adipisci velit..."
console.log(lorem);

// es6
let lorem2 = `Otra frase épica
más texto de relleno`;
console.log(lorem2);

let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

/*let {name, age, country} = person;*/
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yasica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

//Var Let Const
//var
{
    var globalVar = 'Variable global';
}
//let
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

//const
const a = 'b';
console.log(a);

//Arrow Functions, Promesas y Parámetros en objetos
let name = 'Fritz';
let age = '28';

obj = {name: name, age: age};

obj2 = {name, age};
console.log(obj);
console.log(obj2);

const names = [
    {name: 'Jiosh', age: 28},
    {name: 'Qote', age: 38}
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, ages, counttry) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve('Hey');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;

    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator;
console.log(calc.sum(2,2));

const hello = require('./module')
console.log(hello())

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld(); 
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);