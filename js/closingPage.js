const nav = document.querySelector("#nav");
const open = document.querySelector("#openMenu");
const close = document.querySelector("#closeMenu");

open.addEventListener( "click", ()=>{
    nav.classList.add("visible");
})

close.addEventListener( "click", ()=>{
    nav.classList.remove("visible");
})