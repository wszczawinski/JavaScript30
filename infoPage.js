var mainNav = document.querySelector('#main');
var navBarToggle = document.getElementById('toggle');
//boolen to keep value if clicked or not
var state = true;

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    state = !state;
    //condition for toggle button to change based on boolen
    if (!state) {
        navBarToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        navBarToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});