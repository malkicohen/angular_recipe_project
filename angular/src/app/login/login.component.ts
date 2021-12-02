import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpModule } from '@angular/http';
import { user } from 'src/models/user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit { 
  userList: user[] = [];
  myForm: FormGroup;
  list;
  errorLogIn;
  checkUser: user = new user(null, null, null, null, null);

  myUser: user;
  // alert:string="הינך רשום במערכת";
  // catch:string="הסיסמה תפוסה, אנא בחר סיסמא שונה";
  constructor(public active: ActivatedRoute, public ser: UserService, public rout: Router) {
   
  }
 
 
  ngOnInit(): void {
    this.myForm = new FormGroup({
      "name": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
    })
    this.ser.allUser().subscribe(succ => this.list = succ);
    // this.allUser();
  }

  connection() {
   
    if (this.myForm.valid) {
      this.ser.checkInUser(this.myForm.value.name, this.myForm.value.password).subscribe((succ) => {

        if (succ == 0) {
          Swal.fire(" סיסמה שגויה אנא נסה שוב");
        }
        if ((succ == 1))
          this.rout.navigateByUrl('register');
        if ((succ == 2)) {
          this.rout.navigateByUrl('allRecipies');
          Swal.fire("Hi" + "  " + this.myForm.value.name)
          for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].UserName == this.myForm.value.name) {
              this.myUser = this.list[i];
            }
          }

          sessionStorage.setItem("thisUser", JSON.stringify(this.myUser));
          console.log(this.myUser);
        }
      })
    }
    else {
      Swal.fire("יש למלא פרטים")
    }


  }
}

