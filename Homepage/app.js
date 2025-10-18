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


// scroll function //
const picBar = document.querySelector('.bottom-sec');

// buttons //
const signUp = document.querySelector('.Signupbtn');
const logIn = document.querySelector('.loginbtn');
const ImgZoom = document.querySelector('.imgsec');
const ImgZoom1 = document.querySelector('.imgsec1');
const ImgZoom2 = document.querySelector('.imgsec2');
const ImgZoom3 = document.querySelector('.imgsec3');
const ImgZoom4 = document.querySelector('.imgsec4');
const ImgZoom5 = document.querySelector('.imgsec5');


// overlay toggle //
const overlay = document.querySelector('.Sign-up-overlay');
const overlay2 = document.querySelector('.Login-overlay');
const SignUpPg = document.querySelector('.signUp-page');
const logInpg = document.querySelector('.Login-page');




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


signUp.addEventListener('mouseover', function(){
    signUp.style.backgroundColor = 'black';
    signUp.style.cursor = 'pointer';
})
signUp.addEventListener('mouseout', function(){
    signUp.style.backgroundColor = 'brown';
})

signUp.addEventListener('click', function(){
    overlay.style.display = 'flex';
    SignUpPg.style.display = 'grid';
})

logIn.addEventListener('click', function(){
    overlay2.style.display = 'flex';
    logInpg.style.display = 'grid';
})


function zoom(e){
    e.style.transform = 'scale(1.1)';
}
function zoomOut(e){
    e.style.transform = 'scale(1)';
}

ImgZoom.addEventListener('mouseover', () => zoom(ImgZoom))
ImgZoom.addEventListener('mouseout', () => zoomOut(ImgZoom))

ImgZoom1.addEventListener('mouseover', () => zoom(ImgZoom1))
ImgZoom1.addEventListener('mouseout', () => zoomOut(ImgZoom1))

ImgZoom2.addEventListener('mouseover', () => zoom(ImgZoom2))
ImgZoom2.addEventListener('mouseout', () => zoomOut(ImgZoom2))

ImgZoom3.addEventListener('mouseover', () => zoom(ImgZoom3))
ImgZoom3.addEventListener('mouseout', () => zoomOut(ImgZoom3))

ImgZoom4.addEventListener('mouseover', () => zoom(ImgZoom4))
ImgZoom4.addEventListener('mouseout', () => zoomOut(ImgZoom4))

ImgZoom5.addEventListener('mouseover', () => zoom(ImgZoom5))
ImgZoom5.addEventListener('mouseout', () => zoomOut(ImgZoom5))


overlay.addEventListener('click', function(){
    SignUpPg.style.display = 'none';
    overlay.style.display = 'none';
})

overlay2.addEventListener('click', function(){
    logInpg.style.display = 'none';
    overlay2.style.display = 'none';
})