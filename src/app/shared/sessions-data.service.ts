import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../sessions/session.model';

@Injectable({ providedIn: 'root' })
export class SessionsDataService {
  constructor(private httpClient: HttpClient) {}

  getSessions() {
    return this.httpClient.get<Session[]>('http://localhost:3000/api/sessions');
  }

  getSessionById(index: number) {
    return this.httpClient.get<Session>(
      'http://localhost:3000/api/sessions/' + index
    );
  }

  addSession(session: Session) {
    return this.httpClient.post<Session>(
      'http://localhost:3000/api/sessions',
      session
    );
  }

  updateSession(session: Session) {
    return this.httpClient.put<Session>(
      'http://localhost:3000/api/sessions/' + session._id,
      session
    );
  }

  deleteSession(index: number) {
    return this.httpClient.delete<Session>(
      'http://localhost:3000/api/sessions/' + index
    );
  }
}
