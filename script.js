/*==========================
        MOBILE MENU
==========================*/

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.classList.toggle("active");

    if(menuBtn.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});


/*==========================
        CLOSE MENU
==========================*/

document.querySelectorAll("#nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menuBtn.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});


/*==========================
        HEADER SCROLL
==========================*/

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


/*==========================
        SCROLL ANIMATION
==========================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(".member,.service,.coverage-box,.section-title").forEach(el=>{

observer.observe(el);

});


/*==========================
        BACK TO TOP
==========================*/

const topBtn=document.createElement("a");

topBtn.href="#";

topBtn.id="topBtn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});


/*==========================
        SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});