import burgerCompleteImg from './img/burger-complete.png';
import burgerDobleImg from './img/burger-doble.png';
import burgerBigImg from './img/burger-big.png';

export function loadMenu() {
    const content = document.querySelector('#content');

    const menuContainer = document.createElement('div');
    menuContainer.classList = 'menu-container';

    const firstItem = document.createElement('div');
    firstItem.classList = 'item';
    const secondItem = document.createElement('div');
    secondItem.classList = 'item';
    const thirdItem = document.createElement('div');
    thirdItem.classList = 'item';

    const firstBurger = document.createElement('img');
    firstBurger.setAttribute('src', burgerCompleteImg);

    const secondBurger = document.createElement('img');
    secondBurger.setAttribute('src', burgerDobleImg);
    
    const thirdBurger = document.createElement('img');
    thirdBurger.setAttribute('src', burgerBigImg);

    const firstItemText = document.createElement('div');
    const firstItemName = document.createElement('p');
    firstItemName.textContent = 'Complete Burger';
    const firstItemContent = document.createElement('p');
    firstItemContent.textContent = '$12.95';
    
    const secondItemText = document.createElement('div');
    const secondItemName = document.createElement('p');
    secondItemName.textContent = 'Doble Cheese Burger';
    const secondItemContent = document.createElement('p');
    secondItemContent.textContent = '$13.95';

    const thirdItemText = document.createElement('div');
    const thirdItemName = document.createElement('p');
    thirdItemName.textContent = 'Big Burger';
    const thirdItemContent = document.createElement('p');
    thirdItemContent.textContent = '$14.95';

    firstItemText.appendChild(firstItemName);
    firstItemText.appendChild(firstItemContent);

    secondItemText.appendChild(secondItemName);
    secondItemText.appendChild(secondItemContent);

    thirdItemText.appendChild(thirdItemName);
    thirdItemText.appendChild(thirdItemContent);

    firstItem.appendChild(firstItemText);
    firstItem.appendChild(firstBurger);

    secondItem.appendChild(secondItemText);
    secondItem.appendChild(secondBurger);

    thirdItem.appendChild(thirdItemText);
    thirdItem.appendChild(thirdBurger);

    menuContainer.appendChild(firstItem);
    menuContainer.appendChild(secondItem);
    menuContainer.appendChild(thirdItem);

    content.appendChild(menuContainer);
}