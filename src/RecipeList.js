import React, { Component } from "react";
import Recipe from "./Recipe";
import "./RecipeList.css";

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Doughnut dough",
        instructions:
          "Put 150g water and all the dough ingredients, apart from the butter, into the bowl of a mixer with a beater paddle. Mix on a medium speed for 8 mins or until the dough starts coming away from the sides and forms a ball. Turn off the mixer and let the dough rest for 1 min. Start the mixer up again on a medium speed and slowly add the butter to the dough – about 25g at a time. Once it is all incorporated, mix on high speed for 5 mins until the dough is glossy, smooth and very elastic when pulled. Cover the bowl with cling film or a clean tea towel and leave to prove until it has doubled in size. Knock back the dough in the bowl briefly, then re-cover and put in the fridge to chill overnight. The next day, take the dough out of the fridge and cut it into 50g pieces (you should get about 20). Roll the dough pieces into smooth, tight buns and place them on a floured baking tray, leaving plenty of room between them, as you don’t want them to stick together while they prove.",
        ingredients: [
          "500g strong white bread flour",
          "60g golden caster sugar",
          "4 eggs",
          "zest ½ lemon",
          "2 tsp fine sea salt",
          "125g softened unsalted butter",
        ],
        img: "1.jpg",
      },
      {
        title: "15-Minute Homemade Donuts",
        instructions:
          "Preheat oil in a deep saute pan or pot over medium heat. Whisk together flour, sugar, baking powder and salt. In a separate bowl or measuring cup, whisk together buttermilk and melted butter. Add the dry ingredients to the wet and stir until just combined. Gently roll dough into 1/2 tbsp size balls. Carefully place dough balls into the preheated oil (frying about half of them at a time) and fry until golden brown on both sides. Use a spider to transfer to paper towels, then let drain and roll in sugar.",
        ingredients: [
          "All-purpose flour",
          "Baking powder",
          "Salt",
          "Buttermilk: If you need a substitute then just use 1/2 cup milk mixed with 1.5 tsp vinegar or lemon juice. Rest 5 minutes.",
          "Granulated sugar",
          "Melted butter",
        ],
        img: "2.jpg",
      },
      {
        title: "Plain Cake Doughnuts",
        instructions:
          "Heat oil in deep-fryer to 375 degrees F (190 degrees C). In a large bowl, sift together flour, sugar, salt, baking powder, cinnamon and nutmeg. Mix in butter until crumbly. Stir in milk and egg until smooth. Knead lightly, then turn out onto a lightly floured surface. Roll or pat to 1/4 inch thickness. Cut with a doughnut cutter, or use two round biscuit cutters of different sizes. Carefully drop doughnuts into hot oil, a few at a time. Do not overcrowd pan or oil may overflow. Fry, turning once, for 3 minutes or until golden. Drain on paper towels.",
        ingredients: [
          "2 cups all-purpose flour",
          "½ cup white sugar",
          "1 teaspoon salt",
          "1 tablespoon baking powder",
          "¼ teaspoon ground cinnamon",
          "2 tablespoons melted butter",
          "½ cup milk",
          "1 egg, beaten",
        ],
        img: "3.jpg",
      },
    ],
  };

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return <div className="recipe-list">{recipes}</div>;
  }
}

export default RecipeList;
