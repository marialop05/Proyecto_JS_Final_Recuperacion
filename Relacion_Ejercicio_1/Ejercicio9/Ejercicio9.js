document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('monthForm');
    const resultDiv = document.getElementById('mes');

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const monthNumber = parseInt(document.getElementById('monthNumber').value);

        if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
            resultDiv.textContent = 'Por favor, selecciona un número de mes válido.';
            return;
        }

        resultDiv.textContent = `El mes seleccionado es: ${months[monthNumber - 1]}`;
    });
});