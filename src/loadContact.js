export function loadContact() {
    const content = document.querySelector('#content');

    const contactContainer = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Contact';

    const text = document.createElement('p');
    text.textContent = 'Number, email...';

    contactContainer.appendChild(title);
    contactContainer.appendChild(text);

    content.appendChild(contactContainer);
}