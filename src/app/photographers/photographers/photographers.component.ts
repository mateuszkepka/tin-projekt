import { Component, OnInit } from '@angular/core';
import { Photographer } from '../photographer.model';
import { PhotographersService } from '../photographers.service';

@Component({
  selector: 'app-photographers',
  templateUrl: './photographers.component.html',
  styleUrls: ['./photographers.component.css'],
})
export class PhotographersComponent implements OnInit {
  photographers: Photographer[];
  constructor(private photographersService: PhotographersService) {}

  ngOnInit(): void {
    this.photographers = this.photographersService.getPhotographers();
  }
}
