import { CoinInfoService } from './../../shared/services/coin-info.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Coin } from 'src/app/shared/models/coin.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  search = new FormControl();
  coins!: Coin[];
  filteredCoins!: Observable<Coin[]>;

  constructor(private coinService: CoinInfoService) { }

  ngOnInit(): void {
    this.filteredCoins = this.search.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.symbol)),
      map(symbol => (symbol ? this._filter(symbol) : this.coins.slice())),
    )
  }

  displayFn(coin: Coin): string {
    return coin && coin.symbol ? coin.symbol : '';
  }

  getCoins() {
    this.coinService.findAll(this.searchText).subscribe(coins => this.coins = coins.getCoinInfo)
  }

  private _filter(coin: string): Coin[] {
    const filterValue = coin.toLowerCase();
    return this.coins.filter(coin => coin.symbol.toLowerCase().includes(filterValue));
  }
}
