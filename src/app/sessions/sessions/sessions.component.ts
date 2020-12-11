import { Component, OnInit } from '@angular/core';
import { Session } from '../session.model';
import { SessionsService } from '../sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
})
export class SessionsComponent implements OnInit {
  sessions: Session[];
  constructor(private sessionsService: SessionsService) {}

  ngOnInit(): void {
    this.sessions = this.sessionsService.getSessions();
  }
}
