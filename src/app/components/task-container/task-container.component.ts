import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.sass']
})
export class TaskContainerComponent implements OnInit {

  tasks: any[]; //Should be input or requested 

  constructor() {
    this.tasks = [
      {
        nameInfo: 'Realizar aplicacion de listas',
        state: 'active'
      },
      {
        nameInfo: 'Realizar aplicacion de listas x2',
        state: 'pending'
      },
      {
        nameInfo: 'Realizar aplicacion de listas x3',
        state: 'completed'
      },
    ];
  }

  ngOnInit(): void {
  }

}
