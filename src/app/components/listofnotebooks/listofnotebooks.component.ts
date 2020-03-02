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
  notesList = [];
  // noteTitle = 'Example Note';
  selectedItem: any;
  selectedIndex: number;

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
    if (this.isCreateMode) {
      console.log(this.selectedItem);
      this.notesList.unshift(this.selectedItem);
      this.selectedIndex = 0;
      this.sharedService.noteItemTextChanged.next({
        selectedItem: this.selectedItem,
        index: this.selectedIndex
      });
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

}
