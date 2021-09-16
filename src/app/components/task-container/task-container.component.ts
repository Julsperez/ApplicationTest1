import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.sass']
})
export class TaskContainerComponent implements OnInit {

  tasks: any[]; //Should be input or requested 
  completedTasks: any[];

  constructor() {
    this.tasks = [
      {
        nameInfo: 'Ir al super mercado y comprar frutas y verduras',
        state: 'active'
      },
      {
        nameInfo: 'Esta es una tarea pendiente',
        state: 'pending'
      },
      {
        nameInfo: 'Esta es una tarea',
        state: 'completed'
      },
    ];
    this.completedTasks = [];
  }

  get completedLen() {
    return this.completedTasks.length;
  }

  ngOnInit(): void {
    this._filterTasks();
  }

  onStateChanged(state: any, index: number) {
    this._swapTasks(state, index)
  }

  private _filterTasks() {
    this.completedTasks = this.tasks.filter(t => t.state === 'completed');
    this.tasks = this.tasks.filter(t => t.state !== 'completed');
  }

  private _swapTasks(state: string, i: number) {
    if(state === 'completed') {
      this.completedTasks.push(this.tasks.splice(i, 1)[0]);
    } else if (state === 'active') {
      this.tasks.push(this.completedTasks.splice(i, 1)[0]);
    }
  }

    

}
