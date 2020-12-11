import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photographer } from '../photographers/photographer.model';

@Injectable({ providedIn: 'root' })
export class PhotographersDataService {
  constructor(private httpClient: HttpClient) {}

  getPhotographers() {
    return this.httpClient.get<Photographer[]>(
      'http://localhost:3000/api/photographers'
    );
  }

  getPhotographerById(index: number) {
    return this.httpClient.get<Photographer>(
      'http://localhost:3000/api/photographers/' + index
    );
  }

  addPhotographer(photographer: Photographer) {
    return this.httpClient.post<Photographer>(
      'http://localhost:3000/api/photographers',
      photographer
    );
  }

  updatePhotographer(photographer: Photographer) {
    return this.httpClient.put<Photographer>(
      'http://localhost:3000/api/photographers/' + photographer._id,
      photographer
    );
  }

  deletePhotographer(index: number) {
    return this.httpClient.delete<Photographer>(
      'http://localhost:3000/api/photographers/' + index
    );
  }
}
