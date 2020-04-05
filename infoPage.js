var mainNav = document.querySelector('#main');
var navBarToggle = document.getElementById('toggle');
var state = true;

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    state = !state;
    if (!state) {
        navBarToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        navBarToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});