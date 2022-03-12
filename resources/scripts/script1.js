

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

//TODO has to be fixed when stuff besdies sidebar generates card on click


const sidebarClickables = document.getElementsByClassName('--sidebar-clickable');



const cardGeneratingClickables = [sidebarClickables];

for(let j = 0 ; j < cardGeneratingClickables.length ; j += 1){





    for(let i = 0 ; i < cardGeneratingClickables[0].length ; i += 1){

        let cE = cardGeneratingClickables[0][i];
        let id = cE.id;

        cE.onclick = ((e) => {

            cE.style.cursor = 'pointer';

            if(cE.id != 'expand'){
                createCard(id);
            }
        })
        cE.onmouseover = ((e) => {
            cE.style.border = 'var(--large-border)';

        })
        cE.onmouseleave = ((e) => {
            cE.style.border = 'none';
        })


    }
}




