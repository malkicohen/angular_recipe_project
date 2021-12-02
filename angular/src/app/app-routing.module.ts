import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import {HttpModule} from '@angular/http'

const routes: Routes = [
  { path: 'login', component:LoginComponent,children:[
    {path:'register/:Name' ,component:LoginComponent}
  ]},
  { path: 'register', component:RegisterComponent},
  { path: 'allRecipies', component:AllRecipesComponent},
  { path: '', redirectTo: "/login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// imports:[
//   RouterModule.forRoot(Routes)]

export class AppRoutingModule { }

