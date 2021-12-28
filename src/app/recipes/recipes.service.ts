import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
	providedIn: 'root',
})
export class RecipesService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'A Test Recipe',
			'This is simply a test',
			'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
		),
		,
		new Recipe(
			'Another Recipe',
			'This is simply a test number 2222',
			'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
		),
	];

	getRecipes() {
		return this.recipes.slice();
	}

	constructor() {}
}
