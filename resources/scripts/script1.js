

const createCard = () => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardH = document.createElement('div');
    cardH.className = '--card-h';

    const cardHNewtab = document.createElement('div');
    cardHNewtab.className = '--card-h-newtab';

    const cardHTitle = document.createElement('div');
    cardHTitle.className = '--card-h-title';

    const cardHX = document.createElement('div');
    cardHX.className = '--card-h-x';

    const cardContainer = document.createElement('div');
    cardContainer.className = '--card-container';



    main = document.querySelector('main');
    main.appendChild(card);
    card.appendChild(cardH);
    cardH.appendChild(cardHNewtab);
    cardH.appendChild(cardHTitle);
    cardH.appendChild(cardHX);
    card.appendChild(cardContainer);
    
}

const sC = document.getElementsByClassName('--sidebar-clickable');
const header = document.querySelector('header');
header.onclick = createCard();