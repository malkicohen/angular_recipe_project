import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { user } from '../../models/user'
import { recipe } from '../../models/recipe';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  listBeforeChanges: recipe[] = [];
  constructor(public ser1: UserService, public ser: RecipesService, public rout: Router) {
    console.log(this.listRecipe);
  }
  public listRecipe: recipe[] = [];
  allRecipies() {
    const allList = this.ser.allRecipe().subscribe(succ => {
      this.listRecipe = succ;
      console.log(this.listRecipe);
      this.recipeFilter = succ;
    });

  }

  myCategory: string[] = ["גלידות", "יום הולדת", "מאפים"];
  code: string[] = ["345", "123", "456"];
  Category: string = "";
  time: number = 0;
  x: string;
  search: string = "";
  recipeFilter: recipe[] = [];
  sinun() {
    if (this.search != null && this.search != "")
      this.recipeFilter = this.recipeFilter.filter(name => name.RecipeName.includes(this.search));
    else if (this.time != 0)
      this.recipeFilter = this.recipeFilter.filter(r => r.PrepartionTime <= this.time);
    else if (this.Category != null && this.Category != " ") {
      for (let i = 0; i < this.myCategory.length; i++) {
        if (this.myCategory[i] == this.Category)
          this.x = this.code[i];
      }
      this.recipeFilter = this.recipeFilter.filter(r => r.CategoryCode == this.x);
    }

  }
  ngOnInit(): void {
    this.allRecipies();

  }

  user3 = JSON.parse(sessionStorage.getItem("thisUser"));
  public rec: number;
  isLoged = this.ser1.isLogedIn;
  edit(recipe: recipe) {
    if (this.user3.Code == recipe.UserCode) {
      console.log(recipe);
      this.ser.editRecipe = recipe;
      this.rout.navigate(['editRecipe']);
    }
    else {
      Swal.fire("אינך מורשה");
    }
  }

  details(recipe: recipe) {

    if (this.user3 != null) {
      console.log(recipe);
      this.ser.recipeDetail2 = recipe;
      this.rout.navigate(['recipeDetails']);
    }
    else {
      Swal.fire("אינך משתמש רשום");
    }


  }
  add() {
    this.rout.navigateByUrl('addRecipe');
  }




}

