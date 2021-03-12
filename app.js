const nav = document.querySelector(".nav-bar")
const lo = document.querySelector(".lo");



nav.addEventListener("click", function(){
    lo.classList.toggle("open");
});