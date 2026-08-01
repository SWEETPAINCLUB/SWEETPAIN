/*==================================================
    SWEETPAIN ENGINE V6
    Premium Streetwear Archive System
==================================================*/

"use strict";


const SweetPain = {


    currentPage:{
        name:"SWEETPAIN"
    },


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


    this.body=document.body;


    this.loaderElement=
    document.getElementById("loader");


    this.transition=
    document.getElementById("transition");


    this.lightboxElement=
    document.getElementById("lightbox");


    this.lightboxImage=
    document.getElementById("lightboxImage");


    this.closeLightbox=
    document.getElementById("closeLightbox");


},





/*==================================================
PAGE INFO
==================================================*/


pageInfo(){


const pages={


    "pantheon-page":{
        name:"THE PANTHEON"
    },


    "bushido-page":{
        name:"BUSHIDO"
    },


    "legends-page":{
        name:"LEGENDS"
    },


    "goldengirl-page":{
        name:"GOLDEN GIRL"
    },


    "alfa-page":{
        name:"ALFA"
    },


    "cosmico-page":{
        name:"CÓSMICO"
    },


    "prince-page":{
        name:"PRINCE MAGIC"
    },


    "valentine-page":{
        name:"VALENTÍNE"
    },


    "milkhouse-page":{
        name:"I'M NOT NERD I'M BULKING"
    },


    "essence-page":{
        name:"ESSENCE"
    }


};



for(const page in pages){


    if(
        this.body.classList.contains(page)
    ){

        this.currentPage=pages[page];

        break;

    }


}



},





/*==================================================
LOADER
==================================================*/


loader(){


const removeLoader=()=>{


    if(
        this.loaderElement
    ){

        this.loaderElement.classList.add(
            "hide"
        );

    }



    this.body.classList.add(
        "loaded"
    );


};



window.addEventListener(
"load",
()=>{


    setTimeout(
        removeLoader,
        600
    );


});



// seguridad

setTimeout(
removeLoader,
4000
);



},





/*==================================================
SMOOTH SCROLL
==================================================*/


smoothScroll(){


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
e=>{


const target=
document.querySelector(
link.getAttribute("href")
);



if(!target)
return;



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
!("IntersectionObserver" in window)
)
return;



const observer=
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
}
);



document
.querySelectorAll(
"section"
)
.forEach(section=>{


section.classList.add(
"hidden"
);


observer.observe(
section
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
)
return;



document
.querySelectorAll(
"img"
)
.forEach(img=>{


if(
img.closest("#lightbox")
)
return;



img.addEventListener(
"click",
()=>{


this.lightboxElement.classList.add(
"show"
);



this.lightboxImage.src=
img.src;



document.body.style.overflow=
"hidden";



});


});




const close=()=>{


this.lightboxElement.classList.remove(
"show"
);


document.body.style.overflow="";


};



if(
this.closeLightbox
){

this.closeLightbox.onclick=
close;

}



this.lightboxElement.onclick=
e=>{


if(
e.target===this.lightboxElement
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


if(
!this.transition
)
return;



document
.querySelectorAll(
"a"
)
.forEach(link=>{


const href=
link.getAttribute(
"href"
);



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


window.location.href=
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


const button=
document.getElementById(
"preorderButton"
);



if(!button)
return;



button.addEventListener(
"click",
e=>{


e.preventDefault();



const title=
document.getElementById(
"buyTitle"
)?.textContent.trim()
||
this.currentPage.name;



const code=
document.getElementById(
"seriesCode"
)?.textContent.trim()
||
document.getElementById(
"collectionCode"
)?.textContent.trim()
||
"";



const price=
document.getElementById(
"productPrice"
)?.textContent.trim()
||
"";




const message=

`Hola SweetPain.

Quiero realizar una pre-order de:

${title}

${code ? "Código: "+code : ""}

${price ? "Precio: "+price : ""}

Talla:

Nombre:`;




window.open(

"https://wa.me/525665897458?text="+
encodeURIComponent(message),

"_blank"

);



});


},





/*==================================================
PRELOAD
==================================================*/


preloadImages(){


document
.querySelectorAll(
"img"
)
.forEach(img=>{


const image=
new Image();


image.src=
img.src;



});


},





/*==================================================
ERROR HANDLER
==================================================*/


errorHandler(){


window.onerror=
function(
message
){


console.error(
"[SWEETPAIN ENGINE]",
message
);



};



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
