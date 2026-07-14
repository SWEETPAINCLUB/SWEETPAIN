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

    if(currentPrincePiece===1){

        message=
`Hola SweetPain.

Quiero realizar una pre-order de:

OFFICIAL SIGNATURE SERIES

PRINCE MAGIC

Signature I
THE SHOW BEGINS

Precio: $279 MXN

Talla:

Nombre:`;

    }else{

        message=
`Hola SweetPain.

Quiero realizar una pre-order de:

OFFICIAL SIGNATURE SERIES

PRINCE MAGIC

Signature II
SECOND CHAPTER

Precio: $279 MXN

Talla:

Nombre:`;

    }

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
else if(document.body.classList.contains("milkhouse-page")){

    message=

`Hola SweetPain.

Quiero realizar una pre-order de:

OFFICIAL SIGNATURE SERIES

I'M NOT NERD;
I'M BULKING

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
 // =======================================
// PRINCE COLLECTION
// =======================================


function loadPrincePiece(piece){

    if(!document.body.classList.contains("prince-page")) return;
    const pieces={

        1:{
            code:"SS-001-01",
            title:"THE SHOW BEGINS",
            price:"$279 MXN",

            hero:"princepresentacion.jpg",
            mockup:"princemockup.jpg",
            front:"princefrente.jpg",
            back:"princeespalda.jpg",
            artwork:"princedetalleestampado.jpg"
        },

        2:{
            code:"SS-001-02",
            title:"SECOND CHAPTER",
            price:"$279 MXN",

            hero:"prince2presentacion.jpg",
            mockup:"prince2mockup.png",
            front:"prince2frente.png",
            back:"prince2espalda.png",
            artwork:"prince2estampado.jpg"
        }

    };

    const p=pieces[piece];
currentPrincePiece = piece;
    document.getElementById("mainPresentation").src=p.hero;

    document.getElementById("galleryMockup").src=p.mockup;
    document.getElementById("galleryFront").src=p.front;
    document.getElementById("galleryBack").src=p.back;
    document.getElementById("galleryArtwork").src=p.artwork;

    document.getElementById("collectionCode").textContent=p.code;
    document.getElementById("seriesCode").textContent=p.code;

    document.getElementById("productPrice").textContent=p.price;

    document.getElementById("heroSubtitle").textContent=p.title;
document.querySelectorAll(".collectionCard").forEach(card=>{

    card.classList.remove("active");

});

document.getElementById("piece"+piece).classList.add("active");
}       
