import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  providers:[UserService]
  // styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(public rout:Router) { }

  ngOnInit(): void {
   this. log();
  }
log(){
  Swal.fire({
    title: 'האם אתה בטוח?',
    text: 'אתה עומד להיתנתק מהמערכת',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'כן',
    cancelButtonText: 'לא'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'ההתנתקות בוצעה בהצלחה',
        
      )
      this.rout.navigateByUrl('login');
      sessionStorage.setItem("thisUser",JSON.stringify(null));
    // For more information about handling dismissals please visit
    // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        ':) אתה איתנו'
        
      )
      this.rout.navigateByUrl('allRecipies');
    }
  })
}
}
