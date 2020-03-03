import { Injectable, EventEmitter } from '@angular/core';
import { Note } from '.././models/listOfNotes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  noteItemTextChanged = new BehaviorSubject<any>({});

  public noteItemTextChangeSubscription() {
    return this.noteItemTextChanged.asObservable();
  }

  constructor() { }

  storeNotes(list: Note[]) {
    localStorage.setItem('notesData', JSON.stringify(list));
  }

  getNotes() {
    return localStorage.getItem('notesData');
  }
}
