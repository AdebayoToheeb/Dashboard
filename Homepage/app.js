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

