//Se crea una promesa
const somerhingWillHappen = () => {
    //Se crea "Promise"
    return new Promise((resolve, reject) => {
        //la promesa se resuelve: arroja mensaje
        if (true) {
            resolve('Hey!');
        } else {
            //La promesa no se resuelve: arroja mensaje de error
            reject('Whoops!');
        }
    });
}

//Ejecutar la constante "somerhingWillHappen"
somerhingWillHappen()
    .then(response => console.log(response))
    //En caso de fallar arrojará mensaje 
    .catch(err => console.error(err));


const somerhingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true){
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoops!');
            reject(error);
        }
    });
}

somerhingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

//Llamar varias promesas

Promise.all([somerhingWillHappen(), somerhingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })