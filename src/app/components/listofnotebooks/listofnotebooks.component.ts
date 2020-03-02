import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-listofnotebooks',
  templateUrl: './listofnotebooks.component.html',
  styleUrls: ['./listofnotebooks.component.css']
})
export class ListofnotebooksComponent implements OnInit {
  @Input() receiveTitle;
  @Input() createList;
  @Output() createdisable = new EventEmitter();

  NotesList = [];
  NoteTitle = 'Example Note';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.createList === true) {
      console.log(this.createList);
      this.NotesList.unshift(this.NoteTitle);
      this.sharedService.noteStorage(this.NotesList);
      const createbutton = false;
      this.createdisable.emit(createbutton);
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.NoteTitle = this.receiveTitle;

  }

}
