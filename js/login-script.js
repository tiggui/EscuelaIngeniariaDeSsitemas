document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar email y contraseña (ejemplo simple)
    if (email === 'rbolanosa17_1@unc.edu.pe' && password === '123456789') {
        window.location.href = 'Main.html'; // Redirigir a Main.html
    } else {
        alert('Correo o contraseña incorrectos');
    }
});