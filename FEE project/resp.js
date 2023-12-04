var icon = document.getElementById("mode");
var button = document.getElementById("search");


icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "sun-solid-24.png";

    }
    else {
        icon.src = "moon-solid-24.png";
    }

}
let burger = document.querySelector('.three-li');
let navbar = document.querySelector('.navbar');
let rightNav = document.querySelector('.right-nav');
let navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-visibility'); 
    navList.classList.toggle('v-visibility'); 
    navbar.classList.toggle('h-hight');
});

