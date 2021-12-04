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
  search = new FormControl();
  coins: Coin[] = [{ name: 'Bitcoin', symbol: 'BTC' }, { name: 'Ethereum', symbol: 'ETH' }, { name: 'Litecoin', symbol: 'LTC' }];
  filteredCoins!: Observable<Coin[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredCoins = this.search.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.coins.slice())),
    )
  }

  displayFn(coin?: Coin): string {
    return coin && coin.name ? coin.name : '';
  }

  private _filter(coin: string): Coin[] {
    const filterValue = coin.toUpperCase();
    return this.coins.filter(coin => coin.name.toUpperCase().indexOf(filterValue));
  }
}
