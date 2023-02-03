const body = document.querySelector("body");
const nav = document.querySelector("nav");
const siderbarClose = document.querySelector(".siderbarClose");
const siderbarOpen = document.querySelector(".siderbarOpen");



siderbarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

siderbarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;
    if (!clickedElm.classList.contains("siderbarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});


document.querySelector("a[href='#hero-section']").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("hero-section").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("a[href='#about-me-section']").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("about-me-section").scrollIntoView({ behavior: "smooth" });
  });
  
  document.querySelector("a[href='#projects-section']").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelector("a[href='#contact-section']").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
  });