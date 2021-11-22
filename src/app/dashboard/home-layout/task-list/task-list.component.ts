import { Component, OnInit } from '@angular/core';
import { TASK_MOCK } from '../../../model/task/task-mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList = [];

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.taskList = TASK_MOCK.filter(value => value.done === false);
  }

  goToTask(): void {
    this.router.navigate(['/dashboard/task']).then();
  }
}
