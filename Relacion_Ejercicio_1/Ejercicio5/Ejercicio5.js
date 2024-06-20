/***************************************
*JS de Ejercicio5.html
* Realizado el día 24/5/2024
* Autor : María Lucía López López
****************************************/

function verificarinputString(inputString) {
    if (inputString === inputString.toUpperCase() && /[a-zA-Z]/.test(inputString)) {
        return "La inputString está en mayúsculas.";
    } else if (inputString === inputString.toLowerCase() && /[a-zA-Z]/.test(inputString)) {
        return "La inputString está en minúsculas.";
    } else if (/[a-zA-Z]/.test(inputString)) {
        return "La inputString contiene una mezcla de mayúsculas y minúsculas.";
    } else {
        return "La inputString no contiene letras.";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-group').addEventListener('submit', function(event) {
        event.preventDefault();

        const inputString = document.getElementById('inputString').value.trim();

        if (!/[a-zA-Z]/.test(inputString)) {
            alert("Por favor, introduce una inputString con al menos una letra.");
            return;
        }

        const resultado = verificarinputString(inputString);
        document.getElementById('caracteres').textContent = resultado;
    });
});