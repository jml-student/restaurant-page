import restaurantImg from './img/restaurant-img.png'

export function loadHome() {
    const content = document.querySelector('#content');

    const homeButton = document.querySelector('#home');

    const homeContainer = document.createElement('div');

    const image = document.createElement('img');
    image.setAttribute('src', restaurantImg);

    const text = document.createElement('p');
    text.textContent = 'This restaurant is awesome';

    homeContainer.appendChild(image);
    homeContainer.appendChild(text);

    content.appendChild(homeContainer);
}