//  Destructuring array -> based on position, tidak berdasarkan penamaan key
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites; // 0,1,2,3

//  Destruturing array assigment
let firstfood = "Cacing";
let secondfood = "Daging";
[firstfood, secondfood] = favorites;
console.log(firstfood,secondfood)

// Default destructuring array 
const favorite = ["Seafood"];
 
const [myFood, herFood = "Salad"] = favorite
 
console.log(myFood);
console.log(herFood);