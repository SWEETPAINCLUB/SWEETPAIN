/*==================================================

    SWEETPAIN ENGINE V6
    FINAL VERSION

    Pain Creates Legends

==================================================*/


"use strict";


const SweetPain = {


/*==================================================
INIT
==================================================*/


init(){


    this.cache();


    this.pageInfo();


    this.loader();


    this.smoothScroll();


    this.revealSections();


    this.lightbox();


    this.pageTransitions();


    this.whatsapp();


    this.preloadImages();


    this.errorHandler();



},





/*==================================================
CACHE
==================================================*/


cache(){


    this.body = document.body;


    this.loaderElement =
    document.getElementById("loader");


    this.transition =
    document.getElementById("transition");


    this.lightboxElement =
    document.getElementById("lightbox");


    this.lightboxImage =
    document.getElementById("lightboxImage");


    this.closeLightbox =
    document.getElementById("closeLightbox");


},





/*==================================================
PAGE INFO
==================================================*/


pageInfo(){


const pages={


    "pantheon-page":

    "THE PANTHEON",



    "bushido-page":

    "BUSHIDO",



    "legends-page":

    "LEGENDS",



    "essence-page":

    "ESSENCE",



    "goldengirl-page":

    "SIGNATURE SERIES GOLDEN GIRL",



    "alfa-page":

    "SIGNATURE SERIES ALFA",



    "cosmico-page":

    "SIGNATURE SERIES CÓSMICO",



    "prince-page":

    "SIGNATURE SERIES PRINCE MAGIC",



    "valentine-page":

    "SIGNATURE SERIES VALENTÍNE",



    "milkhouse-page":

    "SIGNATURE SERIES MILKHOUSE"



};



this.currentPage = {


name:"SWEETPAIN"


};



for(const page in pages){


    if(
        this.body.classList.contains(page)
    ){


        this.currentPage.name =
        pages[page];


        break;


    }


}


},





/*==================================================
LOADER
==================================================*/


loader(){


const finish=()=>{


    if(this.loaderElement){


        this.loaderElement.classList.add("hide");


    }


    this.body.classList.add("loaded");


};



window.addEventListener(
"load",
()=>{


    setTimeout(
        finish,
        500
    );


});


setTimeout(
finish,
3500
);



},





/*==================================================
SMOOTH SCROLL
==================================================*/


smoothScroll(){


document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{


link.addEventListener(
"click",
e=>{


const target =
document.querySelector(
link.getAttribute("href")
);



if(!target)return;



e.preventDefault();



target.scrollIntoView({

behavior:"smooth"

});



});


});


},





/*==================================================
REVEAL
==================================================*/


revealSections(){


if(
!"IntersectionObserver" in window
)return;



const observer =
new IntersectionObserver(
entries=>{


entries.forEach(
entry=>{


if(
entry.isIntersecting
){


entry.target.classList.add(
"show"
);



}


});


},
{


threshold:.15


});



document
.querySelectorAll(
"section, .card, .signature, .experienceCard"
)
.forEach(element=>{


element.classList.add(
"hidden"
);



observer.observe(
element
);



});


},
    /*==================================================
LIGHTBOX
==================================================*/


lightbox(){


if(
!this.lightboxElement ||
!this.lightboxImage
)return;



const images =
document.querySelectorAll(
"img"
);



images.forEach(img=>{


if(
img.closest("#lightbox") ||
img.dataset.noLightbox
)return;



img.style.cursor="zoom-in";



img.onclick=()=>{


this.lightboxElement.classList.add(
"show"
);



this.lightboxImage.src =
img.currentSrc || img.src;



this.lightboxImage.alt =
img.alt || "";



document.body.style.overflow="hidden";



};



});



const close=()=>{


this.lightboxElement.classList.remove(
"show"
);



document.body.style.overflow="";



};



if(this.closeLightbox){


this.closeLightbox.onclick =
close;


}



this.lightboxElement.onclick=e=>{


if(
e.target === this.lightboxElement
){


close();


}


};



document.addEventListener(
"keydown",
e=>{


if(
e.key==="Escape"
){


close();


}


});


},





/*==================================================
PAGE TRANSITIONS
==================================================*/


pageTransitions(){


if(!this.transition)
return;



window.addEventListener(
"load",
()=>{


setTimeout(()=>{


this.transition.classList.add(
"hide"
);



},400);



});



document
.querySelectorAll("a")
.forEach(link=>{


const href =
link.getAttribute("href");



if(
!href ||
href.startsWith("#") ||
href.startsWith("http") ||
href.startsWith("mailto") ||
href.startsWith("tel")
)
return;



link.addEventListener(
"click",
e=>{


e.preventDefault();



this.transition.classList.remove(
"hide"
);



setTimeout(
()=>{


window.location.href =
href;



},
450
);



});


});


},





/*==================================================
WHATSAPP PREORDER
==================================================*/


whatsapp(){


const button =
document.getElementById(
"preorderButton"
);



if(!button)
return;



button.addEventListener(
"click",
e=>{


e.preventDefault();



const title =

document.getElementById(
"buyTitle"
)?.textContent.trim()

||

this.currentPage.name;



const code =

document.getElementById(
"seriesCode"
)?.textContent.trim()

||

document.getElementById(
"collectionCode"
)?.textContent.trim()

||

"";



const price =

document.getElementById(
"productPrice"
)?.textContent.trim()

||

"";





const message =

`Hola SweetPain.

Quiero realizar una pre-order de:

${title}

${code ? "Código: "+code : ""}

${price ? "Precio: "+price : ""}

Talla:

Nombre:`;





window.open(

"https://wa.me/525665897458?text="
+
encodeURIComponent(message),

"_blank"

);



});


},





/*==================================================
PRELOAD IMAGES
==================================================*/


preloadImages(){


document
.querySelectorAll("img")
.forEach(img=>{


const preload =
new Image();



preload.src =
img.src;



});


},





/*==================================================
ERROR HANDLER
==================================================*/


errorHandler(){


window.addEventListener(
"error",
e=>{


console.error(

"[SWEETPAIN ENGINE]",

e.message

);



});


}



};





/*==================================================
START ENGINE
==================================================*/


document.addEventListener(
"DOMContentLoaded",
()=>{


SweetPain.init();



});
