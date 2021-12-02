import { Component, OnInit } from '@angular/core';
import { recipe } from 'src/models/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  // @input()
  newRecipe: recipe;
  constructor(public ser: RecipesService) { }
  myRecipe1 = this.ser.recipeDetail2;
  recipe1: recipe;
  ngOnInit(): void {
    this.level(this.myRecipe1.Level);
  }
  pic = [];
  level(l) {
    for (let i = 0; i < l; i++) {
      this.pic[i] = "../../assets/כוכב.png";

    }
    for (let i = l; i < 5; i++) {
      this.pic[i] = "../../assets/כוכבריק.png";
    }
    console.log(this.pic);
  }

  ifBirthday() {
    if (this.myRecipe1.CategoryCode == "123")
      return true;
    return false;
  }
  ifCookie() {
    if (this.myRecipe1.CategoryCode == "345")
      return true;
    return false;
  }
  ifCakey() {
    if (this.myRecipe1.CategoryCode == "456")
      return true;
    return false;
  }

}
