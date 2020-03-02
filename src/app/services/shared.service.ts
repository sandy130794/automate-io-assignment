import { Injectable, EventEmitter } from '@angular/core';
import { ListOfNotesProperties } from '.././models/listOfNotes';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  noteItemTextChanged = new BehaviorSubject<any>({});

  public noteItemTextChangeSubscription() {
    return this.noteItemTextChanged.asObservable();
  }

  constructor() { }
  noteStorage(List: ListOfNotesProperties) {
    localStorage.setItem('list', JSON.stringify(List));
  }
}
