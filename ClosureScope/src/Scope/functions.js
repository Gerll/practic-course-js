const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
//Error
console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    //Variables con let y const NO se pueden reasignar
    //let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();