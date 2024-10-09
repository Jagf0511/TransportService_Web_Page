const header = document.querySelector('.head');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');
const logo2 = document.querySelector('.logo-2');
const list1 = document.querySelector('.nav-list');
const list2 = document.querySelector('.navlist-2');
const abrir = document.querySelector('.abrir');
const cerrar = document.querySelector('.cerrar');
const list = document.querySelector('.nav-list');
const list_icons = document.querySelector('.social-movil');
const nav_carr = document.querySelector('.carousel');
const parallax = document.querySelector('.paral');
var rellax = new Rellax('.rellax');
const hamburguesa = document.querySelector('.hamburger');
window.addEventListener('click', function(){
    hamburguesa.classList.toggle('is-active');
    nav.classList.toggle('visible');
    list.classList.toggle('opacity');
    list_icons.classList.toggle('visible')
});
window.addEventListener('scroll', function(){
    nav_carr.classList.toggle('active', window.scrollY>0);
});
window.addEventListener('scroll', function(){
    header.classList.toggle('active', window.scrollY>0);
});
window.addEventListener('scroll', function(){
    logo.classList.toggle('active', window.scrollY>0);

});
window.addEventListener('scroll', function(){
    logo2.classList.toggle('active', window.scrollY>0);

});
window.addEventListener('scroll', function(){
    list1.classList.toggle('active', window.scrollY>0);

});
window.addEventListener('scroll', function(){
    list2.classList.toggle('active', window.scrollY>0);

});
window.addEventListener('scroll', function(){
    list_icons.classList.toggle('active', window.scrollY>0);

});
window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY>0);
});
window.addEventListener('scroll', function(){
    hamburguesa.classList.toggle('active', window.scrollY>0);
});
window.addEventListener('scroll', function(){
    abrir.classList.toggle('active', window.scrollY>0);
});
window.addEventListener('scroll', function(){
    cerrar.classList.toggle('active', window.scrollY>0);
});
abrir.addEventListener("click", () =>
{
    nav.classList.add("visible");
    abrir.classList.add("visible");
    cerrar.classList.add("mostrar");
    list.classList.add("opacity");
    list_icons.classList.add("visible");
})
cerrar.addEventListener("click",()=>
{
    
    nav.classList.remove("visible");
    abrir.classList.remove("visible");
    cerrar.classList.remove("mostrar");
    list.classList.remove("opacity");
    list_icons.classList.remove("visible");
})
window.addEventListener('scroll', function(){
    let scroll = this.window.scrollY;
});

