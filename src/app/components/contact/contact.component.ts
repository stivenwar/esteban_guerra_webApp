import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // email = new FormControl('', [Validators.required, Validators.email]);
  // name = new FormControl('', [Validators.required, Validators.minLength(5)]);
   select: any;
  message: any;
  name:any;
  email:any;
  generalForm: any;


  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter 5 or more characters';
    }

    return this.name.hasError('email') ? 'Not a valid email' : '';
  }
  contactForm(value: any) {
    console.log(value)
  }

  sendMail() {
    console.log(this.name,this.email,this.select,this.message)
  }
}
