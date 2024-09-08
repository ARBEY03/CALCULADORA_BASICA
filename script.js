$(document).ready(function() {
    // Este bloque se ejecuta cuando el documento HTML ha sido cargado completamente

    $('#calculate-btn').click(function() {
        // Este bloque se ejecuta cuando se hace clic en el botón con id 'calculate-btn'

        // Obtener los valores de los campos de entrada y convertirlos a números
        var num1 = parseFloat($('#num1').val()); // Captura el valor del primer número
        var num2 = parseFloat($('#num2').val()); // Captura el valor del segundo número
        var operation = $('#operation').val(); // Captura la operación seleccionada
        var result; // Variable para almacenar el resultado

        // Validación: si alguno de los dos números no es válido, se muestra un mensaje de error
        if (isNaN(num1) || isNaN(num2)) {
            $('#result').text('Por favor, ingresa números válidos.').css('color', 'red'); // Muestra el mensaje en rojo
            return; // Sale de la función para evitar continuar con el cálculo
        }

        // Selección de la operación aritmética en función de lo que el usuario seleccionó
        switch (operation) {
            case 'add':
                result = num1 + num2; // Suma
                break;
            case 'subtract':
                result = num1 - num2; // Resta
                break;
            case 'multiply':
                result = num1 * num2; // Multiplicación
                break;
            case 'divide':
                // Validación: si el segundo número es 0, no se puede dividir y muestra un mensaje de error
                if (num2 === 0) {
                    $('#result').text('No se puede dividir por cero.').css('color', 'red'); // Muestra el mensaje en rojo
                    return; // Sale de la función para evitar el cálculo
                }
                result = num1 / num2; // División
                break;
            default:
                result = 'Operación no válida'; // Si por alguna razón la operación no coincide con ninguna opción
        }

        // Mostrar el resultado de la operación en el contenedor con id 'result'
        $('#result').text('Resultado: ' + result).css('color', 'white'); // Muestra el resultado en blanco
    });
});
