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
    new Recipe('A Test Recipe', 'This is a simple a test', 'https://t3.ftcdn.net/jpg/01/22/73/00/240_F_122730057_ap199rB09c14HYYHfQRr8JFRPwLNLGRl.jpg')
    , new Recipe('Another Test Recipe', 'This is simply a test', 'https://t3.ftcdn.net/jpg/01/22/73/00/240_F_122730057_ap199rB09c14HYYHfQRr8JFRPwLNLGRl.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
