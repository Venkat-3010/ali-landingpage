const scrollup = document.querySelector("#scroll-up");
const checkbox = document.querySelector("#checkbox");
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLinks = document.querySelectorAll("#nav-link");

    scrollup.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });

    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });

    function openMenu(){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    hamburger.addEventListener("click", openMenu);

    navLinks.forEach((n) => n.addEventListener("click", closeMenu));
    
    function closeMenu(){
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }