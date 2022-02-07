import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

const searchClient = algoliasearch(
  environment.algolia.appId,
  environment.algolia.searchOnlyApiKey
);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  config = {
    indexName: 'coins',
    searchClient
  };

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  NavigateToCoin(coinId: number) {
    this.router.navigate([`coin/${coinId}`]);
  }
}
