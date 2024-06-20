/*********************************************************
 * Nombre: María Lucía López López
 * Curso: 1ºDAM
 * Ejercicio 4 relación de ejercicios 1
 * Añadiendo paletas de colores
 */
    /* los eventos asociados a nodos del documento DOM se establecen en el propio JS 
    y "limpian" el contenido dentro de las etiqueras HTML del documento original */     
    document.getElementById("dark").addEventListener("click", modoDark);
    document.getElementById("light").addEventListener("click", modoLight);
function letraDNI(){
    let numeroDNI = parseInt(document.getElementById("dni").value);

    let resto = numeroDNI % 23;

    const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

    document.getElementById("resultado").innerHTML = "La letra es: "+LETRAS[resto];

    /* un string es en realidad un array de char, y un array es internamente un objeto,
    aunque no conviene tratar ni a los arrays ni a los strings como objetos, además
    estas tres estructuras son ITERABLES --> tienen una serie de características comunes
    para su manipulación. */

    return false;

}

function cambiarTema(backgroundColor, textColor, borderColor, buttonColor) {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    let encabezados = document.querySelectorAll("h1, h3");
    let linea = document.querySelector("hr");
    let labels = document.querySelectorAll("label");
    let botones = document.querySelectorAll("button");
    let formulario = document.querySelector("form");

    formulario.setAttribute("class",  " p-5 mt-5");
    encabezados.forEach(elemento => {
        elemento.setAttribute("class", "text-center " + textColor);
    });
    linea.setAttribute("class", "text-center " + textColor);
    labels.forEach(label => {
        label.setAttribute("class", "text-center " + textColor);
    });
    botones.forEach(boton => {
        boton.setAttribute("class", "btn " + buttonColor);
    });
}

function Dark() {
    cambiarTema("yellow", "white", "btn-warning");
}

function Light() {
    cambiarTema("white", "black",  "btn-primary");
}


