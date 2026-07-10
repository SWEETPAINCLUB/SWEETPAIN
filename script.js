// SWEETPAIN | SCRIPT V1

// Scroll suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        if(destino){
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animación al aparecer las secciones
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="all .8s ease";

    observer.observe(section);

});

// Cambiar el título según la pestaña
document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.title="Come back to SWEETPAIN";

    }else{

        document.title="SWEETPAIN";

    }

});

// Botón Comprar
const buyButton=document.querySelector(".button");

if(buyButton){

    buyButton.addEventListener("click",(e)=>{

        e.preventDefault();

        alert("Pre-order disponible próximamente.");

    });

}

console.log("SWEETPAIN Loaded");
