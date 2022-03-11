const cardArray = [
  {
    name: 'fries',
    img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'cheeseburger',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
  },
  {
    name: 'hotdog',
    img: 'https://images.unsplash.com/photo-1542344807-21226ec94b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    name: 'ice-cream',
    img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    name: 'milkshake',
    img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
  },
  {
    name: 'pizza',
    img: 'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
  },
  {
    name: 'fries',
    img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: 'cheeseburger',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
  },
  {
    name: 'hotdog',
    img: 'https://images.unsplash.com/photo-1542344807-21226ec94b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    name: 'ice-cream',
    img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    name: 'milkshake',
    img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
  },
  {
    name: 'pizza',
    img: 'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');
const cardsChoosen = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute(
      'src',
      'https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
    );
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function flipCard() {
  const cardId = this.getAttribute('data-id');
  console.log(cardArray);
  cardsChoosen.push(cardArray[cardId].name);
  console.log('test', cardId);
  console.log(cardsChoosen);
}
