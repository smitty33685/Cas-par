const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(scrollY > 100) {
        navbar.style.background = "#f6f6f6";
      //  navbar.style.padding = "0.8rem 2rem";
    } else {
        navbar.style.background = "transparent";
    }
})


//Hamburger menu
const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
    navList.classList.toggle("active");
})