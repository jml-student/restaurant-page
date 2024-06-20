export function loadAbout() {
    const content = document.querySelector('#content');

    const aboutContainer = document.createElement('div');

    const title = document.createElement('div');
    title.classList = 'about-title';
    title.textContent = 'Our Story';

    const text = document.createElement('p');
    text.classList = 'about-text';
    text.textContent = `Burger Haven was founded on a simple yet powerful idea: to create the ultimate burger experience. From our humble beginnings, we've grown into a beloved spot for burger enthusiasts who crave quality, flavor, and a warm, welcoming atmosphere.`;

    aboutContainer.appendChild(title);
    aboutContainer.appendChild(text);

    content.appendChild(aboutContainer);
}