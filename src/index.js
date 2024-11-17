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
// import laughingImg from './assets/laughing.svg';
// const image = document.createElement("img");
// image.src = laughingImg;
// document.body.appendChild(image);