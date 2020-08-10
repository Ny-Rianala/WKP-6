# WKP6 - Hungry Student Restaurant

### Another website about food, really...

Yes, but who doesn't like food? 😄

This time, we're going to build a food delivery app, where we can see the meal options, select them, and see the result in our cart.

### Users must be able to :

-   See a list of five meal options
-   See the prices of each meal option
-   Add a meal to the cart
-   Filter the list to see only the vegetarian meals, or only the spicy ones
-   See their total bill
-   “Check out” - this doesn’t have to process payment, just simply display
    a message stating the order as been confirmed.

### Bonus :

-   Change the quantity of meals in the cart
-   Remove a meal from the cart

Here is an example of layout :

![assets/1.png](assets/1.png)

And when I click on the _Confirm Order_ button, I can display a message to show the total bill from the order.

![assets/2.png](assets/2.png)

### Food list

Here's the food object :

```jsx
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
```

The **id** here is a unique string, is role is to identify an element inside the list. The title will be the food name shown to the user.

You'll also have an **order** collection, where you will push a food object every time the user add an element to his order.

### Maps, Filter, Reduce, and other friends

-   To generate any list of element (for example, the list of food), **Map** is really useful.
-   To get the full price of list of items, **Reduce** is the perfect use case.
-   To count how many times an item is in a list, you could **Filter** the list and see the length of the result, or use a **Reduce** to count all of the instances.

But this is just one way to think about that. Feel free to try any other logic you have in mind.

### 💡Tips

-   Don't forget to clean your code, and update your readme before Monday morning.

Good luck!

### Report
1. In a few sentences, explain the structure of your project.  
 Firstly, I created varibles for the list. Then, I wrote a new function to generate the lists from the array. In this function, I added the HTML to generate the list. Secondly, I started to create a function to check the checkbox, inside of this function, I put a condition to check if the food is "true". Finally, I added event listener to listen for changes.
 1. If you had more time, what area of your work would you improve?  
 If I had more time, I would continue to make the checkbox worked and also the next step.
 1. Did you learn anything new while working on this project?  
 Actually, what I learn from this project was using map to get the lists and then we have to call the function after that because at first I didn't call it, it didn't work and I spent most of my time searching for the bugs. 
 1. What was the most challenging part for you?  
 The most challlenging part for me is still in the checkbox. I mean to relate everything in it. For instance, when the checkbox is checked, our lists should get things.
 1. Would you like a new explanation about a specific topic?   
I think, I need more explanation about how can we relate the checkbox and the lists.
 1. Any comments?
 
