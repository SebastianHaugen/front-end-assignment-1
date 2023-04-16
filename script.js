// solving task 1.a
// I have created a class called Recipe that initializes 5 objects called recipe 1-5 that contains the different recipes
// That will be shown on the website.
// See Jon Duckett's book page 113 on creating objects.
// See Mozilla Developer on creating classes https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// I also looked through the presentation slides lecture_w8_Classes_BuiltInObjects page 4-7
// I have created 5 objects that have 5 properties each and the method totalTime using preparationTime and bakingTime to calculate the total time
// Solving task 1.b
// The ingredients property is using an array to store the ingredients for each recipe.
// Solving task 1.c
// The information of the objects is displayed to the user using the document.write method.
class Recipe {
  constructor(name, ingredients, image, preparationTime, bakingTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.preparationTime = preparationTime;
    this.bakingTime = bakingTime;
  }

  // This method uses the preparationTime and bakingTime properties to calculate the total time to make the recipe that will be displayed
  // on the webpage
  // See Jon duckett's book page 114-115 on creating methods
  totalTime() {
    return this.preparationTime + this.bakingTime;
  }

  // This method displays the information of the recipe to the user
  // I decided to use the document.write object to display the information of the recipe to the user on the webpage
  // See Jon Duckett's book page 226 on using the document.write object
  // See Mozilla Developer https://developer.mozilla.org/en-US/docs/Web/API/Document/write
  // I realized after creating this webpage that document.write is not the best method but it works for this project
  // On the next project i will probably use another method
  displayRecipe() {
    // solving task 2.b
    // I'm using the document.write method to display the information of the recipe to the user on the webpage
    // solving task 2.c
    // Here i used the toUpperCase method to make the name of the recipe uppercase on the webpage which is a method of the string object
    // See Jon Duckett's book page 128 on using the toUpperCase method
    // Also Mozilla Developer on using the toUpperCase method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    document.write(
      "<div class='boxes'>" + "<h1>" + this.name.toUpperCase() + "</h1>"
    );
    document.write("<ul>");
    // I used a for loop to loop through the ingredients array and display each ingredient to the user this was to save some lines of code
    // i used .length to get the length of the array which means it will loop through every single ingredient in the array
    // The i++ adds 1 every time the loop runs so if .length is equal to 5 it will loop through the array 5 times from 0-4
    // i was also considering using the forEach method but i decided on using a for loop since that is something we have learned in class
    // See Mozilla for documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    // See Jon Duckett's book page 117 on using a for loop
    // See  lecture_w9_Decisions_Loops page 40-42 on for loops 
    for (let i = 0; i < this.ingredients.length; i++) {
      document.write("<li>" + this.ingredients[i] + "</li>");
    }
    document.write("</ul>");
    //This line uses the totalTime method to display the total time to make the recipe to the user
    // totalTime is a result of plusing the preparationTime and bakingTime properties of the recipe class
    document.write(
      "<p>" + "Time to make: " + this.totalTime() + " minutes" + "</p>"
    );
    // This code uses the image property to display the image of the recipe to the user
    // The image property is a string that contains a relative path to the image of the recipe like "images/ranch-pork-roast.jpg"
    document.write(
      "<img src='" + this.image + "' alt='" + this.name + "'>" + "</div>"
    );
  }
}

// Using the class to initialize the objects
// Now that i have a class the recipe1-3 will follow the constructor of the class with it's name, ingredients, image etc.
// See Jon Duckett's book page 117 on creating a class to create multiple objects
// See Mozilla Developer on creating objects with class https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_Classes
// Also the presentation from class lecture_w8_Classes_BuiltInObjects page 9
const recipe1 = new Recipe(
  "Ranch Pork Roast",
  [
    "1 boneless pork loin roast (2-1/2 pounds)",
    "2 tablespoons olive oil",
    "1 tablespoon ranch salad dressing mix",
    "2 teaspoons Dijon mustard",
    "1 garlic clove, minced",
    "1/2 teaspoon pepper",
  ],
  "images/ranch-pork-roast.jpg",
  20,
  15
);

const recipe2 = new Recipe(
  "Banh Mi Baby Back Ribs",
  [
    "4 pounds pork baby back ribs",
    "2 whole garlic bulbs",
    "1 large navel orange, quartered",
    "1 cup Korean barbecue sauce, divided",
    "3/4 cup rice vinegar",
    "1/2 cup sugar",
    "1/3 cup water",
    "1/2 cup shredded carrots",
    "1/2 cup shredded daikon radish",
    "1/2 cup thinly sliced green onions",
    "Toppings: Thinly sliced cucumber, sliced fresh jalapeno pepper, cilantro leaves and lime wedges",
  ],
  "images/spareribs.jpg",
  15,
  30
);

const recipe3 = new Recipe(
  "Skillet Mac & Cheese",
  [
    "2 cups uncooked pasta (about 8 ounces), such as elbow macaroni, cavatappi or shells",
    "2 tablespoons butter",
    "2 tablespoons all-purpose flour",
    "1-1/2 cups half-and-half cream",
    "3/4 pound process cheese (Velveeta), cubed",
    "Optional toppings: Fresh arugula, halved cherry tomatoes and coarsely ground pepper",
  ],
  "images/skillet-mac-cheese.jpg",
  10,
  5
);

const recipe4 = new Recipe(
  "Rosemary Salmon and Veggies",
  [
    "1-1/2 pounds salmon fillets, cut into 4 portions",
    "2 tablespoons melted coconut oil or olive oil",
    "2 tablespoons balsamic vinegar",
    "2 teaspoons minced fresh rosemary or 3/4 teaspoon dried rosemary, crushed",
    "1 garlic clove, minced",
    "1/2 teaspoon salt",
    "1 pound fresh asparagus, trimmed",
    "1 medium sweet red pepper, cut into 1-inch pieces",
    "1/4 teaspoon pepper",
    "Lemon wedges",
  ],
  "images/salmon.jpg",
  7,
  15
);

const recipe5 = new Recipe(
  "Quesadillas with Chicken",
  [
    "1 pound chicken breasts (cut into bite sized pieces)",
    "1 tablespoon oil",
    "1/2 cup diced bell pepper (any color)",
    "1/2 cup diced onion",
    "1 medium jalapeno, diced (optional)",
    "2 cloves garlic (minced)",
    "1 tablespoon ",
    "2 cups shredded melting cheese",
    "4 medium flour tortillas",
  ],
  "images/chicken-quesadillas.jpg",
  25,
  15
);
// Solving task 2.a
// I'm using the window object to display a welcome message to the user when the page loads
// See Jon Duckett's book page 124 on the window object and it's uses
// Mozilla Developer website https://developer.mozilla.org/en-US/docs/Web/API/Window
window.alert("Welcome to the Recipe Website!");

// the recipes variable is used to group the objects into an array so i can use the random number to select a recipe
// See Jon Duckett's book page 118 on creating a arrays
let recipes = [recipe1, recipe2, recipe3, recipe4, recipe5];

// solving task 2.d
// This variable creates a random number from 0-4 that will be used to display a random recipe on the webpage
// Math.floor ensures that the number is rounded down to the nearest integer
// See Mozilla Developer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// And https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let randomNum = Math.floor(Math.random() * 5);

// This variable calls the recipes array and uses the randomNum variable which generates a number from 0-4 and 
// displays the recipe that is in that position
let recipe = recipes[randomNum];

// This function starts the displayRecipe method from the recipe class
// The method contains the document.write method that displays the information of the recipe to the user on the webpage
// The reason i had to do it this way was because i had some issues with calling the method totalTime from the outside the recipe class
// So i decided to put all of the document.write code inside the class and that fixed the issue
recipe.displayRecipe();

// solving task 2.e
// I used the Date method to display the current date to the user on the bottom of the webpage
// See Mozilla Developer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
document.write("<p class='date'>" + "Current date: " + Date() + "</p>");