import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { TimePipe } from './time.pipe';
import { LogOutComponent } from './log-out/log-out.component';

const routes: Routes=[
  {path: 'login', component:LoginComponent},
  {path: 'allRecipies', component:AllRecipesComponent,children:[]},
  {path: 'recipeDetails', component:RecipeDetailsComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'editRecipe', component:EditRecipeComponent},
  {path: 'addRecipe', component:AddRecipeComponent},
  {path: 'logOut', component:LogOutComponent},
  {path: '**',redirectTo:"/login"},
  ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
        RecipeDetailsComponent,
        EditRecipeComponent,
        AddRecipeComponent,
        TimePipe,
        LogOutComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule,
   FormsModule,
   RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
