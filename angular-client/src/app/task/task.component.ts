import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task-service';
import {Task} from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public task: Array<Task> = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getAllTask();
  }

  public getAllTask(): void {
    this.taskService.getAllTask()
      .subscribe(
        resp => this.task = resp,
        err => console.log('Task can not read')
      );
  }

}
