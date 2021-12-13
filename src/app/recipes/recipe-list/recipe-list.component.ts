import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is a test!","https://images.pexels.com/photos/6957998/pexels-photo-6957998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
