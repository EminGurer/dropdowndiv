const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchValue = document.querySelector('input').value
    const dropdown = document.querySelector('.dropdown');
    dropdown.innerHTML = searchValue;
    dropdown.style.display = 'block';
})