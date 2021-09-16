import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCheckCircle, faEllipsisH, faCheck, faExclamation, faTrashAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input() task: any;

  open: Boolean;
  stateIcon: IconDefinition = faCircle;
  moreIcon: IconDefinition = faEllipsisH;
  iwarning: IconDefinition = faExclamation;
  idone: IconDefinition = faCheck;
  idelete: IconDefinition = faTrashAlt;
  
  @Output() taskStateChanged = new EventEmitter<any>();

  constructor() {
    this.open = false;
  }

  get state() { return this.task.state }
  get completed() { return this.state === 'completed'; }

  ngOnInit(): void {
    this.stateIcon = this.completed? faCheckCircle: faCircle;
  }

  toggleDone() {
    this.task.state = this.completed? 'active': 'completed';
    this.taskStateChanged.emit(this.state);
  }

  toggleMenu() {
    this.open = !this.open;
  }

}
