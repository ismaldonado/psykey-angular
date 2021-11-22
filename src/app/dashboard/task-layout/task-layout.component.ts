import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TASK_MOCK } from '../../model/task/task-mock';
import { Task } from '../../model/task/task';

@Component({
  selector: 'app-task-layout',
  templateUrl: './task-layout.component.html',
  styleUrls: ['./task-layout.component.scss']
})
export class TaskLayoutComponent implements OnInit, AfterContentChecked {
  taskForm: FormGroup;
  taskList: Array<Task> = TASK_MOCK;

  constructor(private form: FormBuilder,
              private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.taskForm = this.form.group({
      description: ['']
    });
  }
}
