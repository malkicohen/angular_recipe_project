import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { user } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogedIn:number=0;
  private userArr:user[]=
  [new user("2","הרב קוק 50","חנה","chana2541@gmail.com","chana5321" ),
  new user("1","הרצל 30 תל אביב","רבקה","rivka534@gmail.com","gm76580" )
];

  constructor(private http:HttpClient) { }
  allUser():Observable <user[]>{
    return this.http.get<user[]>("https://localhost:44305/useri/allUsers");
  }

  checkInUser(name:string,password:string):Observable<number>{
    return this.http.get<number>("https://localhost:44305/useri/isUser?nameOfUser="+name+"&password="+password);
  }

  addUser(u:user):Observable <number>{
   
    return this.http.post<number>("https://localhost:44305/useri/addUser",u);
  }

  isRegistered(name:string,password:string):Observable <number>{
    return this.http.get<number>("https://localhost:44305/useri/register?name="+name+"&password="+password);
  }

}