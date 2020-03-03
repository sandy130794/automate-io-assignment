import { Component, OnInit, Input } from '@angular/core';
import { ListOfNotesProperties } from '../../models/listOfNotes';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedNoteIndex;
  isCreate: boolean;
  isDelete: boolean;
  disableCreate: boolean;
  searchText = '';

  constructor(private sharedService: SharedService) {
    this.sharedService.noteItemTextChangeSubscription().subscribe(data => {
      this.selectedNoteIndex = data.index;
      if (this.selectedNoteIndex === -1) {
        setTimeout(() => {
          this.isCreate = false;
        });
      }
      if (data.selectedItem && !data.selectedItem.title && !data.selectedItem.description) {
        this.disableCreate = true;
      } else {
        this.disableCreate = false;
      }
    });
  }

  ngOnInit() {
    this.sharedService.noteItemTextChanged.next({
      selectedItem: {},
      index: -1
    });
  }

  createNote() {
    this.isCreate = true;
    if (this.selectedNoteIndex !== -1) {
      this.sharedService.noteItemTextChanged.next({
        selectedItem: {},
        index: -1
      });
    }
  }

  deleteNote(event) {
    this.isDelete = true;
  }

  updateDeleteStatus(event) {
    setTimeout(() => {
      this.isDelete = event;
    });
  }

}
