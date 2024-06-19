export function loadAbout() {
    const content = document.querySelector('#content');

    const aboutContainer = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'About Us';

    const text = document.createElement('p');
    text.textContent = 'This restaurant is awesome';

    aboutContainer.appendChild(title);
    aboutContainer.appendChild(text);

    content.appendChild(aboutContainer);
}