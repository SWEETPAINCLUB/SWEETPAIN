// =======================================
// LOADING SCREEN
// =======================================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.classList.add("hide");

document.body.classList.add("loaded");

},2200);

});// =======================================
// SWEETPAIN | SCRIPT V2
// =======================================

// Animación de entrada
window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// =======================================
// SCROLL SUAVE DEL BOTÓN
// =======================================

const enterButton = document.querySelector(".enterButton");

if (enterButton) {

    enterButton.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector("#home").scrollIntoView({

            behavior:"smooth"

        });

    });

}

// =======================================
// APARICIÓN DE SECCIONES
// =======================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.style = "";

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.18

});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// =======================================
// EFECTO EN TARJETAS
// =======================================

const cards = document.querySelectorAll(".card,.signature");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// =======================================
// TÍTULO DINÁMICO
// =======================================

const originalTitle = document.title;

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.title="Return to SWEETPAIN";

    }else{

        document.title=originalTitle;

    }

});
