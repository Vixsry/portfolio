// LOADING SCREEN JS
function hideLoader() {
document.getElementById('loaderWrapper').classList.add('hidden');
document.getElementById('mainContent').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
window.addEventListener('load', function() {
setTimeout(hideLoader, 1000);
});
setTimeout(hideLoader, 5000);
});

// NAVBAR SCRIPT JS
document.addEventListener("DOMContentLoaded", function () {
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarNav');
if (navbarToggler && navbarCollapse) {
document.addEventListener('click', function (event) {
const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
navbarCollapse.classList.remove('show');
}
});
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
link.addEventListener('click', function () {
if (navbarCollapse.classList.contains('show')) {
navbarCollapse.classList.remove('show');
}
});
});
} else {
console.error("Navbar elements not found. Please check your HTML.");
}
});

// SMOOTH SCROLL SCRIP
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {
e.preventDefault();
const targetElement = document.querySelector(this.getAttribute("href"));
targetElement.scrollIntoView({
behavior: "smooth",
block: "start" 
});
});
});