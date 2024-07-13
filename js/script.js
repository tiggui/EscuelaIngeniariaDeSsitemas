document.getElementById('institutional-email').addEventListener('click', function() {
    window.location.href = 'login2.html';
});

document.getElementById('parent-access').addEventListener('click', function() {
    // Aquí puedes redirigir a la página de acceso a padres de familia
    // window.location.href = 'login-parents.html';
});

document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName('accordion-header');
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }
});

function hola(){
    var acc = document.getElementsByClassName('accordion-header');
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    }
}