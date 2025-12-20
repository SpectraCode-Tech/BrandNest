var sidemenu = document.getElementById("mobileMenu");

// Responsive navbar display
if (window.innerWidth >= 768) {
  sidemenu.style.display = "flex";
} else {
  window.onload = function () {
    sidemenu.style.right = "-200px";
    sidemenu.style.display = "inline-block";
  };
}

//Collapsing and Expanding navbar

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// Highlighting Navbar sections

// Get all sections and nav links
const sections = document.querySelectorAll("section, header, div[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
