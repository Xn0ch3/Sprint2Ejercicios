//Ejercicio N°1 Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno del cuadrado deberá cambiar a celeste. Extras: Al hacer nuevamente click el color del cuadrado deberá cambiar a rojo. Lograr que cada vez que haya un cambio de color aparezca el nombre del color dentro del cuadrado.
let miBoton = document.getElementById('miBoton');
let cambiarcolorBG = document.getElementById('contenedorEjN°1');
let colores = ['grey', 'lightblue', 'pink', 'yellow', 'red', 'blue'];
let indiceColor = 0;

miBoton.addEventListener('click', () => {
    cambiarcolorBG.style.backgroundColor = colores[indiceColor];
    cambiarcolorBG.textContent = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;
});

//Ejercicio N°2 Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá haber un input de texto, al escribir en el input de texto, los que se esté escribiendo deberá aparecer impreso dentro del cuadrado.

let pantalla = document.getElementById('pantalla')
let textoDeInput = document.getElementById('textoDeInput')
let reset = document.getElementById('reset')

textoDeInput.addEventListener('keyup', (event) => {
    pantalla.textContent += event.target.value;
    textoDeInput.value = ''
})


reset.addEventListener('click', () => {
    pantalla.textContent = ''
})

//Ejercicio N°3 Crear una aplicación que calcule el índice de masa corporal, al presionar el botón “calcular” deberá mostrar el resultado en el input correspondiente.

let estatura = document.getElementById('estaturaIngresada')
let peso = document.getElementById('pesoIngresado')
let calcularIMC = document.getElementById('calcularIMC')

calcularIMC.addEventListener('click', () => {
    let imc = (peso.value / (estatura.value * estatura.value)) * 10000
    document.getElementById('resultadoIMC').value = imc
})

// Ejercicio N°4 Crear una aplicación de conversión de divisa. Tomando por defecto 1 dólar = 500 (peso argentino, chileno, uruguayo, etc) . El usuario deberá poder ingresar un monto de una moneda local y el mismo deberá ser convertido a su equivalente en dólares. Extras: El programa además deberá poder convertir de dólares a moneda local y también se deberá incluir un botón para limpiar los inputs.

let monedaLocalIngresada = document.getElementById('monedaLocalIngresada')

let precioDolar = document.getElementById('precioDolar')

let convertirMoneda = document.getElementById('convertirMoneda')

let mostrarCambio = document.getElementById('mostrarCambio')

let borrarCalculo = document.getElementById('borrarCalculo')


monedaLocalIngresada.addEventListener( 'keyup' , (event)=> {
    dolaresIngresados = event.target.value    
})

precioDolar.addEventListener('keyup', (event) => {
    convertirMoneda = event.target.value
})


convertirMoneda.addEventListener( 'click', () => {
    let total = monedaLocalIngresada.value / precioDolar.value
    convertirMoneda.textContent = total
    mostrarCambio.value = total
})

borrarCalculo.addEventListener('click', () => {
    monedaLocalIngresada.value = '';
    precioDolar.value = '';
    convertirMoneda.value = '';
    mostrarCambio.value = '';
})


//Ejercicio N°5 Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno del cuadrado deberá cambiar a celeste. Extras: Al hacer nuevamente click el color del cuadrado deberá cambiar a rojo. Lograr que cada vez que haya un cambio de color aparezca el nombre del color dentro del cuadrado.
let miBoton5 = document.getElementById('miBoton5');
let cambiarcolorBG5 = document.getElementById('contenedorEjN°5');
let color = 0
let clickBoton5 = miBoton5 + color

miBoton5.addEventListener('click', () => {
    color++
    if (color===1 ){
        cambiarcolorBG5.style.backgroundColor = 'green';
        cambiarcolorBG5.textContent ='green'
    }else if (color===2 ){
        cambiarcolorBG5.style.backgroundColor = 'red';
        cambiarcolorBG5.textContent ='red'
    }else if (color===3 ){
        cambiarcolorBG5.style.backgroundColor = 'blue';
        cambiarcolorBG5.textContent ='blue'
        color = 0
    }
});