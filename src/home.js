// home.js
import logoImg from './assets/logo.webp';
import exterior from './assets/exterior.webp';
import interior from './assets/interior.webp';

export const homeFunc = (function() {

const content = document.getElementById('content');
content.innerHTML = '';

const homeContents = document.createElement('div');
homeContents.classList.add('homeContents');
content.appendChild(homeContents);

let logo = document.createElement('img');
logo.src = logoImg;
logo.classList.add('logoImg');
homeContents.appendChild(logo);

let welcomeMsg = document.createElement('div');
welcomeMsg.innerHTML = `<h3 class='p1'>Welcome to Adam's Restaurant!</h3>
            Where the food is as dark as our sense of
            humor. Join us for a meal that's both 
            delicious and delightfully twisted—just 
            like our family. Enjoy the eerie ambiance 
            and make yourself at home… if you dare!`;
const imgDiv = document.createElement('div');
imgDiv.classList.add('imgDiv');
welcomeMsg.appendChild(imgDiv);

const exteriorImg = document.createElement('img');
exteriorImg.src = exterior;
exteriorImg.classList.add('dish-img');
imgDiv.appendChild(exteriorImg);

const interiorImg = document.createElement('img');
interiorImg.src = interior;
interiorImg.classList.add('dish-img');
imgDiv.appendChild(interiorImg);

welcomeMsg.classList.add('welcome-msg', 'homies');
homeContents.appendChild(welcomeMsg);

let hours = document.createElement('div');
hours.innerHTML = `<h3 class='p1'>Our Hours of Operation:</h3>
            We’re open every day—because who needs 
            sleep when there’s food to be served?
            
            <h4>Monday to Friday:</h4> 5:00 PM - Midnight (or until we run out of "spooky specials")
            <h4>Saturday & Sunday:</h4> 12:00 PM - Midnight (because weekends are for family, food, and the occasional ghost)
            Come hungry, leave mysteriously satisfied!</div>`;
hours.classList.add('hours', 'homies');
homeContents.appendChild(hours);

let location = document.createElement('div');
location.innerHTML = `
            <h3 class='p1'>Location:</h3>
            We’re haunting the streets of Kalamata, Greece, where the olives are as dark as our humor and the food is to die for.
            Find us at 123 Spooky Avenue—just follow the eerie scent of deliciousness.`;
location.classList.add('loacation', 'homies');
homeContents.appendChild(location);

const footerSpacer = document.createElement('div');
footerSpacer.classList.add('footerSpacer');
content.appendChild(footerSpacer);
});