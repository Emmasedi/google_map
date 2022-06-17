var Toggler = document.querySelector('.toggler');
var Navbar = document.querySelector('.nav-bar');
Toggler.addEventListener('click', function() {
    Navbar.classList.toggle('nav-active');
});