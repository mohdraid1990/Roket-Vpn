// Navbar

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('show');
});


function toggleTextForm() {
    var textForm = document.getElementById("textForm");
    var computedStyle = window.getComputedStyle(textForm);

    if (computedStyle.display === "none") {
        textForm.style.display = "block";
    } else {
        textForm.style.display = "none";
    }
}




function toggleimge() {
    const rotateImg = document.querySelector('.rotate-img');
    rotateImg.classList.toggle('rotate');
}