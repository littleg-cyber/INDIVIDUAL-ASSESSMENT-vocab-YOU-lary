import { getCards } from '../api/cardsData';
import { showCards } from '../pages/cards';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  // ALL cards
  document.querySelector('#all-vocab').addEventListener('click', () => {
    console.warn('button-pressed!');
    getCards(user.uid).then(showCards);
  });
};

export default navigationEvents;
