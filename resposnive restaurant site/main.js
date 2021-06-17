let themeSwitch = document.querySelector('.fa');
let body = document.querySelector('body');
themeSwitch.onclick = function(){
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
}

let menutoggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

let uparrow = document.querySelector('.fa-chevron-circle-up');
uparrow.onclick = function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}