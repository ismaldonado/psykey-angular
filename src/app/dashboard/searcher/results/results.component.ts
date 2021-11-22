import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { SearchResponse } from '../../../model/searcher/search-response';
import { therapyTypeMap } from '../../../model/enums/therapy-type';
import { userTypeMap } from '../../../model/enums/user-type';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnChanges {
  @Input() userResponseList: Array<SearchResponse>;

  displayedColumns: Array<string> = ['dni', 'name', 'surname', 'therapyType', 'userType', 'clientFullName', 'detail'];
  dataSource?: MatTableDataSource<SearchResponse>;
  externalIcon = faExternalLinkAlt;
  therapyTypesMap = therapyTypeMap;
  userTypeMap = userTypeMap;

  constructor(private readonly router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.userResponseList) {
      this.dataSource = new MatTableDataSource(this.userResponseList);
    }
  }

  applyFilter(event: Event): void {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  onClick(userId: number): void {
    this.router.navigate(['/dashboard/user-detail'], { queryParams: { id: userId } }).then();
  }
}
