import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  // @ts-ignore
  @ViewChild('form') form: NgForm;
  // @ts-ignore
  user: User;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = {
      firstname: 'Firstname',
      lastname: 'Lastname',
      email: 'Email',
    };
    setTimeout(() => {
      this.form.setValue(this.user);
    });
  }
  onSubmit(): void {
    console.log(this.form.value);
  }

}
export class User {
  firstname: string;
  lastname: string;
  email: string;

  constructor(firstname: string, lastname: string, email: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
