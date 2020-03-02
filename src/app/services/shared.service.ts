import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  noteStorage(List) {
    localStorage.setItem('list', 'data');
  }
}
