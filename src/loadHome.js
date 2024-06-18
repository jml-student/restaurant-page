export function loadHome() {
    const content = document.querySelector('#content');

    const title = document.createElement('h1');
    title.textContent = 'Restaurant Name';

    const image = document.createElement('img');
    image.setAttribute('src', './restaurant-img');

    const text = document.createElement('p');
    text.textContent = 'This restaurant is awesome';

    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(text);
}