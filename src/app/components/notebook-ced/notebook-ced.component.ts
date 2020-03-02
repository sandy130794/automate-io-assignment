import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ListOfNotesProperties } from '../../models/listOfNotes';

@Component({
  selector: 'app-notebook-ced',
  templateUrl: './notebook-ced.component.html',
  styleUrls: ['./notebook-ced.component.css']
})
export class NotebookCedComponent implements OnInit {
  selectedNoteItem;
  selectedNoteIndex: number;

  title;
  description;
  isEditMode: boolean;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.selectedNoteIndex = -1;
    this.sharedService.noteItemTextChangeSubscription().subscribe(data => {
      console.log(data);
      if (Object.keys(data).length > 0) {
        this.selectedNoteIndex = data.index;
        this.title = data.selectedItem.title;
        this.description = data.selectedItem.description;
      }
    });
  }

  noteDataChange() {
    // Emits the event.
    console.log(this.selectedNoteIndex);
    let itemObj = {};
    if (!this.title && !this.description) {
      itemObj = {
        selectedItem: {},
        index: -1
      };
    } else {
      itemObj = {
        selectedItem: {
          title: this.title,
          description: this.description,
          timeStamp: new Date(),
        },
        index: this.selectedNoteIndex
      };
    }
    this.sharedService.noteItemTextChanged.next(itemObj);
  }

}

