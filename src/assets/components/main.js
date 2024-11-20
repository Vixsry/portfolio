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