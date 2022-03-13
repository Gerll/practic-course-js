// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
//Tríangulo
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("InputTriangulo1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = Number(input2.value);
  const base = document.getElementById("InputTrianguloBase");
  const value3 = Number(base.value);
  const perimetro = perimetroTriangulo(value1,value2,value3);
  alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
  const input1 = document.getElementById("InputTriangulo1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = Number(input2.value);
  const base = document.getElementById("InputTrianguloBase");
  const value3 = Number(base.value);
  const area = areaTriangulo(value1,value2,value3);
  alert("El area del triangulo es: " + area);
}
//Círculo
function calcularPerimetroCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert("El area del circulo es: " + area);
}