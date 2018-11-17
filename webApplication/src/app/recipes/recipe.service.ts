import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes:Recipe[] =[
        new Recipe(
            'Neelesh1', 
            'This is a test', 
            'http://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Neelesh2', 
            'This is a test', 
            'http://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

      constructor(private shoppingListService:ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingridents: Ingredient[]) {
        this.shoppingListService.addIngredients(ingridents);
    }
}