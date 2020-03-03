import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { faTrash, faEdit, faBars } from '@fortawesome/free-solid-svg-icons';

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
  deleteIcon = faTrash;
  editIcon = faEdit;
  barsIcon = faBars;

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

  toggleSidePanel() {
    if (document.getElementById('sidePanel').style.width && document.getElementById('sidePanel').style.width !== '0px') {
      document.getElementById('sidePanel').style.width = '0';
      document.getElementById('main').style.width = '90%';
    } else {
      document.getElementById('sidePanel').style.width = '25%';
      document.getElementById('main').style.width = '73%';
    }

  }

}
