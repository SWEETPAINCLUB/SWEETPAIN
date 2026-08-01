/*==================================================
    SWEETPAIN ENGINE V5
    Developed for SweetPain
==================================================*/

"use strict";

const SweetPain = {

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

    this.observeDOM();

    this.errorHandler();

},

    //------------------------------------------------
    // CACHE
    //------------------------------------------------

    cache(){
        //------------------------------------------------
// PAGE INFO
//------------------------------------------------

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

        "essence-page":{

            name:"ESSENCE"

        },

        "alfa-page":{

            name:"SIGNATURE SERIES ALFA"

        },

        "goldengirl-page":{

            name:"SIGNATURE SERIES GOLDEN GIRL"

        }

    };

    for(const page in pages){

        if(this.body.classList.contains(page)){

            this.currentPage=pages[page];

            return;

        }

    }

    this.currentPage={

        name:"SWEETPAIN"

    };

},

        this.body = document.body;

        this.loaderElement = document.getElementById("loader");

        this.transition = document.getElementById("transition");

        this.lightbox = document.getElementById("lightbox");

        this.lightboxImage = document.getElementById("lightboxImage");

        this.closeLightbox = document.getElementById("closeLightbox");

    },

//------------------------------------------------
// LOADER
//------------------------------------------------

loader(){

    const finishLoading=()=>{

        if(this.loaderElement){

            this.loaderElement.classList.add("hide");

        }

        if(this.body){

            this.body.classList.add("loaded");

        }

    };

    window.addEventListener("load",()=>{

        setTimeout(finishLoading,500);

    });

    setTimeout(finishLoading,3000);

},

    //------------------------------------------------
    // SMOOTH SCROLL
    //------------------------------------------------

    smoothScroll(){

        document.querySelectorAll('a[href^="#"]').forEach(link=>{

            link.addEventListener("click",(e)=>{

                const target=document.querySelector(link.getAttribute("href"));

                if(!target) return;

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            });

        });

    },

    //------------------------------------------------
    // REVEAL
    //------------------------------------------------

    revealSections(){

        if(!("IntersectionObserver" in window)) return;

        const observer=new IntersectionObserver((entries)=>{

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

    },

//------------------------------------------------
// LIGHTBOX V2
//------------------------------------------------

lightbox(){

    if(!this.lightbox || !this.lightboxImage) return;

    const images=document.querySelectorAll("img");

    if(images.length===0) return;

    images.forEach(img=>{

        if(
            img.closest("#lightbox") ||
            img.hasAttribute("data-no-lightbox")
        ){
            return;
        }

        img.style.cursor="zoom-in";

        img.addEventListener("click",()=>{

            this.lightbox.style.display="flex";

            this.lightboxImage.src=img.currentSrc || img.src;

            this.lightboxImage.alt=img.alt || "";

            document.body.style.overflow="hidden";

        });

    });

    const close=()=>{

        this.lightbox.style.display="none";

        document.body.style.overflow="";

    };

    if(this.closeLightbox){

        this.closeLightbox.onclick=close;

    }

    this.lightbox.addEventListener("click",(e)=>{

        if(e.target===this.lightbox){

            close();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            close();

        }

    });

},

    //------------------------------------------------
// PAGE TRANSITIONS
//------------------------------------------------

pageTransitions(){

    if(!this.transition) return;

    window.addEventListener("load",()=>{

        requestAnimationFrame(()=>{

            this.transition.classList.add("hide");

        });

    });

    document.querySelectorAll("a").forEach(link=>{

        const href=link.getAttribute("href");

        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("https") ||
            href.startsWith("mailto") ||
            href.startsWith("tel")
        ){
            return;
        }

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            this.transition.classList.remove("hide");

            setTimeout(()=>{

                window.location.href=href;

            },400);

        });

    });

},

    //------------------------------------------------
// WHATSAPP
//------------------------------------------------

whatsapp(){

    const button=document.getElementById("preorderButton");

    if(!button) return;

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        const title=document.getElementById("buyTitle")?.textContent.trim() ||

                    this.currentPage.name;

        const code=document.getElementById("seriesCode")?.textContent.trim() ||

                   document.getElementById("collectionCode")?.textContent.trim() ||

                   "";

        const price=document.getElementById("productPrice")?.textContent.trim() ||

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

            "https://wa.me/5665897458?text="+
            encodeURIComponent(message),

            "_blank"

        );

    });

},v

document.addEventListener("DOMContentLoaded",()=>{

    SweetPain.init();

});
//------------------------------------------------
// PRELOAD IMAGES
//------------------------------------------------

preloadImages(){

    const images=document.querySelectorAll("img");

    images.forEach(img=>{

        if(!img.src) return;

        const preload=new Image();

        preload.src=img.src;

    });

},

//------------------------------------------------
// OBSERVE DOM
//------------------------------------------------

observeDOM(){

    if(!("MutationObserver" in window)) return;

    const observer=new MutationObserver(()=>{

        this.lightbox();

    });

    observer.observe(document.body,{

        childList:true,

        subtree:true

    });

},

//------------------------------------------------
// ERROR HANDLER
//------------------------------------------------

errorHandler(){

    window.addEventListener("error",(e)=>{

        console.error(

            "[SweetPain Engine]",

            e.message

        );

    });

}
