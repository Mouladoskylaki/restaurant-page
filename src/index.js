// index.js
console.log('Hello');
import './styles/styles.css';
import { homeFunc } from './home.js';
import { menuFunc } from './menu.js';
import { contactFunc } from './contact.js';

const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', homeFunc);
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', menuFunc);
const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', contactFunc);
homeFunc();

const navInfo = document.querySelector('.nav-info');
const messages = [
    "Fine Dining with a Twist of Mystery - 123 Mystery Lane | Open: 6 PM - 12 AM",
    "Come for the food, stay for the mystery - 123 Mystery Lane | Reservations available",
    "Exquisite flavors in every bite - 123 Mystery Lane | Serving daily from 6 PM",
    "Indulge in culinary delights - 123 Mystery Lane | Open until midnight!",
    "A twist of mystery in every dish - 123 Mystery Lane | Explore our menu today"
];

let messageIndex = 0;

// Function to change the message every few seconds
const changeMessage = () => {
    navInfo.classList.add('hidden');
    setTimeout(() => {
            navInfo.textContent = messages[messageIndex];
            navInfo.classList.remove('hidden');
            messageIndex = (messageIndex + 1) % messages.length; // Loop back to the first message after the last one
    }, 500)

};

// Change message every 5 seconds (5000ms)
setInterval(changeMessage, 5000);