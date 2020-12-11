import { Injectable } from '@angular/core';
import { SessionsDataService } from '../shared/sessions-data.service';
import { Session } from './session.model';

@Injectable({ providedIn: 'root' })
export class SessionsService {
  private sessions: Session[] = [];

  constructor(private sessionsDataService: SessionsDataService) {}

  getSessions() {
    this.sessionsDataService.getSessions().subscribe((sessions) => {
      for (let session of sessions) {
        let newSession = new Session(
          session._id,
          session.photographerId,
          session.clientId,
          session.dateFrom,
          session.dateTo,
          session.place,
          session.subject
        );
        this.sessions.push(newSession);
      }
    });
    return this.sessions;
  }

  getSessionById(index: number) {
    this.sessionsDataService.getSessionById(index).subscribe((session) => {
      let newSession = new Session(
        session._id,
        session.photographerId,
        session.clientId,
        session.dateFrom,
        session.dateTo,
        session.place,
        session.subject
      );
      return newSession;
    });
    return null;
  }

  addSession(session: Session) {
    this.sessionsDataService
      .addSession(session)
      .subscribe((response) => console.log(response));
  }

  updateSession(session: Session) {
    this.sessionsDataService
      .updateSession(session)
      .subscribe((response) => console.log(response));
  }

  deleteSession(index: number) {
    this.sessionsDataService
      .deleteSession(index)
      .subscribe((response) => console.log(response));
  }
}
