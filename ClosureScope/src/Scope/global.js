//Sólo var puede ser reasingnado
var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello Wolrd';
//console.log(hello);

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () =>  {
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Im Global'
}

anotherFunction();
console.log(globalVar);