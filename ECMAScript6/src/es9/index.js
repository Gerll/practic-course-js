const obj1 = {
    name: 'Frtiz',
    age: '27',
    country: 'MX',
}

let { name, ...all } = obj;
console.log(name, all);

const obj2 = {
    name: 'Jerry',
    age: '27',
}

const objMore = {
    ...obj2,
    country: 'MX',
}

console.log(objMore);

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Hello world'), 3000)
    : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match [1]
const month = match [2]
const day = match [3]

console.log(year, month, day);