// let carrito = ["medias", "zapatillas"];

// if (carrito.length > 0) {
//     console.log("Carrito con productos, hay " + carrito.length + " Productos.");

//     carrito.forEach( (producto) => { console.log(producto)});
// } else {
//     console.log("carrito vacio");
// }

// let total = 1000;

// if (total > 2000) {
//     console.log("Tienes un descuento del 20%");    
// } else if (total > 1000) {
//     console.log("Tienes un descuento del 10%");
// } else {
//     console.log("No tienes descuento");
// }

//5)

// let mesSeleccionaddo = "Septiembre";

// if (mesSeleccionaddo == "Enero" || mesSeleccionaddo == "Febrero" || mesSeleccionaddo == "Marzo") {
//     console.log("Primer Trimestre")
// } else if (mesSeleccionaddo == "Abril" || mesSeleccionaddo == "Mayo" || mesSeleccionaddo == "Junio") {
//     console.log("Segundo trimestre");
// } else if (mesSeleccionaddo == "Julio" || mesSeleccionaddo == "Agosto" || mesSeleccionaddo == "Septiembre") {
//     console.log("Tercer trimestre");
// } else {
//     console.log("Cuarto trimestre");
// }


let btnCalcular = document.getElementById("btnCalcular");



btnCalcular.addEventListener("click", () => {
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    let operacion = parseInt(document.getElementById("operacion").value);
    let resultado = numero1 + numero2;

    console.log(numero1);
    console.log(numero2);
    console.log(operacion);

    switch (operacion) {
        case 1:
            resultado = numero1 + numero2;
            break;
        case 2:
            resultado = numero1 - numero2;
            break;
        case 3:
            resultado = numero1 * numero2;
            break;
        case 4:
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "Operacion no valida";
            break;
    }

    console.log(resultado);
    
    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
});







