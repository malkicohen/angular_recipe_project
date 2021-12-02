import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { recipe } from 'src/models/Recipe';
import Swal from 'sweetalert2';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent  {
  constructor(public ser: RecipesService, public rout: Router) { }
  newRecipe: recipe = new recipe(null, null, null, null, null, null, null, null, null, null);
  saveRecipe() {
    this.newRecipe.StringList = this.ing;
    this.newRecipe.Prepartion = this.pre;
    this.newRecipe.AddDate = new Date();
    this.ser.addRecipe(this.newRecipe).subscribe(succ => this.newRecipe);
    Swal.fire("המתכון נוסף בהצלחה");
    this.rout.navigateByUrl('allRecipies');
  }
  ing: string[] = [""];
  pre: string[] = [""];
  see() {
    console.log(this.newRecipe.Picture)
    let num = 0;
    let siman: string = "h";
    for (var i = this.newRecipe.Picture.length; i > 0 && this.newRecipe.Picture.charAt(i) != siman; i--);
    console.log(i);
    num = i;
    this.newRecipe.Picture = this.newRecipe.Picture.slice(i + 1);
    console.log(this.newRecipe.Picture)

  }
  push2: string = " ";
  push: string = " ";
  updateIng() {
    console.log(this.ing);
    this.ing = this.ing.filter(item => item != "");
    this.ing.push("");
    console.log(this.ing);
  }
  updatePre() {
    console.log(this.pre);
    this.pre = this.pre.filter(item => item != "");
    this.pre.push("");
    console.log(this.pre);
  }
  funcindex(index: any, item: any) {
    return index;
  }
}