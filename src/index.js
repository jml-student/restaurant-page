import { loadHome } from './loadHome.js'
import { loadMenu } from './loadMenu.js';
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    const menuButton = document.querySelector('#menu');
    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });
});

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}