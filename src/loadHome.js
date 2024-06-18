import restaurantImg from './img/restaurant-img.png'

export function loadHome() {
    const content = document.querySelector('#content');

    const homeContainer = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Restaurant Name';

    const image = document.createElement('img');
    image.setAttribute('src', restaurantImg);

    const text = document.createElement('p');
    text.textContent = 'This restaurant is awesome';

    homeContainer.appendChild(title);
    homeContainer.appendChild(image);
    homeContainer.appendChild(text);

    content.appendChild(homeContainer);
}