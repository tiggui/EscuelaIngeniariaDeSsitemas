// script.js
document.addEventListener('DOMContentLoaded', function () {
    let cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#ffff99';
        });
        cell.addEventListener('mouseout', function () {
            this.style.backgroundColor = '';
        });
    });
});


var map = L.map('mapa').setView([-7.16744, -78.49642], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([-7.16840, -78.49642]).addTo(map)
    .bindPopup('Ingeniería de Sistemas')
    .openPopup();
