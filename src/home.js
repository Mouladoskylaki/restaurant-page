(function homeFunc() {
const home = document.querySelector('.home');
let welcomeMsg = document.createElement('div');
welcomeMsg.innerHTML = `<h3>Welcome to Adam's Restaurant!</h3>
            Where the food is as dark as our sense of
            humor. Join us for a meal that's both 
            delicious and delightfully twisted—just 
            like our family. Enjoy the eerie ambiance 
            and make yourself at home… if you dare!`
welcomeMsg.classList.add('welcome-msg', 'homies');
home.appendChild(welcomeMsg);

let hours = document.createElement('div');
hours.innerHTML = `<h3>Our Hours of Operation:</h3>
            We’re open every day—because who needs 
            sleep when there’s food to be served?
            
            <h4>Monday to Friday:</h4> 5:00 PM - Midnight (or until we run out of "spooky specials")
            <h4>Saturday & Sunday:</h4> 12:00 PM - Midnight (because weekends are for family, food, and the occasional ghost)
            Come hungry, leave mysteriously satisfied!</div>`;
hours.classList.add('hours', 'homies');
home.appendChild(hours);
let location = document.createElement('div');
location.innerHTML = `
            <h3>Location:</h3>
            We’re haunting the streets of Kalamata, Greece, where the olives are as dark as our humor and the food is to die for.
            Find us at 123 Spooky Avenue—just follow the eerie scent of deliciousness.`;
location.classList.add('loacation', 'homies');
home.appendChild(location);
})();