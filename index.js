document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero");

    window.addEventListener("scroll", function () {
        if (window.scrollY > heroSection.offsetHeight / 2) {
            navbar.classList.add("small-navbar");
        } else {
            navbar.classList.remove("small-navbar");
        }
    });
});
