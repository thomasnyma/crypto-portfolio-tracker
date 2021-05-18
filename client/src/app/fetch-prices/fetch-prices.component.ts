import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

// We use the gql tag to parse our query string into a query document
const GET_PRICE = gql`
  query GetPrice($currency: String!) {
    exchangeRate(currency: $currency)
  }
`;

@Component({
  selector: 'app-fetch-prices',
  templateUrl: './fetch-prices.component.html',
  styleUrls: ['./fetch-prices.component.scss'],
})
export class FetchPricesComponent implements OnInit {
  rate?: number;
  loading = true;
  error: any;
  currency: string = 'BTC';

  private querySubscription: Subscription | undefined;

  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  update() {
    this.querySubscription = this.apollo
      .query<any>({
        query: GET_PRICE,
        variables: {
          currency: this.currency,
        },
      })
      .subscribe(({ data, loading, error }) => {
        this.loading = loading;
        this.rate = data?.exchangeRate;
        this.error = error;
      });
  }
}
