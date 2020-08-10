const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];

const foodDelivery = document.querySelector('.container');
const listOfFood = document.querySelector('.list-of-food');
const spicyFood = document.querySelector('.spicy-food');
const vegetarianFood = document.querySelector('.vegetarian-food');


//Generate list for all foods
const foodCard = (e) => {
    //add html list
        const listHTML = foods.map (food => `
          <ul class= "list-of-food">
            <li>${food.title} ${food.price}</li>
          </ul>
        <button>Add</button>`
        );
            listOfFood.innerHTML = listHTML;
    };
    foodCard();


//check the food if they are spicy or vegetarian
const tasteOfFood = id => {
    if (spicyFood.checked === true) {
       const spicyTaste = foods.filter(spicy => spicy === true);
          spicyTaste.map(spicy => ` 
              <ul>
                <li>${spicy.id}</li>
              </ul> 
       `);
    }else if(vegetarianFood.checked === true) {
        const vegetarianTaste = foods.filter(vegetarian => vegetarian === true);
        vegetarianTaste.map(vegetarian => `
        <ul>
           <li>${spicy.id}</li>
        </ul>
        `);
    }
};

//Listen for the checkbox
spicyFood.addEventListener('change', tasteOfFood);
vegetarianFood.addEventListener('change', tasteOfFood);