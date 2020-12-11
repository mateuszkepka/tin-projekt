import { Injectable } from '@angular/core';

import { PhotographersDataService } from '../shared/photograhers-data.service';
import { Photographer } from './photographer.model';

@Injectable({ providedIn: 'root' })
export class PhotographersService {
  private photographers: Photographer[] = [];

  constructor(private photographersDataService: PhotographersDataService) {}

  getPhotographers() {
    this.photographersDataService
      .getPhotographers()
      .subscribe((photographers) => {
        for (let photographer of photographers) {
          let newPhotographer = new Photographer(
            photographer._id,
            photographer.firstName,
            photographer.lastName,
            photographer.rate,
            photographer.specialization
          );
          this.photographers.push(newPhotographer);
        }
      });
    return this.photographers;
  }

  getPhotographerById(index: number) {
    this.photographersDataService
      .getPhotographerById(index)
      .subscribe((photographer) => {
        let newPhotographer = new Photographer(
          photographer._id,
          photographer.firstName,
          photographer.lastName,
          photographer.rate,
          photographer.specialization
        );
        return newPhotographer;
      });
      return null;
  }

  addPhotographer(photographer: Photographer) {
    this.photographers.push(photographer);
    this.photographersDataService
      .addPhotographer(photographer)
      .subscribe((response) => console.log(response));
  }

  updatePhotographer(photographer: Photographer) {
    this.photographers[photographer._id] = photographer;
    this.photographersDataService
      .updatePhotographer(photographer)
      .subscribe((response) => console.log(response));
  }

  deletePhotographer(index: number) {
    this.photographers.splice(index, 1);
    this.photographersDataService
      .deletePhotographer(index)
      .subscribe((response) => console.log(response));
  }
}
