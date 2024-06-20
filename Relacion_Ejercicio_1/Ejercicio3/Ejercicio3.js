
document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert('Por favor, introduce valores válidos para los lados.');
        return;
    }

    let type
    if (lado1 === lado2 && lado2 === lado3) {
        type = 'Equilátero';
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        type = 'Isósceles';
    } else {
        type = 'Escaleno';
    }

    document.getElementById('tri').innerHTML = `<p>El triángulo es: ${type}</p>`;
});