document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar email y contraseña (ejemplo simple)
    if (email === 'rbolanosa17_1@unc.edu.pe' && password === '123456789') {
        alert('Login exitoso');
        window.location.href = 'index.html'; // Redirigir a index.html
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
