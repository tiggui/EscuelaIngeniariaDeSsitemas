// script.js
document.addEventListener('DOMContentLoaded', function () {
    let cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ffff99';
        });
        cell.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});
