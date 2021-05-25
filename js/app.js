//Fixed Navigation jQuery
jQuery(document).ready(function ($){
    $(window).scroll(function (){
        if($(window).scrollTop() > 20){
            console.log('scrolling');
            $('nav').addClass('fixed');
        } else{
            $('nav').removeClass('fixed');
        }
    });
});

const images = [
    {
        id: 1,
        img: 'img/slika1.jpg'
    },
    {
        id: 2,
        img: 'img/slika2.jpg'
    },
    {
        id: 3,
        img: 'img/slika3.jpg'
    },
    {
        id: 4,
        img: 'img/slika4.jpg'
    },
    {
        id: 5,
        img: 'img/slika5.jpg'
    }
]

const img = document.getElementById('images-img');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

//Load initial item
window.addEventListener('DOMContentLoaded', function (){
    showItem();
});

//Show image based on item
function showItem(){
    const item = images[currentItem];
    img.src = item.img;
}

function nextItem(){
    currentItem++;
    if(currentItem > images.length - 1)
        currentItem = 0;
}

//Show next item
nextBtn.addEventListener('click', function (){
    nextItem();
    showItem();
});

//Show previous item
prevBtn.addEventListener('click',function (){
    currentItem--;
    if(currentItem < 0)
        currentItem = images.length - 1;
    showItem();
});

//Hamburger Menu
const mainMenu = document.querySelector('.main-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';

    $('.main-menu a').on('click', function (){
        $('.main-menu').hide();
    });
}

function close(){
    mainMenu.style.top = '-110%';
}

//Contact Button
function contactBtn(e){
    window.location.href = "#contact";
    e.preventDefault();
    e.stopPropagation();
}

//Loading Animation
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function (){
   // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
})

//Modal Window

