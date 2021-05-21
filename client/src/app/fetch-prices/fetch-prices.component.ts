import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

// We use the gql tag to parse our query string into a query document
const GET_PRICE = gql`
  query GetPrice($currency: String!) {
    getCoinInfo(currency: $currency) {
      name
      price
      logo_url
    }
  }
`;

interface coin {
  name: string;
  price: string;
  logo_url: string;
}

@Component({
  selector: 'app-fetch-prices',
  templateUrl: './fetch-prices.component.html',
  styleUrls: ['./fetch-prices.component.scss'],
})
export class FetchPricesComponent implements OnInit {
  coinInfo?: coin[];
  loading = true;
  error: any;
  currency: string = 'BTC,ETH,ADA,LTC,LINK';

  private querySubscription: Subscription | undefined;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.update(this.currency);
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  update(currency: string) {
    this.querySubscription = this.apollo
      .query<any>({
        query: GET_PRICE,
        variables: {
          currency: currency,
        },
      })
      .subscribe(({ data, loading, error }) => {
        this.loading = loading;
        this.coinInfo = data.getCoinInfo;
        this.error = error;
      });
  }
}

// Example search: ETH,LTC,BTC,LINK,XRP,DOGE,ADA
