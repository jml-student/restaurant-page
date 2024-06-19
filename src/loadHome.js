import restaurantImg from './img/restaurant-img.png'

export function loadHome() {
    const content = document.querySelector('#content');

    const homeFirstBlock = document.createElement('div');
    const homeSecondBlock = document.createElement('div');

    const title = document.createElement('div');
    title.classList = 'home-title';
    title.textContent = 'Welcome to Burger Haven!';

    const image = document.createElement('img');
    image.setAttribute('src', restaurantImg);

    const text = document.createElement('p');
    text.classList = 'home-text';
    text.textContent = `At Burger Haven, we believe that a great burger is more than just a meal—it's an experience. Nestled in the heart of New York city, our restaurant combines the freshest ingredients, innovative recipes, and a passion for culinary excellence to bring you burgers like no other.`;

    homeFirstBlock.appendChild(title);
    homeFirstBlock.appendChild(image);

    homeSecondBlock.appendChild(text);

    content.appendChild(homeFirstBlock);
    content.appendChild(homeSecondBlock);
}