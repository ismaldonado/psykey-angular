import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportRR } from 'src/app/model/clinicalhistory/report-rr';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent implements OnInit {
  @Input() report: ReportRR;
  @Output() saveReport: EventEmitter<ReportRR> = new EventEmitter<ReportRR>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  reportForm: FormGroup;
  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.saveReport.emit(this.buildReport());
  }

  onCancel(): void {
    this.cancel.emit(false);
  }

  private initForm(): void {
    this.reportForm = this.form.group({
      date: [
        this.report?.date ? this.report.date : '',
        [Validators.required],
      ],
      description: [
        this.report?.description ? this.report.description : ''
      ],
    });
  }

  private buildReport(): ReportRR {
    return {
      id: this.report ? this.report.id : null,
      date: this.reportForm.get('date').value,
      description: this.reportForm.get('description').value,
    };
  }
}
