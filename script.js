// =======================================
// SWEETPAIN | SCRIPT V4
// =======================================

// LOADER
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.classList.add("hide");

    }

    document.body.classList.add("loaded");

});

// =======================================
// SCROLL SUAVE
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =======================================
// ANIMACIÓN DE SECCIONES
// =======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// =======================================
// EFECTO TARJETAS
// =======================================

document.querySelectorAll(".card,.signature,.experienceCard,.detailCard").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// =======================================
// CAMBIO DE TÍTULO
// =======================================

const originalTitle=document.title;

document.addEventListener("visibilitychange",()=>{

    document.title=document.hidden

    ? "Return to SWEETPAIN"

    : originalTitle;

});

// =======================================
// LIGHTBOX
// =======================================

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-grid img").forEach(image=>{

    image.addEventListener("click",()=>{

        if(!lightbox)return;

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
// PRE-ORDER WHATSAPP
// =======================================

const preorderButton=document.getElementById("preorderButton");

if(preorderButton){

    preorderButton.addEventListener("click",(e)=>{

        e.preventDefault();

        const transition=document.getElementById("transition");

        if(transition){

            transition.classList.add("show");

        }

        let message="";

        if(document.body.classList.contains("prince-page")){

            message=
`Hola SweetPain.

Quiero realizar una pre-order de:

OFFICIAL SIGNATURE SERIES

PRINCE MAGIC

Precio: $249 MXN

Talla:

Nombre:`;

        }
else if(document.body.classList.contains("alfa-page")){

    message=

`Hola SweetPain.

Quiero realizar una pre-order de:

OFFICIAL SIGNATURE SERIES

ALFA JR

Precio: $279 MXN

Talla:

Nombre:`;

}
    else if(document.body.classList.contains("cosmico-page")){

    message=

`Hola SweetPain.

Quiero realizar una pre-order de:

OFFICIAL SIGNATURE SERIES

CÓSMICO

Precio: $279 MXN

Talla:

Nombre:`;

    } 
        else if(document.body.classList.contains("pantheon-page")){

            message=
`Hola SweetPain.

Quiero realizar una pre-order de:

COLLECTION 001

THE PANTHEON

Artifact I — QUETZAL

Precio: $219 MXN

Talla:

Nombre:`;

        }

        setTimeout(()=>{

            window.location.href=

            "https://wa.me/525665897458?text="+

            encodeURIComponent(message);

        },1500);

    });

}
        
