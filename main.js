//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $agregarElemento = document.querySelector('#agregar')
const listaNumeros = [];
let x = 0;

$agregarElemento.onclick= function(){
    let nuevoElemento =Number(document.querySelector('#nuevo-elemento').value);
    listaNumeros.push(nuevoElemento)
    const nuevaLista = document.querySelector('ol');
    const nuevoLi = document.createElement('li');
    nuevoLi.innerText = (nuevoElemento);
    nuevaLista.appendChild(nuevoLi);
    return false
}

function sumar(a, b){
    return a + b;
}

const $calcular = document.querySelector('#calcular');

$calcular.onclick = function(){
    let contadorPromedio= 0;
    let promedioFinal = 0;
    for(i=0; i<listaNumeros.length; i++){
        
        contadorPromedio=listaNumeros[i] + contadorPromedio;
    }
    promedioFinal= contadorPromedio/listaNumeros.length;
   
    const $promedio = document.querySelector('#promedio');
    $promedio.innerText= ('El promedio es ' + promedioFinal);

    let menorNumero = 0;
    for(i=0; i<listaNumeros.length; i++){
        if(i===0){
            menorNumero= listaNumeros[0];
        } else {
            if( menorNumero>listaNumeros[i]){
                menorNumero= listaNumeros[i]
            }
        }
    }
    const $menor = document.querySelector('#menor');
    $menor.innerText=('El menor numero es ' + menorNumero);

    let mayorNumero = 0;
    for(i=0; i<listaNumeros.length; i++){
        if(i===0){
            mayorNumero= listaNumeros[0];
        } else {
            if(mayorNumero<listaNumeros[i]){
                mayorNumero= listaNumeros[i]
            }
        }
    }
    const $mayor = document.querySelector('#mayor');
    $mayor.innerText= ('El mayor numero es ' + mayorNumero);


    let masRepetido = 0;
    let contadorMax = 0;
    let numeroActual = 0;
    masRepetido= listaNumeros[0];
    for(i=0; i<listaNumeros.length; i++){
        let contadorActual = 0;
        numeroActual= listaNumeros[i];
        for(x=0; x<listaNumeros.length; x++){
            if(numeroActual===listaNumeros[x]){
                contadorActual++;
            }
        }
        if(contadorMax<=contadorActual){
            masRepetido = numeroActual;
            contadorMax = contadorActual;}
    }
    
    const $repetido = document.querySelector('#repetido');
    $repetido.innerText= ('El numero que se repite mas veces es ' + masRepetido);
    

    return false
}
