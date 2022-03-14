const h1 = document.querySelector('h1');
const sidebarClickables = document.getElementsByClassName('--sidebar-clickable');
const openInNewTab = document.getElementsByClassName('--card-h-newtab');
const closeCard = document.getElementsByClassName('--card-h-x');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');
const header = document.querySelector('header');
const sidebarText = document.getElementsByClassName('--sidebar-clickable-text');
const arrow = document.getElementById('expand');
const accountIcon = document.getElementById('account');
const settingsIcon = document.getElementById('settings');
let cards = document.getElementsByClassName('card');
accountIcon.onclick = (() => {
    window.open('http://127.0.0.1:5500/account.html');
})
settingsIcon.onclick = (() => {
    window.open('http://127.0.0.1:5500/settings.html');
})


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



    const main = document.querySelector('main');
    
    main.appendChild(card);
    card.appendChild(cardH);
    cardH.appendChild(cardHNewtab);
    cardH.appendChild(cardHTitle);
    cardHTitle.appendChild(cardHTitleText);
    cardH.appendChild(cardHX);
    card.appendChild(cardContainer);
    
    cards.push(card);
}

const clickables = [sidebarClickables, openInNewTab, closeCard];

const windowIsSmall = window.matchMedia("(max-width: 14cm").matches;

function destroye(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    parent.remove();
}


let test = 0;
const ff = () => {
    clickables.forEach((e) => {
        console.log(e);
        test+=1;
        console.log(test);
    })
}


//only works if clickables[0] is sidebar
for(let a = 0 ; a < clickables[0].length ; a += 1){
    let e = clickables[0][a];
    e.onmouseover = (() => {
        e.style.border = 'var(--large-border)';
    })
    e.onmouseleave = (() => {
        e.style.border = 'none';
    })
    e.onclick = (() => {
        createCard(e.id);
    })
}

for(let b = 1 ; b < clickables.length ; b +=1){
    for(let c = 0 ; c < clickables[b].length ; c +=1){
        let e = clickables[b][c];
        e.onmouseover = (() => {
            e.style.border = 'var(--small-border)';
        })
        e.onmouseleave = (() => {
            e.style.border = 'none';
        })
    }
}


