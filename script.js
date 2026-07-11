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
// =======================================
// LIGHTBOX
// =======================================

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

if(galleryImages.length){

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImage.src=image.src;

});

});

}

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});

}
// =======================================
// THE PANTHEON | WHATSAPP PRE-ORDER
// =======================================

const preorderButton = document.getElementById("preorderButton");
const transition = document.getElementById("transition");

if (preorderButton) {

    preorderButton.addEventListener("click", function(e){

        e.preventDefault();

        if (transition) {
            transition.classList.add("show");
        }

        setTimeout(function(){

            const mensaje =
`Hola SweetPain.

Quiero unirme a la preventa de:

Collection 001 — THE PANTHEON

Producto:
Artifact I — Quetzal

Código:
Talla:
Nombre:`;

            window.location.href =
            "https://wa.me/525665897458?text=" +
            encodeURIComponent(mensaje);

        },1800);

    });

}
// =======================================
// PRINCE MAGIC | WHATSAPP
// =======================================

const preorderButton = document.getElementById("preorderButton");

if(preorderButton){

preorderButton.addEventListener("click",function(e){

e.preventDefault();

const transition=document.getElementById("transition");

if(transition){

transition.classList.add("show");

}

setTimeout(function(){

window.location.href=

"https://wa.me/525665897458?text=" +

"Hola%20SweetPain.%0A%0A"+

"Quiero%20unirme%20a%20la%20pre-order%20de:%0A%0A"+

"OFFICIAL%20SIGNATURE%20SERIES%0A"+

"PRINCE%20MAGIC%0A%0A"+

"Precio:%20$249%20MXN%0A"+

"Talla:%20%0A"+

"Nombre:%20";

},1800);

});

}

// =======================================
// LIGHTBOX
// =======================================

const galleryImages=document.querySelectorAll(".gallery-grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

if(galleryImages.length){

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImage.src=image.src;

});

});

}

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});

}
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

        if(this.getAttribute("href").startsWith("#")){

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}

// ANIMACIÓN DE SECCIONES
const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

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
document.querySelectorAll(".card,.signature,.experienceCard").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// CAMBIO DE TÍTULO
const originalTitle=document.title;

document.addEventListener("visibilitychange",()=>{

document.title=document.hidden

? "Return to SWEETPAIN"

: originalTitle;

});

// =======================================
// LIGHTBOX
// =======================================

const galleryImages=document.querySelectorAll(".gallery-grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImage.src=image.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});

}

// =======================================
// WHATSAPP PRE-ORDER
// =======================================

const preorderButton=document.getElementById("preorderButton");

if(preorderButton){

preorderButton.addEventListener("click",(e)=>{

e.preventDefault();

const message=encodeURIComponent(
`Hello SWEETPAIN!
I want to place a pre-order for:

Signature Series SS-001
Prince Magic

Size:
Name:

Thank you.`
);

window.open(
`https://wa.me/525665897458?text=${message}`,
"_blank"
);

});

}
