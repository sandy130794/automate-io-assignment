import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-notebook-ced',
  templateUrl: './notebook-ced.component.html',
  styleUrls: ['./notebook-ced.component.css']
})
export class NotebookCedComponent implements OnInit, OnChanges {
  // @Input() addingNewNotes;
  @Output() titletoEmit = new EventEmitter();

  addingNewNotes;

  constructor(private sharedserive: SharedService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    // noteTitle() {
    //   // Emitts the event.
    //   this.titletoEmit.emit(this.addingnNewNotes);
    // }
  }

  noteTitle(value) {
    // Emitts the event.
    // console.log(value);
    this.titletoEmit.emit(value);
  }

  onKeydown(event) {
    console.log(event);
  }

}
