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

    const names={

        1:"QUETZAL",
        2:"HUITZILOPOCHTLI"

    };

    const codes={

        1:"PT-001",
        2:"PT-002"

    };

    message=

`Hola SweetPain.

Quiero realizar una pre-order de:

COLLECTION 001

THE PANTHEON

${names[currentPantheonPiece]}

Código: ${codes[currentPantheonPiece]}

Precio: $319 MXN

Talla:

Nombre:`;

}    
    else if(document.body.classList.contains("legends-page")){

    const names={

        1:"THE HEADLESS HORSEMAN",
        2:"THE KRAKEN",
        3:"LA LLORONA",
        4:"THE BASILISK",
        5:"THE LOCH NESS MONSTER",
        6:"BIGFOOT"

    };

    const codes={

        1:"LEG-001",
        2:"LEG-002",
        3:"LEG-003",
        4:"LEG-004",
        5:"LEG-005",
        6:"LEG-006"

    };

    message=

`Hola SweetPain.

Quiero realizar una pre-order de:

COLLECTION 003

LEGENDS

${names[currentLegendsPiece]}

Código: ${codes[currentLegendsPiece]}

Precio: $319 MXN

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
// =======================================
// THE PANTHEON COLLECTION
// =======================================

let currentPantheonPiece = 1;

function loadPantheonPiece(piece){

    if(!document.body.classList.contains("pantheon-page")) return;

    const pieces={

        1:{
            code:"PT-001",
            title:"QUETZAL",
            subtitle:"The Feathered Serpent",
            price:"$319 MXN",

            hero:"quetzalpresentacion.png",

            mockup:"quetzalmockup.png",
            front:"quetzalfrente.png",
            back:"quetzalespalda.png",
            artwork:"quetzalestampado.png",

            description:
`The Feathered Serpent.

A symbol of wisdom, creation and balance.

QUETZAL represents the beginning of the Pantheon and the eternal connection between heaven and earth.`,

            story:
`Quetzal is more than a god.

He is knowledge.

He is creation.

He is the force that gave life to civilizations.

Every Artifact preserves part of that legacy.`

        },

        2:{
            code:"PT-002",
            title:"HUITZILOPOCHTLI",
            subtitle:"God of Sun & War",
            price:"$319 MXN",

            hero:"huitzilpresentacion.png",

            mockup:"huitzilmockup.png",
            front:"huitzilfrente.png",
            back:"huitzilespalda.png",
            artwork:"huitzilestampado.png",

            description:
`The supreme god of war and the rising sun.

HUITZILOPOCHTLI represents courage, sacrifice and absolute determination.

Only those willing to fight deserve glory.`,

            story:
`The sun rises because warriors never surrender.

Every battle leaves a mark.

Every victory demands sacrifice.

Power belongs to those who refuse to kneel.`

        }

    };

    const p = pieces[piece];

    currentPantheonPiece = piece;

    // HERO
    document.querySelector(".pantheon-page .signatureHero").style.background =
    `linear-gradient(rgba(0,0,0,.72),rgba(0,0,0,.86)),
    url('${p.hero}') center/cover`;

    document.getElementById("heroSubtitle").textContent = p.subtitle;

    // PRODUCT
    document.getElementById("mainPresentation").src = p.hero;

    document.getElementById("collectionCode").textContent = p.code;

    document.getElementById("productTitle").textContent = p.title;

    document.getElementById("productDescription").textContent = p.description;

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

window.addEventListener("load",()=>{

    if(document.body.classList.contains("pantheon-page")){

        loadPantheonPiece(1);

    }

});
// =======================================
// LEGENDS COLLECTION
// =======================================

let currentLegendsPiece = 1;

function loadLegendsPiece(piece){

    if(!document.body.classList.contains("legends-page")) return;

    const pieces={

        1:{
            code:"LEG-001",
            title:"THE HEADLESS HORSEMAN",
            subtitle:"Death never rides alone.",
            price:"$319 MXN",

            hero:"legendspresentacion.png",

            mockup:"legend01mockup.png",
            front:"legend01frente.png",
            back:"legend01espalda.png",
            artwork:"legend01estampado.png",

            description:
`Some riders never reached their destination.

Others never stopped riding.

The Headless Horseman is the embodiment of inevitable death, roaming through darkness in search of those whose time has come.`,

            story:
`Witnesses never describe the rider.

They only remember the sound.

Hooves breaking the silence.

A shadow crossing the fog.

Then...

one body less.`

        },

        2:{
            code:"LEG-002",
            title:"THE KRAKEN",
            subtitle:"Fear lives beneath.",
            price:"$319 MXN",

            hero:"legendspresentacion.png",

            mockup:"legend02mockup.png",
            front:"legend02frente.png",
            back:"legend02espalda.png",
            artwork:"legend02estampado.png",

            description:
`The ocean has always hidden things humanity was never meant to see.

The Kraken is the ruler of the abyss.`,

            story:
`Sailors never feared the storm.

They feared what moved beneath it.

The sea always remembers.`

        },

        3:{
            code:"LEG-003",
            title:"LA LLORONA",
            subtitle:"Her cry never stopped.",
            price:"$319 MXN",

            hero:"legendspresentacion.png",

            mockup:"legend03mockup.png",
            front:"legend03frente.png",
            back:"legend03espalda.png",
            artwork:"legend03estampado.png",

            description:
`Her voice has crossed generations.

No one knows where she came from.

Everyone knows her cry.`,

            story:
`If you hear her far away...

she is close.

If you hear her close...

it's already too late.`

        },

        4:{
            code:"LEG-004",
            title:"THE BASILISK",
            subtitle:"Do not meet its eyes.",
            price:"$319 MXN",

            hero:"legendspresentacion.png",

            mockup:"legend04mockup.png",
            front:"legend04frente.png",
            back:"legend04espalda.png",
            artwork:"legend04estampado.png",

            description:
`Some monsters hunt.

Others simply wait.

One look is enough.`,

            story:
`Every victim saw the same thing.

Its eyes.

Then...

nothing.`

        },

        5:{
            code:"LEG-005",
            title:"THE LOCH NESS MONSTER",
            subtitle:"The lake still remembers.",
            price:"$319 MXN",

            hero:"legendspresentacion.png",

            mockup:"legend05mockup.png",
            front:"legend05frente.png",
            back:"legend05espalda.png",
            artwork:"legend05estampado.png",

            description:
`The water has kept its secret for centuries.

Perhaps the legend never wanted to be found.`,

            story:
`Silence.

Mist.

A ripple across the lake.

Then...

something enormous disappears beneath the surface.`

        },

        6:{
            code:"LEG-006",
            title:"BIGFOOT",
            subtitle:"The forest was never ours.",
            price:"$319 MXN",

            hero:"legendspresentacion.png",

            mockup:"legend06mockup.png",
            front:"legend06frente.png",
            back:"legend06espalda.png",
            artwork:"legend06estampado.png",

            description:
`Long before mankind walked the forests...

something else already lived there.`,

            story:
`The footprints are real.

The witnesses disagree.

The forest...

never speaks.`

        }

    };

    const p = pieces[piece];

    currentLegendsPiece = piece;

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

    if(document.body.classList.contains("legends-page")){

        loadLegendsPiece(1);

    }

});
