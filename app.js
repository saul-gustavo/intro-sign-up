document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    // Obtener todos los inputs
    const inputs = document.querySelectorAll('.input-content');
    const mensajeTop = document.querySelector('.enviado');


    inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        const errorIcon = errorMessage.nextElementSibling;

        // Resetear el estado de error
        errorMessage.style.display = 'none';
        errorIcon.style.display = 'none';

        // Validar si el campo está vacío
        if (input.value.trim() === '') {
            errorMessage.style.display = 'block';
            errorIcon.style.display = 'block';
            isValid = false;
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            // Validar el formato de email
            errorMessage.textContent = 'Looks like this is not an email';
            errorMessage.style.display = 'block';
            errorIcon.style.display = 'block';
            isValid = false;
        }
    });

    if (isValid) {
        mensajeTop.style.display = "block";
        console.log('Formulario enviado con éxito');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
