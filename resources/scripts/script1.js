

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


//TODO has to be fixed when stuff besdies sidebar generates card on click


const sidebarClickables = document.getElementsByClassName('--sidebar-clickable');
const openInNewTab = document.getElementsByClassName('--card-h-newtab');
const closeCard = document.getElementsByClassName('--card-h-x');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');
const header = document.querySelector('header');
const sidebarText = document.getElementsByClassName('--sidebar-clickable-text');
const arrow = document.getElementById('expand');
//
const clickables = [sidebarClickables, openInNewTab, closeCard];


arrow.onclick = ((e) => {
    /* target grid area => sidebar: 1 / 1 / -1 / 3; ; header: 1 / 3 / 2 / -1; main: 2 / 3 / -1 / -1;
    */
    sidebar.style.gridArea = '1 / 1 / -1 / 3';
    header.style.gridArea = '1 / 3 / 2 / -1';
    main.style.gridArea = '2 / 3 / -1 / -1';
    arrow.id = 'collapse';
    arrow.title = 'collapse';
    
    for(let k = 0 ; k < sidebarText.length ; k += 1){
        console.log('ay');
        sidebarText[k].style.display = 'flex';
    }
    
    arrow.style.cursor = 'pointer';

    sidebarClickables.forEach((e) => {
        e.style.width = '2.5cm';
    })
})



    
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


