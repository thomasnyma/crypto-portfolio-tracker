import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AllCoinsQueryResponse, CoinQueryResponse } from '../models/query-responses.model';

const AllCoinsQuery = gql`
query GetPrice($currency: String!) {
  getCoinInfo(currency: $currency) {
    name
    price
    logo_url
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class CoinInfoService {


  constructor(private apollo: Apollo) { }

  findAll(ids: string): Observable<AllCoinsQueryResponse> {
    return this.apollo
      .query<AllCoinsQueryResponse>({ query: AllCoinsQuery, variables: { currency: ids }  })
      .pipe(map(result => result.data));
  }

  // TODO: add functionality to get coin info by id in API
  findOne(id: string): Observable<AllCoinsQueryResponse> {
    return this.apollo
      .query<AllCoinsQueryResponse>({ query: AllCoinsQuery, variables: { currency: id } })
      .pipe(map(result => result.data));
  }
}
