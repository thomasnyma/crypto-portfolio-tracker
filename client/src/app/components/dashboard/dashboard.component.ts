import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  '730ORYS7RD',
  '241da836d6bc2129ca7bad6d2ee2922f'
);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  config = {
    indexName: 'coins',
    searchClient
  };

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
