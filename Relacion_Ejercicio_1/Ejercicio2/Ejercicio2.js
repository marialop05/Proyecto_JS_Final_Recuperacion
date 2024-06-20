document.getElementById('calculadora').addEventListener('submit', function(event){
    event.preventDefault();
    var radio = parseFloat(document.getElementById("radio").value);

    var circunferencia = 2* Math.PI * radio;
    var area = Math.PI * Math.pow(radio,2);
    var volumen = (4/3) * Math.PI * Math.pow(radio, 3);

    document.getElementById("circunferencia").innerHTML = "La longitud de la circunferencia es: " + circunferencia.toFixed(2);
    document.getElementById("area").innerHTML = "El área del círculo es: " + area.toFixed(2);
    document.getElementById("volumen").innerHTML = "El volumen de la esfera es: " + volumen.toFixed(2);

    return false;
})