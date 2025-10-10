'use strict'

//navigation//
const home = document.querySelector('#Home');
const comapny = document.querySelector('#Company');
const resources = document.querySelector('#Resources');
const legal = document.querySelector('#Legal');


// menus //
const companuMenu = document.querySelector('.comapny-menu');
const resourceMenu = document.querySelector('.Resources-menu');
const legalMenu = document.querySelector('.Legal-menu');


// menus hover //
comapny.addEventListener('mouseover', function(){
    companuMenu.classList.toggle('menu-display');
})
comapny.addEventListener('mouseout', function(){
    companuMenu.classList.toggle('menu-display');
})

resources.addEventListener('mouseover', function(){
    resourceMenu.classList.toggle('menu-display');
})
resources.addEventListener('mouseout', function(){
    resourceMenu.classList.toggle('menu-display');
})

legal.addEventListener('mouseover', function(){
    legalMenu.classList.toggle('menu-display');
})
legal.addEventListener('mouseout', function(){
    legalMenu.classList.toggle('menu-display');
})

//menu stay //




//cards shadow effect //
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const card4 = document.querySelector('#card4');
const card5 = document.querySelector('#card5');
const card6 = document.querySelector('#card6');


card1.addEventListener('mouseover', function(){
    card1.classList.toggle('cards-shadow');
})
card1.addEventListener('mouseout', function(){
    card1.classList.toggle('cards-shadow');
})


card2.addEventListener('mouseover', function(){
    card2.classList.toggle('cards-shadow');
})
card2.addEventListener('mouseout', function(){
    card2.classList.toggle('cards-shadow');
})

card3.addEventListener('mouseover', function(){
    card3.classList.toggle('cards-shadow');
})
card3.addEventListener('mouseout', function(){
    card3.classList.toggle('cards-shadow');
})

card4.addEventListener('mouseover', function(){
    card4.classList.toggle('cards-shadow');
})
card4.addEventListener('mouseout', function(){
    card4.classList.toggle('cards-shadow');
})

card5.addEventListener('mouseover', function(){
    card5.classList.toggle('cards-shadow');
})
card5.addEventListener('mouseout', function(){
    card5.classList.toggle('cards-shadow');
})

card6.addEventListener('mouseover', function(){
    card6.classList.toggle('cards-shadow');
})
card6.addEventListener('mouseout', function(){
    card6.classList.toggle('cards-shadow');
})
