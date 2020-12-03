import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: [
    '../../shared/forms.css',
    './signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'passwordRepeat': new FormControl(null, Validators.required)
    })
  }

}
