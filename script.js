// Responsive navbar display
if (window.innerWidth > 768) {
    sidemenu.style.display = "flex";
} else {
    window.onload = function () {
        sidemenu.style.right = "-200px";
        sidemenu.style.display = "inline-block";
    };
}

  //Collapsing and Expanding navbar
var sidemenu = document.getElementById("mobileMenu");
        function openmenu(){
            sidemenu.style.right = "0";
        }

        function closemenu(){
            sidemenu.style.right = "-200px";
        }

// Highlighting Navbar sections
 