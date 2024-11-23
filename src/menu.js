// menu.js
import witchBrewMock from './assets/WitchBrewMocktail.webp';
import bloodyMoonSangria from './assets/BloodyMoonSangria.webp';
import shadowFries from './assets/ShadowFries.webp';
import graveyardGreens from './assets/graveyardGreens.webp';
import nightfallRavioli from './assets/nightfallRavioli.webp';
import midnightRoast from './assets/midnightRoast.webp';
import etherealEssence from './assets/etherealEssence.webp';
import truffleMosaic from './assets/truffleMosaic.webp';
import twilightEmberStew from './assets/twillightEmberStew.webp';

export const menuFunc = (function() {
    const items = [
            { name: "Witch's Brew Mocktail", discription: "A sparkling green apple soda with a hint of lime, served in a tall glass with a glowing ice cube and a black licorice straw.", firstOfThisType: "Beverages", price: "$16", img: witchBrewMock },
            { name: "Bloody Moon Sangria", discription: "A deep crimson sangria with red wine, pomegranate juice, orange slices, and a touch of cinnamon, served in a goblet with a sugared rim.", price: "$16", img: bloodyMoonSangria },
            { name: "Ethereal Essence", discription: "A mesmerizing potion of luminous teal nectar, blending the crispness of enchanted elderflower with a hint of ethereal mint.", price: "$18", img: etherealEssence },
            { name: "Shadow Fries", discription: "Crispy sweet potato fries dusted with activated charcoal salt, served with a spicy black garlic aioli.", firstOfThisType: "Side Dishes", price: "$25", img: shadowFries },
            { name: "Graveyard Greens", discription: "A mixed greens salad featuring dark kale, roasted beets, candied pecans, and a tangy blackberry vinaigrette.", price: "$23", img: graveyardGreens },
            { name: "Spectral Truffle Mosaic", discription: "A delicate mosaic of black truffle-infused potato medallions, layered with charred leek cream and sprinkled with ghost pepper ash.", price: "$30", img: truffleMosaic },
            { name: "Nightfall Ravioli", discription: "Handmade black squid ink ravioli stuffed with ricotta and spinach, served in a roasted red pepper cream sauce.", firstOfThisType: "Main Dishes", price: "$35", img: nightfallRavioli },
            { name: "Midnight Roast", discription: "A slow-cooked beef roast glazed with a red wine reduction, paired with garlic mashed potatoes and roasted root vegetables.", price: "$38", img: midnightRoast },
            { name: "Twilight Ember Stew", discription: "A hearty, slow-simmered stew with tender chunks of roasted root vegetables, seared lamb, and a rich broth infused with smoked paprika and charred rosemary.", price: "$40", img: twilightEmberStew}
        ];

    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuheader = document.createElement('div');
    menuheader.classList.add('menuHeader');
    menuheader.innerHTML = `MENU`;
    content.appendChild(menuheader);

    const menu = document.createElement('div');
    menu.classList.add('menu');
//     menu.innerHTML = `MENU`;
    content.appendChild(menu);

    const displayInfo = document.createElement('div');
    displayInfo.classList.add('displayInfo');
    displayInfo.innerHTML = `
        <img src='${items[0].img}' alt='' class='dish-img'>
        <p class='menuSpans'>${items[0].discription}</p>
        `;
    menu.appendChild(displayInfo);

    const changeDisplay = (dish, dishImg, element) => {
        displayInfo.innerHTML = `
        <img src='${dishImg}' alt='${dish}' class='dish-img'>
        <p class='menuSpans'>${dish}</p>
        `;
    document.querySelectorAll('.p1').forEach(dish => dish.classList.remove('selected'));
    element.classList.add('selected');
  
    
    };

    const menuList = document.createElement('div');
    menuList.classList.add('menuList');

items.forEach((item) => {
        const dishElement = document.createElement('p');
        dishElement.classList.add('p1');
        dishElement.innerHTML = `${item.name}<span class='priceSpan'>${item.price}</span>`;
        if(item.firstOfThisType) { 
                // first of this type
                console.log(item.firstOfThisType);
                const firstOfThisType = document.createElement('p');
                firstOfThisType.classList.add('p0');
                firstOfThisType.innerHTML = item.firstOfThisType;
                menuList.appendChild(firstOfThisType);
        }
        dishElement.addEventListener('click', () => changeDisplay(item.discription, item.img, dishElement));
        menuList.appendChild(dishElement);
    });

    menu.appendChild(menuList);

    
    


});