

const createCard = (id) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = id;

    const cardH = document.createElement('div');
    cardH.className = '--card-h';

    const cardHNewtab = document.createElement('div');
    cardHNewtab.className = '--card-h-newtab';

    const cardHTitle = document.createElement('div');
    cardHTitle.className = '--card-h-title';

    const cardHTitleText = document.createElement('div');
    cardHTitleText.className = '--card-h-title-text';
    cardHTitleText.innerHTML = `>${id}`;

    const cardHX = document.createElement('div');
    cardHX.className = '--card-h-x';

    const cardContainer = document.createElement('div');
    cardContainer.className = '--card-container';



    main = document.querySelector('main');
    main.appendChild(card);
    card.appendChild(cardH);
    cardH.appendChild(cardHNewtab);
    cardH.appendChild(cardHTitle);
    cardHTitle.appendChild(cardHTitleText);
    cardH.appendChild(cardHX);
    card.appendChild(cardContainer);
    
}

const header = document.querySelector('header');

//hover, onclick, etc.
const sidebarClickables = document.getElementsByClassName('--sidebar-clickable');

for(let i = 0 ; i < sidebarClickables.length ; i += 1){
    sidebarClickables[i].onclick = ((e) => {
        let id = sidebarClickables[i].id;
        
        console.log(id);
        createCard(id);
    })
}