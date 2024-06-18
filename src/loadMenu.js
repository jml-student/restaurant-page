import burgerCompleteImg from './img/burger-complete.png';
import burgerDobleImg from './img/burger-doble.png';
import burgerBigImg from './img/burger-big.png';

export function loadMenu() {
    const content = document.querySelector('#content');

    const menuContainer = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Menu';

    const burgerComplete = document.createElement('img');
    burgerComplete.setAttribute('src', burgerCompleteImg);

    const burgerDoble = document.createElement('img');
    burgerDoble.setAttribute('src', burgerDobleImg);
    
    const burgerBig = document.createElement('img');
    burgerBig.setAttribute('src', burgerBigImg);

    menuContainer.appendChild(title);
    menuContainer.appendChild(burgerComplete);
    menuContainer.appendChild(burgerDoble);
    menuContainer.appendChild(burgerBig);

    content.appendChild(menuContainer);
}