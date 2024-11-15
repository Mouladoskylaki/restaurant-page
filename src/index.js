console.log('Hello');
import './styles/styles.css';
import { homeFunc } from './home.js';
const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', homeFunc);

