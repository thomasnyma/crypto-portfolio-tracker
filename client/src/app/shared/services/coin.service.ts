import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coin, CoinQueryResponse } from '../models/coin.model';

const AllCoinsQuery = gql`
  query GetPrice($currency: String!) {
    getCoinInfo(currency: $currency) {
      currency
      id
      status
      price
      price_date
      price_timestamp
      symbol
      circulating_supply
      max_supply
      name
      logo_url
      market_cap
      market_cap_dominance
      transparent_market_cap
      num_exchanges
      num_pairs
      num_pairs_unmapped
      first_candle
      first_trade
      first_order_book
      first_priced_at
      rank
      rank_delta
      high
      high_timestamp
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private apollo: Apollo) {}
  getCoinInfo(id: string): Observable<Coin> {
    return this.apollo
      .query<CoinQueryResponse>({
        query: AllCoinsQuery,
        variables: { currency: id },
      })
      .pipe(
        map((result) => {
          return result.data.getCoinInfo;
        })
      );
  }
}
