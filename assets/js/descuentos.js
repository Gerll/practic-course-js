const precioOriginal = 100;
const descuento = 15;



console.log(precioDescuentos);

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDescuento = 100 - descuento;
    const precioDescuentos = (precio * porcentajeDescuento/100);

    return precioDescuentos;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;
    const InputDiscount = document.getElementById("InputDiscount");
    const valueDiscount = InputDiscount.value;
    const price = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es: " + price;
    //alert ("El precio con descuento es: " + price); 
}
