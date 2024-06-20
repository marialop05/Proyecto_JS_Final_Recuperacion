document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mcdForm');
    const resultDiv = document.getElementById('mcd');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);

        if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
            resultDiv.textContent = 'Por favor, ingresa números enteros positivos.';
            return;
        }

        while (num2) {
            let temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }

        resultDiv.textContent = `El MCD es: ${num1}`;
    });
});