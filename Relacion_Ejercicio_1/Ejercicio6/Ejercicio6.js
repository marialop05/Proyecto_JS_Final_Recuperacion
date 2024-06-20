
function esPalindromo(inputString) {
    return inputString === inputString.split('').reverse().join('');
}

function generarPalindromo(inputString) {
    return inputString + inputString.split('').reverse().join('');
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-group').addEventListener('submit', function(event) {
        event.preventDefault();

        const inputString = document.getElementById('inputString').value.trim();

        if (inputString === '') {
            alert("Por favor, introduce una cadena.");
            return;
        }

        let results;

        if (esPalindromo(inputString)) {
            results = "La cadena es un palíndromo.";
        } else {
            results = `La cadena no es un palíndromo. Su palíndromo correspondiente es: ${generarPalindromo(inputString)}`;
        }

        document.getElementById('caracteres').textContent = results;
    });
});