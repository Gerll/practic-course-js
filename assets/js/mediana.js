function CalcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}

const lista = [
    52123,
    100,
    200,
    4000000,
    500
];

function comparar (a, b) {
    return a - b;
}
lista.sort(comparar);

const mitadLista = parseInt(lista.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0){
        return true
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista.length)){
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];
    const promedioElemento = CalcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);
    mediana = promedioElemento;
    } else {
        mediana = lista[mitadLista];
}