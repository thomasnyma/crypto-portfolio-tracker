import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';

const GET_PRICE = gql`
  query GetPrice($currency: String!) {
    getCoinInfo(currency: $currency) {
      name
      price
      logo_url
    }
  }
`;

interface Coin {
  name: string;
  price: string;
  logo_url: string;
}

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.scss']
})
export class CoinInfoComponent implements OnInit {
  coin?: Coin;
  currencyId = this.activatedRoute.snapshot.paramMap.get('id');
  loading = true;
  error: any;

  private querySubscription: Subscription | undefined;

  constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.update(this.currencyId!.toUpperCase());
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
        this.coin = data.getCoinInfo[0];
        console.log(this.coin);
        this.error = error;
      });
  }
}
