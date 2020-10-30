import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-book-backend-by-jesse.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes(): any {
    return this.http
      .get<Recipe[]>('https://recipe-book-backend-by-jesse.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map( recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
