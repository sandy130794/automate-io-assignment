import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ListOfNotesProperties } from '../../models/listOfNotes';

@Component({
  selector: 'app-listofnotebooks',
  templateUrl: './listofnotebooks.component.html',
  styleUrls: ['./listofnotebooks.component.css']
})
export class ListofnotebooksComponent implements OnInit, OnChanges {

  @Output() setSelectedItemEvent = new EventEmitter<any>();

  @Input() newItem;
  @Input() isCreateMode;
  @Input() isDeleteMode;
  @Input() searchText;
  notesList = [];
  selectedItem: any;
  selectedIndex: number;

  filteredList = [];

  @Output() changeDeleteStatus = new EventEmitter<any>();

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.noteItemTextChangeSubscription().subscribe(data => {
      this.selectedIndex = data.index;
      this.selectedItem = data.selectedItem;
      if (this.selectedIndex >= 0) {
        this.notesList[this.selectedIndex] = this.selectedItem;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isCreateMode && this.isCreateMode) {
      this.notesList.unshift(this.selectedItem);
      this.filteredList = this.notesList;
      this.selectedIndex = 0;
      this.sharedService.noteItemTextChanged.next({
        selectedItem: this.selectedItem,
        index: this.selectedIndex
      });
    }

    if (changes.isDeleteMode && this.isDeleteMode) {
      this.deleteNote();
    }

    if (changes.searchText) {
      this.filterNotesBySearchText();
    }
  }

  setSelectedItem(index) {
    this.selectedItem = this.notesList[index];
    this.selectedIndex = index;
    this.sharedService.noteItemTextChanged.next({
      selectedItem: this.selectedItem,
      index: this.selectedIndex
    });
  }

  deleteNote() {
    this.notesList.splice(this.selectedIndex, 1);
    this.filteredList = this.notesList;
    if (this.notesList.length === 0) {
      this.sharedService.noteItemTextChanged.next({
        selectedItem: {},
        index: -1
      });
    }
    this.changeDeleteStatus.emit(false);
  }

  filterNotesBySearchText() {
    if (!this.searchText) {
      this.filteredList = this.notesList;
      return;
    }
    const lowerCaseSearchText = this.searchText.toLowerCase();
    this.filteredList = this.notesList.filter((note) => {
        return Object.values(note).some( val => 
            val.toString().toLowerCase().includes(lowerCaseSearchText) 
        );
    });

  }
}
