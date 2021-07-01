
function pizzaOven(style, sauce, cheese, toppings){
    var pizza = {};
    pizza.style = style;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven("deep dish","traditional", "mozzarella", ["pepperoni", "sausage"]) 
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", 'marinara', ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(pizza2)

var pizzademike = pizzaOven("pancrust", "mariana", "mozzarella", ["chicken", "Bufallo sauce"])
console.log(pizzademike)

var basic = pizzaOven("handtossed", "marinara", "mozarella")
console.log(basic)

// BONUS

var pizza = [
    "large pepperoni",
    "small pepperoni",
    "Plain",
    "Buffalo Chicken",
    "Hawaiian",
    "bbq chicken",
    "cheeseburger",
    "siccillian",
    "deepdish(nasty)",
    "Margherita"
];

function randomPizza(arr){
        var roll = Math.floor(Math.random() * arr.length);
        return arr[roll];
}
var order = randomPizza(pizza);
console.log("An order of:" + order);





// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

// var s2 = sandwichFactory("whitebread", ["eggs", "ham", "bacon"], "munsterd", ["ketchup", "salt", "pepper"] )
// console.log(s2)