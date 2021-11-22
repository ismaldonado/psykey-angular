import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchRequest } from '../../../model/searcher/search-request';
import { therapyTypeList } from '../../../model/enums/therapy-type';
import { userTypeList } from '../../../model/enums/user-type';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Output() searchRequest: EventEmitter<SearchRequest> = new EventEmitter<SearchRequest>();

  searchForm: FormGroup;
  therapyTypesList = therapyTypeList;
  userTypeList = userTypeList;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSearch(): void {
    this.searchRequest.emit(this.buildSearchRequest());
  }

  onClean(): void {
    this.searchForm.reset();
  }

  private initForm(): void {
    this.searchForm = this.fb.group({
      name: [''],
      surname: [''],
      dni: [''],
      therapyType: [''],
      userType: ['']
    });
  }

  private buildSearchRequest(): SearchRequest {
    return {
      dni: this.searchForm.get('dni')?.value ? this.searchForm.get('dni')?.value : null,
      name: this.searchForm.get('name')?.value ? this.searchForm.get('name')?.value : null,
      surname: this.searchForm.get('surname')?.value ? this.searchForm.get('surname')?.value : null,
      userType: this.searchForm.get('userType')?.value ? this.searchForm.get('userType')?.value : null,
      therapyType: this.searchForm.get('therapyType')?.value ? this.searchForm.get('therapyType')?.value : null
    };
  }
}
