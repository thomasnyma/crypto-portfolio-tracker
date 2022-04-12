import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';

const searchClient = algoliasearch(
  environment.algolia.appId,
  environment.algolia.searchOnlyApiKey
);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchConfig = {
    indexName: 'coins',
    searchClient,
  };

  constructor() {}

  ngOnInit(): void {}
}
