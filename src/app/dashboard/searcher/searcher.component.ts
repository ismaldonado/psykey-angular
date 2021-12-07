import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchRequest } from '../../model/searcher/search-request';
import { UserService } from '../../service/user/user.service';
import { SearchResponse } from '../../model/searcher/search-response';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit, OnDestroy {
  userResponseList: Array<SearchResponse>;
  private subscriptions: Subject<any> = new Subject<any>();

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.subscribeResponseList();
  }

  ngOnDestroy(): void {
    this.subscriptions.next();
    this.subscriptions.unsubscribe();
  }

  subscribeResponseList(): void {
    this.userService.getUserSearchResponse()
      .pipe(
        takeUntil(this.subscriptions),
        filter((value: Array<SearchResponse>) => !!value)
      )
      .subscribe((value: Array<SearchResponse>) => this.userResponseList = value);
  }

  onSearch(searchRequest: SearchRequest): void {
    this.userService.searchUsers(searchRequest).subscribe();
  }
}
