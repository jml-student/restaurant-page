import { loadHome } from './loadHome.js'
import { loadMenu } from './loadMenu.js';
import { loadAbout } from './loadAbout.js'
import { loadContact } from './loadContact.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    const homeButton = document.querySelector('#home');
    homeButton.addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    const menuButton = document.querySelector('#menu');
    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    const aboutButton = document.querySelector('#about');
    aboutButton.addEventListener('click', () => {
        clearContent();
        loadAbout();
    });

    const contactButton = document.querySelector('#contact');
    contactButton.addEventListener('click', () => {
        clearContent();
        loadContact();
    });

    
});

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}