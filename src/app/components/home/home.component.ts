import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noteHeader;
  noteCreation = false;
  
  constructor() { }

  ngOnInit() {
  }

  childtoParentHeading(val) {
    // console.log(val)
    this.noteHeader = val;
  }

  // creates and Adds a new note to the list
  createNote() {
    if (this.noteHeader !== '') {
      this.noteCreation = true;
    }
  }

  diablecreate(value) {
    this.noteCreation = value;
  }

  // detes a note from the list
  deleteNote() {}

  // searchnote form the list

}
