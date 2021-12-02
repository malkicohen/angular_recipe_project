import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipe } from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  editRecipe: recipe;
  recipeDetail2: recipe;
  public recArr: recipe[] = [new recipe("1", "אצבעות פילו במילוי גבינהad", 72, 2, new Date(2020, 9, 5), "345", "2", 2, "./assets/אצבעות פילו במילוי גבינה.jpg", true),
  new recipe("1", "סמבוסק פיצהad", 60, 2, new Date(2020, 9, 5), "123", "1", 5, "./assets/סמבוסק פיצה.jpg", true)]
  constructor(private http: HttpClient) { }
  allRecipe(): Observable<recipe[]> {

    return this.http.get<recipe[]>("https://localhost:44305/recipei/allRecipies");

  }
  addRecipe(r: recipe): Observable<number> {

    return this.http.post<number>("https://localhost:44305/recipei/addRecipe", r);
  }
  editRecipe1(r: recipe): Observable<number> {

    return this.http.post<number>("https://localhost:44305/recipei/change", r);
  }
  recipeDetail(r: recipe): Observable<recipe> {

    return this.http.post<recipe>("https://localhost:44305/recipei/detail", r);
  }


}
