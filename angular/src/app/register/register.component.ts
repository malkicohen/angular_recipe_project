import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, Directive, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/models/user';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    this.myForm1 = new FormGroup({
      "Name": new FormControl("", Validators.required),
      "Mail": new FormControl("", Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
      "Address": new FormControl("", Validators.required),
      "Password": new FormControl("", Validators.required),
      "Mail2": new FormControl("", Validators.required)
    })
    this.allUser();
  }
  constructor(public ser: UserService, public rout: Router) {
  }
  myForm1: FormGroup;
  public newUser: user;
  isCanCome = this.ser.isLogedIn;
  public code: number = 123456;
  public newCode;
  public userList: user[] = [];
  addToList(newU) {
    this.ser.addUser(newU).subscribe(succ => newU);
    sessionStorage.setItem("thisUser", JSON.stringify(newU));
  }
  allUser() {
    const allUserList = this.ser.allUser().subscribe(succ => {
      this.userList = succ;
      console.log(this.userList);
    });
  }
  isRegistered1() {
    this.ser.checkInUser(this.myForm1.value.Name, this.myForm1.value.Password).subscribe((succ) => {
      if (succ == 2) {
        Swal.fire("הנך כבר רשום במערכת")
        this.rout.navigateByUrl('allRecipies');
      }
      if ((succ == 1)) {
        this.newCode = this.code++;
        this.newUser = new user(this.newCode, this.myForm1.value.Name, this.myForm1.value.Address, this.myForm1.value.Mail, this.myForm1.value.Password);
        this.addToList(this.newUser);
        this.rout.navigateByUrl('allRecipies');
        this.allUser();
      }
    })
  }
}

