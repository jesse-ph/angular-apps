import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'sample description', 'https://t3.ftcdn.net/jpg/01/22/73/00/240_F_122730057_ap199rB09c14HYYHfQRr8JFRPwLNLGRl.jpg')
    , new Recipe('A Test Recipe', 'sample description', 'https://t3.ftcdn.net/jpg/01/22/73/00/240_F_122730057_ap199rB09c14HYYHfQRr8JFRPwLNLGRl.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
