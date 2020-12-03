import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: [
    './reservation.component.css',
    '../../shared/forms.css']
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reservationForm = new FormGroup({
      'photographer': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'subject': new FormControl(null, Validators.required),
      'place': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.reservationForm);
  }
}
