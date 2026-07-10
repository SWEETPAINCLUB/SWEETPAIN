// =======================================
// SWEETPAIN | SCRIPT V1.1
// =======================================

// Animación al hacer scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all .8s ease";
    observer.observe(section);
});

// =======================================
// BOTÓN PRE-ORDER
// =======================================

const preorderButton = document.getElementById("preorderButton");
const transition = document.getElementById("transition");

if (preorderButton && transition) {

    preorderButton.addEventListener("click", function (e) {

        e.preventDefault();

        transition.classList.add("show");

        setTimeout(function () {

            window.location.href =
                "https://wa.me/525665897458?text=" +
                "Hola%20SweetPain.%0A%0A" +
                "Quiero%20unirme%20a%20la%20preventa%20del%20Artifact%20I%20—%20Quetzal.%0A%0A" +
                "Código:%20%0A" +
                "Talla:%20%0A" +
                "Nombre:";

        }, 1800);

    });

}

// =======================================
// CAMBIAR TÍTULO
// =======================================

document.addEventListener("visibilitychange", function () {

    if (document.hidden) {
        document.title = "Come back to SWEETPAIN";
    } else {
        document.title = "SWEETPAIN";
    }

});
