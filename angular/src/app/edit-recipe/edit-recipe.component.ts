import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { recipe } from 'src/models/Recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  myRecipe = this.ser.editRecipe;
  public listRecipe: recipe[] = [];
  recipeNew: recipe;

  constructor(public ser: RecipesService, public rout: Router) { }
  saveChanges() {
    this.ser.editRecipe1(this.myRecipe).subscribe(succ => console.log(succ));
    this.rout.navigate(['allRecipies']);
  }
  cancel() {
    this.rout.navigate(['allRecipies']);
  } funcindex(index: any, item: any) {
    return index;
  }
  see() {
    console.log(this.myRecipe.Picture)
    let num = 0;
    let siman: string = "h";
    for (var i = this.myRecipe.Picture.length; i > 0 && this.myRecipe.Picture.charAt(i) != siman; i--);
    console.log(i);
    num = i;
    this.myRecipe.Picture = this.myRecipe.Picture.slice(i + 1);
    console.log(this.myRecipe.Picture)
  }
  ngOnInit(): void {
  }
}
