import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is a test!", "https://images.pexels.com/photos/6957998/pexels-photo-6957998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"),
    new Recipe("Test Recipe2222", "This is a test 22222!", "https://images.pexels.com/photos/9715702/pexels-photo-9715702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
