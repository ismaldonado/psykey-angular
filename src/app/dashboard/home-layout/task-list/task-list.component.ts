import { Component, OnInit } from '@angular/core';
import { TASK_MOCK } from '../../../model/task/task-mock';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from 'src/app/service/alert/alert.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskList = [];

  constructor(private readonly alertService: AlertService) {}

  ngOnInit(): void {
    this.taskList = TASK_MOCK.filter((value) => value.done === false);
  }

  openSnackBar() {
    this.alertService.openSnackBar('Actualmente en construcción');
  }
}
