// menu.js
import witchBrewMock from './assets/WitchBrewMocktail.webp';
import bloodyMoonSangria from './assets/BloodyMoonSangria.webp';
export const menuFunc = (function() {

    const content = document.getElementById('content');
    content.innerHTML = '';

    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);

    const beverages = document.createElement('div');
    beverages.classList.add('beverages');
    beverages.innerHTML = `<h2>Beverages</h2>`;
    menu.appendChild(beverages);

    const beverage1 = document.createElement('div');
    beverage1.classList.add('beverage');
    beverage1.innerHTML = `<h4>"Witch's Brew Mocktail"</h4>
            A sparkling green apple soda with a hint of lime, served in a tall glass with a glowing ice cube and a black licorice straw.`;
    beverages.appendChild(beverage1);
    let beverage1img = document.createElement('img');
    beverage1img.src = witchBrewMock;
    beverage1img.classList.add('beverage1img');
    beverage1.appendChild(beverage1img);
    

    const beverage2 = document.createElement('div');
    beverage2.classList.add('beverage');
    beverage2.innerHTML = `<h4>"Bloody Moon Sangria"</h4>
            A deep crimson sangria with red wine, pomegranate juice, orange slices, and a touch of cinnamon, served in a goblet with a sugared rim.`;
    beverages.appendChild(beverage2);
    let beverage2img = document.createElement('img');
    beverage2img.src = bloodyMoonSangria;
    beverage2img.classList.add('beverage2img');
    beverage2.appendChild(beverage2img);

    const sideDishes = document.createElement('div');
    sideDishes.classList.add('sideDishes');
    sideDishes.innerHTML = `<h2>Side Dishes</h2>`;
    menu.appendChild(sideDishes);

    const sideDish1 = document.createElement('div');
    sideDish1.classList.add('sideDish');
    sideDish1.innerHTML = `<h4>Shadow Fries</h4>
            Crispy sweet potato fries dusted with activated charcoal salt, served with a spicy black garlic aioli.`;
    sideDishes.appendChild(sideDish1);

    const sideDish2 = document.createElement('div');
    sideDish2.classList.add('sideDish');
    sideDish2.innerHTML = `<h4>Graveyard Greens</h4>
            A mixed greens salad featuring dark kale, roasted beets, candied pecans, and a tangy blackberry vinaigrette.`;
    sideDishes.appendChild(sideDish2);

    const mainDishes = document.createElement('div');
    mainDishes.classList.add('mainDishes');
    mainDishes.innerHTML = `<h2>Main Dishes</h2>`;
    menu.appendChild(mainDishes);

    const mainDish1 = document.createElement('div');
    mainDish1.classList.add('mainDish');
    mainDish1.innerHTML = `<h3>Nightfall Ravioli</h3>
            Handmade black squid ink ravioli stuffed with ricotta and spinach, served in a roasted red pepper cream sauce.`;
    mainDishes.appendChild(mainDish1);

    const mainDish2 = document.createElement('div');
    mainDish2.classList.add('mainDish');
    mainDish2.innerHTML = `<h3>Midnight Roast</h3>
            A slow-cooked beef roast glazed with a red wine reduction, paired with garlic mashed potatoes and roasted root vegetables.`;
    mainDishes.appendChild(mainDish2);
    
    


});