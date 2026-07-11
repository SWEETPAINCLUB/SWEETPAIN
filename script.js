// =======================================
// SWEETPAIN | SCRIPT V3
// =======================================

// LOADER
window.onload = function () {

    const loader = document.getElementById("loader");

    if(loader){

        loader.classList.add("hide");

    }

    document.body.classList.add("loaded");

};

// BOTÓN ENTER
const enterButton = document.querySelector(".enterButton");

if(enterButton){

    enterButton.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector("#home").scrollIntoView({

            behavior:"smooth"

        });

    });

}

// ANIMACIÓN DE SECCIONES
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// TARJETAS
document.querySelectorAll(".card,.signature").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// TÍTULO
const originalTitle=document.title;

document.addEventListener("visibilitychange",()=>{

    document.title=document.hidden
    ? "Return to SWEETPAIN"
    : originalTitle;

});
