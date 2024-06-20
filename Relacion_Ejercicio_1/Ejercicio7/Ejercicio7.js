document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('euclidForm');
    const resultDiv = document.getElementById('euclides');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const dividend = parseInt(document.getElementById('dividend').value);
        const divisor = parseInt(document.getElementById('divisor').value);

        if (isNaN(dividend) || isNaN(divisor) || divisor === 0) {
            resultDiv.textContent = 'Por favor, ingresa números válidos y un divisor diferente de cero.';
            return;
        }

        const quotient = Math.floor(dividend / divisor);
        const remainder = dividend % divisor;

        resultDiv.textContent = `Cociente: ${quotient}, Resto: ${remainder}`;
    });
});