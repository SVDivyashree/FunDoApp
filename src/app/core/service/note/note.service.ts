import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpUtil: HttpService, private router: Router, public snackBar: MatSnackBar) { }

  retrieveNotes(token): Observable<any> {
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        token
      })
    };
    return this.httpUtil.getService(environment.note_url + 'retrievenote', httpheaders);
  }

  createNote(note): Observable<any> {
    const token = localStorage.getItem('token');
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token
      })
    };
    return this.httpUtil.postServiceForNoteCreate(environment.note_url + 'createnote', httpheaders, note);
  }
  updateNote(note) {
    const token = localStorage.getItem('token');
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token
      })
    };
    return this.httpUtil.putServiceForNoteUpdate(environment.note_url + 'updatenote', note, httpheaders);
  }

  deleteNote(noteId) {
    const token = localStorage.getItem('token');
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        token
      })
    };
    return this.httpUtil.deleteServiceForNoteDelete(environment.note_url + 'deletenote' + noteId, httpheaders);
}



}
