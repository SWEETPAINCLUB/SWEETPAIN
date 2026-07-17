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
    else if(document.body.classList.contains("valentine-page")){

    message=

`Hola SweetPain.

Quiero realizar una pre-order de:

OFFICIAL SIGNATURE SERIES

VALENTÍNE

DO YOU WANNA TASTE IT?

Precio: $279 MXN

Talla:

Nombre:`;

}
   else if(document.body.classList.contains("essence-page")){

    const names={

        1:"ALL I NEED IS LOVE",
        2:"FEET DON'T FAIL ME NOW",
        3:"THE WINNER TAKES IT ALL",
        4:"I'M NOT BROKEN. I'M EMPTY."

    };

    const codes={

        1:"ESS-001",
        2:"ESS-002",
        3:"ESS-003",
        4:"ESS-004"

    };

    message=

`Hola SweetPain.

Quiero realizar una pre-order de:

ESSENCE LINE

${names[currentEssencePiece]}

Código: ${codes[currentEssencePiece]}

Precio: $279 MXN

Talla:

Nombre:`;

}
       else if(document.body.classList.contains("bushido-page")){

    const names={

        1:"SEIJAKU",
        2:"SHIREN",
        3:"KEISHO"

    };

    const codes={

        1:"BS-001",
        2:"BS-002",
        3:"BS-003"

    };

    message=

`Hola SweetPain.

Quiero realizar una pre-order de:

COLLECTION 002

BUSHIDO

${names[currentBushidoPiece]}

Código: ${codes[currentBushidoPiece]}

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
// =======================================
// ESSENCE COLLECTION
// =======================================

let currentEssencePiece = 1;

function loadEssencePiece(piece){

    if(!document.body.classList.contains("essence-page")) return;

    const pieces={

        1:{
            code:"ESS-001",
            title:"ALL I NEED IS LOVE",
            price:"$279 MXN",

            hero:"essencepresentacion.jpg",
            mockup:"essencemockup.png",
            front:"essencefrente.png",
            back:"essenceespalda.png",
            artwork:"essenceestampado.png",

            description:
`The first chapter of the ESSENCE collection.

Some words never lose their meaning.

ALL I NEED IS LOVE represents hope, vulnerability and everything that keeps us moving.`,

            story:
`ESSENCE begins with the simplest truth.

Sometimes all we really need is love.`

        },

        2:{
            code:"ESS-002",
            title:"FEET DON'T FAIL ME NOW",
            price:"$279 MXN",

            hero:"essence02mockup.png",
            mockup:"essence02mockup.png",
            front:"essence02frente.png",
            back:"essence02espalda.png",
            artwork:"essence02estampado.png",

            description:
`Keep moving.

Even when fear appears.

Even when nobody believes.

Feet don't fail me now.`,

            story:
`Fear exists.

Stopping is optional.`

        },

        3:{
            code:"ESS-003",
            title:"THE WINNER TAKES IT ALL",
            price:"$279 MXN",

            hero:"essence03mockup.png",
            mockup:"essence03mockup.png",
            front:"essence03frente.png",
            back:"essence03espalda.png",
            artwork:"essence03estampado.png",

            description:
`Winning has a price.

Every sacrifice leaves a mark.

The Winner Takes It All.`,

            story:
`Success belongs to those willing to pay its cost.`

        },

        4:{
            code:"ESS-004",
            title:"I'M NOT BROKEN. I'M EMPTY.",
            price:"$279 MXN",

            hero:"essence04mockup.png",
            mockup:"essence04mockup.png",
            front:"essence04frente.png",
            back:"essence04espalda.png",
            artwork:"essence04estampado.png",

            description:
`Not every wound is visible.

Some people aren't broken.

They're simply empty.`,

            story:
`Silence also tells stories.`

        }

    };

    const p = pieces[piece];

    currentEssencePiece = piece;

    // HERO
    document.getElementById("heroSubtitle").textContent = p.title;

    // PRODUCT
    document.getElementById("mainPresentation").src = p.hero;
    document.getElementById("collectionCode").textContent = p.code;
    document.getElementById("productTitle").textContent = p.title;
    document.getElementById("productDescription").textContent = p.description;

    // STORY
    document.getElementById("storyText").textContent = p.story;

    // GALLERY
    document.getElementById("galleryFront").src = p.front;
    document.getElementById("galleryBack").src = p.back;
    document.getElementById("galleryArtwork").src = p.artwork;
    document.getElementById("galleryMockup").src = p.mockup;

    // BUY
    document.getElementById("productPrice").textContent = p.price;
    document.getElementById("buyTitle").textContent = p.title;
    document.getElementById("seriesCode").textContent = p.code;
    document.getElementById("footerCode").textContent = p.code;

    // ACTIVE CARD
    document.querySelectorAll(".collectionCard").forEach(card=>{

        card.classList.remove("active");

    });

    document.getElementById("piece"+piece).classList.add("active");

}

// Cargar automáticamente la primera pieza
window.addEventListener("load",()=>{

    if(document.body.classList.contains("essence-page")){

        loadEssencePiece(1);

    }

});
// =======================================
// BUSHIDO COLLECTION
// =======================================

let currentBushidoPiece = 1;

function loadBushidoPiece(piece){

    if(!document.body.classList.contains("bushido-page")) return;

    const pieces={

        1:{
            code:"BS-001",
            title:"SEIJAKU",
            subtitle:"The Way of the Warrior",
            price:"$279 MXN",

            hero:"bushidopresentacion.png",

            mockup:"seijakumockup.png",
            front:"seijakufrente.png",
            back:"seijakuespalda.png",
            artwork:"seijakuestampado.png",

            description:
`The first step of every warrior is silence.

Before every battle there is stillness.

Before every victory there is discipline.

SEIJAKU represents the calm mind that exists before action.`,

            story:
`Silence is not weakness.

It is self-control.

The warrior who conquers his own mind has already won the hardest battle.`

        },

        2:{
            code:"BS-002",
            title:"SHIREN",
            subtitle:"Trial",
            price:"$279 MXN",

            hero:"bushidopresentacion.png",

            mockup:"shirenmockup.png",
            front:"shirenfrente.png",
            back:"shirenespalda.png",
            artwork:"shirenestampado.png",

            description:
`Every warrior is tested.

Pain reveals character.

SHIREN represents the trials that forge greatness.`,

            story:
`Without hardship there is no growth.

Every scar is proof that you kept moving forward.`

        },

        3:{
            code:"BS-003",
            title:"KEISHO",
            subtitle:"Legacy",
            price:"$279 MXN",

            hero:"bushidopresentacion.png",

            mockup:"keishomockup.png",
            front:"keishofrente.png",
            back:"keishoespalda.png",
            artwork:"keishoestampado.png",

            description:
`A warrior's greatest achievement is not victory.

It is leaving something worthy behind.

KEISHO represents legacy.`,

            story:
`Names disappear.

Legacies remain.

What you build today becomes tomorrow's history.`

        }

    };

    const p = pieces[piece];

    currentBushidoPiece = piece;

    document.getElementById("heroSubtitle").textContent = p.subtitle;

    document.getElementById("mainPresentation").src = p.hero;

    document.getElementById("collectionCode").textContent = p.code;

    document.getElementById("productTitle").textContent = p.title;

    document.getElementById("productDescription").textContent = p.description;

    document.getElementById("storyText").textContent = p.story;

    document.getElementById("galleryFront").src = p.front;

    document.getElementById("galleryBack").src = p.back;

    document.getElementById("galleryArtwork").src = p.artwork;

    document.getElementById("galleryMockup").src = p.mockup;

    document.getElementById("productPrice").textContent = p.price;

    document.getElementById("buyTitle").textContent = p.title;

    document.getElementById("seriesCode").textContent = p.code;

    document.getElementById("footerCode").textContent = p.code;

    document.querySelectorAll(".collectionCard").forEach(card=>{

        card.classList.remove("active");

    });

    document.getElementById("piece"+piece).classList.add("active");

}

window.addEventListener("load",()=>{

    if(document.body.classList.contains("bushido-page")){

        loadBushidoPiece(1);

    }

});
