import { loadHome } from './loadHome.js'
import { loadMenu } from './loadMenu.js';
import { loadAbout } from './loadAbout.js'
import { loadContact } from './loadContact.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    const homeButton = document.querySelector('#home');
    homeButton.style.backgroundColor = 'orange';
    homeButton.addEventListener('click', () => {
        clearContent();
        applyButtonsBg('home');
        loadHome();
    });

    const menuButton = document.querySelector('#menu');
    menuButton.addEventListener('click', () => {
        clearContent();
        applyButtonsBg('menu');
        loadMenu();
    });

    const aboutButton = document.querySelector('#about');
    aboutButton.addEventListener('click', () => {
        clearContent();
        applyButtonsBg('about');
        loadAbout();
    });

    const contactButton = document.querySelector('#contact');
    contactButton.addEventListener('click', () => {
        clearContent();
        applyButtonsBg('contact');
        loadContact();
    });

    
});

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

function applyButtonsBg(buttonId) {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.style.backgroundColor = 'orange';
        } else {
            button.style.backgroundColor = 'rgb(180, 117, 0)';
        }
    });
}