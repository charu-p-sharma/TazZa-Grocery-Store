//Heaader Scrolling
let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

//Navbar Hide

let navBar=document.querySelector(".nav-link");
let navCollapse=document.querySelector(".nav-collapse.collapse");